PluginRegistry.add('route', {
    'url': '/sparql',
    'module': 'graphdb.framework.sparql',
    'path': 'sparql/app',
    'chunk': 'sparql',
    'controller': 'QueryEditorCtrl',
    'templateUrl': 'pages/sparql.html',
    'title': 'view.sparql.title',
    'helpInfo': 'view.sparql.helpInfo'
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'SPARQL',
            labelKey: 'menu.sparql.label',
            href: 'sparql',
            order: 2,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: "icon-sparql"
        }
    ]
});
