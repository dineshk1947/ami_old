(function ()
{
    'use strict';

    angular
        .module('app.misc', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.misc', {
                url    : '/misc',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/pages/MDM/misc/misc.html',
                        controller : 'MiscController as vm'
                    }
                },
                resolve: {
                    SampleData: function (msApi)
                    {
                        return msApi.resolve('sample@get');
                    }
                }
            });

            // Translation
            $translatePartialLoaderProvider.addPart('app/main/pages/MDM/sample');

            // Api
            msApiProvider.register('sample', ['app/data/sample/sample.json']);



    }
})();
