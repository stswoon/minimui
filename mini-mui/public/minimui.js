(function () {
    window.minimui = {
        createFragment(id, selector) {
            loadMetadata(id).then(metadata => {
                loadStyle(metadata.css, () => {
                    loadScript(metadata.js, () => {
                        const element = document.querySelector(selector)
                        minimui.fragmentCreators[id].create(element);
                    });
                });
            });
        },

        fragmentCreators: {},
        registerFragment(id, fragmentCreator) {
            minimui.fragmentCreators[id] = fragmentCreator;
        }
    }

    function loadMetadata(id) {
        return fetch(`//localhost:5001/fragmentMetadata?id=${id}`, {headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .catch(e => console.error("Fail to load fragment metadata", e));
    }

    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.onload = () => callback();
        script.onerror = e => console.error("Fail to load fragment js resource", e);
        script.src = url;
        document.head.appendChild(script);
    }

    function loadStyle(url, callback) {
        if (url == null) {
            callback();
        }
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.media = 'all';
        link.onload = () => callback();
        link.onerror = e => console.error("Fail to load fragment css resource", e);
        link.href = url;
        document.head.appendChild(link);
    }
}());
