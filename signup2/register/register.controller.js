﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['loginService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(loginService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;
        alert();
        function register() {
            vm.dataLoading = true;
            loginService.registerUser(vm.user)
                .then(function (response) {
                    if (response.status==200) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
