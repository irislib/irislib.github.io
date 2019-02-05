(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule', 'angular-clipboard', 'monospaced.qrcode', 'ngFileUpload', 'qrScanner']);

  angular.module('identifiAngular').filter('escape', [
    function() {
      return function(input) {
        return encodeURIComponent(encodeURIComponent(input));
      };
    }
  ]);

  angular.module('identifiAngular').filter('encodeURIComponent', [
    function() {
      return function(input) {
        return encodeURIComponent(input);
      };
    }
  ]);

  angular.module('identifiAngular').filter('highlight', function($sce) {
    return function(text, phrase) {
      if (typeof text === 'string' && phrase) {
        text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<b>$1</b>');
        return $sce.trustAsHtml(text.toString());
      }
      return text;
    };
  });

  angular.module('identifiAngular').filter('ordinal', function() {
    return function(input) {
      var s, v;
      s = ['th', 'st', 'nd', 'rd'];
      v = input % 100;
      return input + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsRUFFcUQsbUJBRnJELEVBR0EsbUJBSEEsRUFHcUIsY0FIckIsRUFHcUMsV0FIckMsQ0FERjs7RUFNQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUNuRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsa0JBQUEsQ0FBbUIsS0FBbkIsQ0FBbkI7TUFERjtJQURtRCxDQUFGO0dBQW5EOztFQUlBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxvQkFBekMsRUFBK0Q7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUMvRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsS0FBbkI7TUFERjtJQUQrRCxDQUFGO0dBQS9EOztFQUtBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxXQUF6QyxFQUFzRCxRQUFBLENBQUMsSUFBRCxDQUFBO1dBQ3BELFFBQUEsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFBO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxRQUFBLENBQUEsQ0FBQTtXQUNsRCxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ0UsVUFBQSxDQUFBLEVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXRCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJywgJ3FyU2Nhbm5lciddXG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2VzY2FwZScsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpXG4gXVxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnZW5jb2RlVVJJQ29tcG9uZW50JywgWyAtPlxuICAoaW5wdXQpIC0+XG4gICAgZW5jb2RlVVJJQ29tcG9uZW50IGlucHV0XG4gXVxuXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdoaWdobGlnaHQnLCAoJHNjZSkgLT5cbiAgKHRleHQsIHBocmFzZSkgLT5cbiAgICBpZiB0eXBlb2YgdGV4dCA9PSAnc3RyaW5nJyBhbmQgcGhyYXNlXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgcGhyYXNlICsgJyknLCAnZ2knKSwgJzxiPiQxPC9iPicpXG4gICAgICByZXR1cm4gJHNjZS50cnVzdEFzSHRtbCB0ZXh0LnRvU3RyaW5nKClcbiAgICByZXR1cm4gdGV4dFxuXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdvcmRpbmFsJywgLT5cbiAgKGlucHV0KSAtPlxuICAgIHMgPSBbXG4gICAgICAndGgnXG4gICAgICAnc3QnXG4gICAgICAnbmQnXG4gICAgICAncmQnXG4gICAgXVxuICAgIHYgPSBpbnB1dCAlIDEwMFxuICAgIGlucHV0ICsgKHNbKHYgLSAyMCkgJSAxMF0gb3Igc1t2XSBvciBzWzBdKVxuIl19

(function() {
  angular.module('identifiAngular').component('message', {
    bindings: {
      ipfs: '=?',
      msgData: '=',
      pageInfo: '=?',
      showRecipient: '=?'
    },
    templateUrl: 'app/components/message/message.template.html'
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsU0FESCxDQUNhLFNBRGIsRUFFSTtJQUFBLFFBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsT0FBQSxFQUFTLEdBRFQ7TUFFQSxRQUFBLEVBQVUsSUFGVjtNQUdBLGFBQUEsRUFBZTtJQUhmLENBREY7SUFLQSxXQUFBLEVBQWE7RUFMYixDQUZKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29tcG9uZW50ICdtZXNzYWdlJyxcbiAgICBiaW5kaW5nczpcbiAgICAgIGlwZnM6ICc9PydcbiAgICAgIG1zZ0RhdGE6ICc9J1xuICAgICAgcGFnZUluZm86ICc9PydcbiAgICAgIHNob3dSZWNpcGllbnQ6ICc9PydcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuIl19

(function() {
  angular.module('identifiAngular').directive('acmeMalarkey', function() {
    var MalarkeyController, directive, linkFunc;
    MalarkeyController = function($log, githubContributor) {
      'ngInject';
      var activate, getContributors, vm;
      vm = this;
      activate = function() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      };
      getContributors = function() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;
          return vm.contributors;
        });
      };
      vm.contributors = [];
      activate();
    };
    linkFunc = function(scope, el, attr, vm) {
      var typist, watcher;
      watcher = void 0;
      typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });
      el.addClass('acme-malarkey');
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause()["delete"]();
      });
      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause()["delete"]();
        });
      });
      scope.$on('$destroy', function() {
        watcher();
      });
    };
    return directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxjQURiLEVBQzZCLFNBQUE7QUFFekIsUUFBQTtJQUFBLGtCQUFBLEdBQXFCLFNBQUMsSUFBRCxFQUFPLGlCQUFQO01BQ25CO0FBQUEsVUFBQTtNQUNBLEVBQUEsR0FBSztNQUVMLFFBQUEsR0FBVyxTQUFBO2VBQ1QsZUFBQSxDQUFBLENBQWlCLENBQUMsSUFBbEIsQ0FBdUIsU0FBQTtVQUNyQixJQUFJLENBQUMsSUFBTCxDQUFVLDZCQUFWO1FBRHFCLENBQXZCO01BRFM7TUFLWCxlQUFBLEdBQWtCLFNBQUE7ZUFDaEIsaUJBQWlCLENBQUMsZUFBbEIsQ0FBa0MsRUFBbEMsQ0FBcUMsQ0FBQyxJQUF0QyxDQUEyQyxTQUFDLElBQUQ7VUFDekMsRUFBRSxDQUFDLFlBQUgsR0FBa0I7aUJBQ2xCLEVBQUUsQ0FBQztRQUZzQyxDQUEzQztNQURnQjtNQUtsQixFQUFFLENBQUMsWUFBSCxHQUFrQjtNQUNsQixRQUFBLENBQUE7SUFmbUI7SUFrQnJCLFFBQUEsR0FBVyxTQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksSUFBWixFQUFrQixFQUFsQjtBQUNULFVBQUE7TUFBQSxPQUFBLEdBQVU7TUFDVixNQUFBLEdBQVMsUUFBQSxDQUFTLEVBQUcsQ0FBQSxDQUFBLENBQVosRUFDUDtRQUFBLFNBQUEsRUFBVyxFQUFYO1FBQ0EsV0FBQSxFQUFhLEVBRGI7UUFFQSxVQUFBLEVBQVksR0FGWjtRQUdBLElBQUEsRUFBTSxJQUhOO1FBSUEsT0FBQSxFQUFTLEdBSlQ7T0FETztNQU1ULEVBQUUsQ0FBQyxRQUFILENBQVksZUFBWjtNQUNBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEtBQUssQ0FBQyxXQUF0QixFQUFtQyxTQUFDLEtBQUQ7UUFDakMsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLENBQWtCLENBQUMsS0FBbkIsQ0FBQSxDQUEwQixFQUFDLE1BQUQsRUFBMUIsQ0FBQTtNQURpQyxDQUFuQztNQUdBLE9BQUEsR0FBVSxLQUFLLENBQUMsTUFBTixDQUFhLGlCQUFiLEVBQWdDLFNBQUE7UUFDeEMsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsRUFBRSxDQUFDLFlBQW5CLEVBQWlDLFNBQUMsV0FBRDtVQUMvQixNQUFNLENBQUMsSUFBUCxDQUFZLFdBQVcsQ0FBQyxLQUF4QixDQUE4QixDQUFDLEtBQS9CLENBQUEsQ0FBc0MsRUFBQyxNQUFELEVBQXRDLENBQUE7UUFEK0IsQ0FBakM7TUFEd0MsQ0FBaEM7TUFNVixLQUFLLENBQUMsR0FBTixDQUFVLFVBQVYsRUFBc0IsU0FBQTtRQUNwQixPQUFBLENBQUE7TUFEb0IsQ0FBdEI7SUFsQlM7V0F1QlgsU0FBQSxHQUNFO01BQUEsUUFBQSxFQUFVLEdBQVY7TUFDQSxLQUFBLEVBQU87UUFBQSxXQUFBLEVBQWEsR0FBYjtPQURQO01BRUEsUUFBQSxFQUFVLFFBRlY7TUFHQSxJQUFBLEVBQU0sUUFITjtNQUlBLFVBQUEsRUFBWSxrQkFKWjtNQUtBLFlBQUEsRUFBYyxJQUxkOztFQTVDdUIsQ0FEN0I7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2FjbWVNYWxhcmtleScsIC0+XG5cbiAgICBNYWxhcmtleUNvbnRyb2xsZXIgPSAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgYWN0aXZhdGUgPSAtPlxuICAgICAgICBnZXRDb250cmlidXRvcnMoKS50aGVuIC0+XG4gICAgICAgICAgJGxvZy5pbmZvICdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgIGdldENvbnRyaWJ1dG9ycyA9IC0+XG4gICAgICAgIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbiAoZGF0YSkgLT5cbiAgICAgICAgICB2bS5jb250cmlidXRvcnMgPSBkYXRhXG4gICAgICAgICAgdm0uY29udHJpYnV0b3JzXG5cbiAgICAgIHZtLmNvbnRyaWJ1dG9ycyA9IFtdXG4gICAgICBhY3RpdmF0ZSgpXG4gICAgICByZXR1cm5cblxuICAgIGxpbmtGdW5jID0gKHNjb3BlLCBlbCwgYXR0ciwgdm0pIC0+XG4gICAgICB3YXRjaGVyID0gdW5kZWZpbmVkXG4gICAgICB0eXBpc3QgPSBtYWxhcmtleShlbFswXSxcbiAgICAgICAgdHlwZVNwZWVkOiA0MFxuICAgICAgICBkZWxldGVTcGVlZDogNDBcbiAgICAgICAgcGF1c2VEZWxheTogODAwXG4gICAgICAgIGxvb3A6IHRydWVcbiAgICAgICAgcG9zdGZpeDogJyAnKVxuICAgICAgZWwuYWRkQ2xhc3MgJ2FjbWUtbWFsYXJrZXknXG4gICAgICBhbmd1bGFyLmZvckVhY2ggc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgLT5cbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAtPlxuICAgICAgICBhbmd1bGFyLmZvckVhY2ggdm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpIC0+XG4gICAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG4gICAgICApXG4gICAgICBzY29wZS4kb24gJyRkZXN0cm95JywgLT5cbiAgICAgICAgd2F0Y2hlcigpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgc2NvcGU6IGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7J1xuICAgICAgbGluazogbGlua0Z1bmNcbiAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlclxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4iXX0=

(function() {
  // coffeelint: disable=max_line_length
  angular.module('identifiAngular').directive('identicon', function() {
    return {
      scope: {
        identity: '=',
        ipfs: '='
      },
      link: function(scope, element, attrs) {
        var update;
        attrs.showDistance = typeof attrs.showDistance === 'undefined' ? true : !!parseInt(attrs.showDistance);
        attrs.border = isNaN(attrs.border) ? 3 : attrs.border;
        update = function() {
          var identicon;
          if (scope.identity && scope.identity.identicon) {
            identicon = scope.identity.identicon(attrs.width, attrs.border, attrs.showDistance, scope.ipfs);
            element.empty();
            return element.append(identicon);
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxXQURiLEVBQzBCLFFBQUEsQ0FBQSxDQUFBO1dBQ3RCO01BQUEsS0FBQSxFQUNFO1FBQUEsUUFBQSxFQUFVLEdBQVY7UUFDQSxJQUFBLEVBQU07TUFETixDQURGO01BR0EsSUFBQSxFQUFNLFFBQUEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixDQUFBO0FBQ0osWUFBQTtRQUFBLEtBQUssQ0FBQyxZQUFOLEdBQXdCLE9BQU8sS0FBSyxDQUFDLFlBQWIsS0FBNkIsV0FBaEMsR0FBaUQsSUFBakQsR0FBMkQsQ0FBQyxDQUFDLFFBQUEsQ0FBUyxLQUFLLENBQUMsWUFBZjtRQUNsRixLQUFLLENBQUMsTUFBTixHQUFrQixLQUFBLENBQU0sS0FBSyxDQUFDLE1BQVosQ0FBSCxHQUE0QixDQUE1QixHQUFtQyxLQUFLLENBQUM7UUFDeEQsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsY0FBQTtVQUFBLElBQUcsS0FBSyxDQUFDLFFBQU4sSUFBa0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFwQztZQUNFLFNBQUEsR0FBWSxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQWYsQ0FBeUIsS0FBSyxDQUFDLEtBQS9CLEVBQXNDLEtBQUssQ0FBQyxNQUE1QyxFQUFvRCxLQUFLLENBQUMsWUFBMUQsRUFBd0UsS0FBSyxDQUFDLElBQTlFO1lBQ1osT0FBTyxDQUFDLEtBQVIsQ0FBQTttQkFDQSxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsRUFIRjs7UUFETztlQUtULEtBQUssQ0FBQyxXQUFOLENBQWtCLENBQUMsVUFBRCxDQUFsQixFQUFnQyxNQUFoQztNQVJJO0lBSE47RUFEc0IsQ0FEMUI7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgY29mZmVlbGludDogZGlzYWJsZT1tYXhfbGluZV9sZW5ndGhcbmFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2lkZW50aWNvbicsIC0+XG4gICAgc2NvcGU6XG4gICAgICBpZGVudGl0eTogJz0nXG4gICAgICBpcGZzOiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgYXR0cnMuc2hvd0Rpc3RhbmNlID0gaWYgdHlwZW9mIGF0dHJzLnNob3dEaXN0YW5jZSA9PSAndW5kZWZpbmVkJyB0aGVuIHRydWUgZWxzZSAhIXBhcnNlSW50KGF0dHJzLnNob3dEaXN0YW5jZSlcbiAgICAgIGF0dHJzLmJvcmRlciA9IGlmIGlzTmFOKGF0dHJzLmJvcmRlcikgdGhlbiAzIGVsc2UgYXR0cnMuYm9yZGVyXG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBpZiBzY29wZS5pZGVudGl0eSAmJiBzY29wZS5pZGVudGl0eS5pZGVudGljb25cbiAgICAgICAgICBpZGVudGljb24gPSBzY29wZS5pZGVudGl0eS5pZGVudGljb24oYXR0cnMud2lkdGgsIGF0dHJzLmJvcmRlciwgYXR0cnMuc2hvd0Rpc3RhbmNlLCBzY29wZS5pcGZzKVxuICAgICAgICAgIGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGlkZW50aWNvbilcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsnaWRlbnRpdHknXSwgdXBkYXRlXG4iXX0=

(function() {
  angular.module('identifiAngular').directive('focusOn', function() {
    return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if (name === attr.focusOn) {
          elem[0].focus();
        }
      });
    };
  });

  angular.module('identifiAngular').factory('focus', function($rootScope, $timeout) {
    return function(name) {
      $timeout(function() {
        $rootScope.$broadcast('focusOn', name);
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0EsQ0FBQyxTQURELENBQ1csU0FEWCxFQUNzQixRQUFBLENBQUEsQ0FBQTtXQUNwQixRQUFBLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkLENBQUE7TUFDRSxLQUFLLENBQUMsR0FBTixDQUFVLFNBQVYsRUFBcUIsUUFBQSxDQUFDLENBQUQsRUFBSSxJQUFKLENBQUE7UUFDbkIsSUFBRyxJQUFBLEtBQVEsSUFBSSxDQUFDLE9BQWhCO1VBQ0UsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQVIsQ0FBQSxFQURGOztNQURtQixDQUFyQjtJQURGO0VBRG9CLENBRHRCOztFQVNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDQSxDQUFDLE9BREQsQ0FDUyxPQURULEVBQ2tCLFFBQUEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFBO1dBQ2hCLFFBQUEsQ0FBQyxJQUFELENBQUE7TUFDRSxRQUFBLENBQVMsUUFBQSxDQUFBLENBQUE7UUFDUCxVQUFVLENBQUMsVUFBWCxDQUFzQixTQUF0QixFQUFpQyxJQUFqQztNQURPLENBQVQ7SUFERjtFQURnQixDQURsQjtBQVRBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuLmZhY3RvcnkgJ2ZvY3VzJywgKCRyb290U2NvcGUsICR0aW1lb3V0KSAtPlxuICAobmFtZSkgLT5cbiAgICAkdGltZW91dCAtPlxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdmb2N1c09uJywgbmFtZVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG4iXX0=

(function() {
  // Messages service used to communicate with Messages REST endpoints
  angular.module('identifiAngular').factory('Messages', [
    '$resource',
    '$location',
    function($resource,
    $location) {
      var host,
    path;
      path = $location.absUrl();
      host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi/' : '';
      return $resource(host + 'api/messages/:id');
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxPQUFsQyxDQUEwQyxVQUExQyxFQUFzRDtJQUNwRCxXQURvRDtJQUVwRCxXQUZvRDtJQUdwRCxRQUFBLENBQUMsU0FBRDtJQUFZLFNBQVosQ0FBQTtBQUNFLFVBQUEsSUFBQTtJQUFBO01BQUEsSUFBQSxHQUFPLFNBQVMsQ0FBQyxNQUFWLENBQUE7TUFDUCxJQUFBLEdBQVUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxhQUFYLENBQUgsR0FBaUMsb0JBQWpDLEdBQTJEO2FBQ2xFLFNBQUEsQ0FBVSxJQUFBLEdBQU8sa0JBQWpCO0lBSEYsQ0FIb0Q7R0FBdEQ7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgTWVzc2FnZXMgc2VydmljZSB1c2VkIHRvIGNvbW11bmljYXRlIHdpdGggTWVzc2FnZXMgUkVTVCBlbmRwb2ludHNcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5mYWN0b3J5ICdNZXNzYWdlcycsIFtcbiAgJyRyZXNvdXJjZSdcbiAgJyRsb2NhdGlvbidcbiAgKCRyZXNvdXJjZSwgJGxvY2F0aW9uKSAtPlxuICAgIHBhdGggPSAkbG9jYXRpb24uYWJzVXJsKClcbiAgICBob3N0ID0gaWYgcGF0aC5tYXRjaCAvXFwvaXBbbmZdc1xcLy8gdGhlbiAnaHR0cHM6Ly9pZGVudGkuZmkvJyBlbHNlICcnXG4gICAgJHJlc291cmNlIGhvc3QgKyAnYXBpL21lc3NhZ2VzLzppZCdcbl1cbiJdfQ==

(function() {
  'use strict';
  // Messages controller
  angular.module('identifiAngular').controller('MessagesController', [
    '$scope',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    '$state',
    // 'Authentication'
    'config',
    '$timeout',
    'localStorageService',
    function($scope,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    $state,
    Messages,
    config,
    $timeout,
    localStorageService) { //, Authentication
      var load;
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.iconCount = function(rating) {
        return new Array(Math.max(1,
    Math.abs(rating)));
      };
      $scope.iconStyle = function(rating) {
        var iconStyle;
        iconStyle = 'neutral';
        if (rating > 0) {
          iconStyle = 'positive';
        } else if (rating < 0) {
          iconStyle = 'negative';
        }
        return iconStyle;
      };
      $scope.iconClass = function(rating) {
        var iconStyle;
        iconStyle = 'glyphicon-question-sign';
        if (rating > 0) {
          iconStyle = 'glyphicon-thumbs-up';
        } else if (rating < 0) {
          iconStyle = 'glyphicon-thumbs-down';
        }
        return iconStyle;
      };
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.setFilters = function(filters) {
        return angular.extend($scope.filters,
    filters);
      };
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          processResponse = function() {
            $scope.processMessages([$scope.message],
    {});
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyID = $scope.message.getSignerKeyID();
            $scope.message.verifiedBy = $scope.identifiIndex.get($scope.message.signerKeyID,
    'keyID');
            $scope.setIdentityNames($scope.message.verifiedBy,
    true);
            return $scope.message.verifiedByAttr = new $window.identifiLib.Attribute(['keyID',
    $scope.message.signerKeyID]);
          };
          if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) { // looks like an ipfs address
            return $scope.ipfsGet(hash).then(function(res) {
              var s;
              s = JSON.parse(res.toString());
              console.log('msg from ipfs',
    res,
    s);
              return $window.identifiLib.Message.fromSig(s).then(function(r) {
                $scope.message = r;
                $scope.message.ipfsUri = hash;
                return processResponse();
              });
            }).catch(function(e) {
              return console.log(e);
            });
          }
        }
      };
      load = function() {
        if (!$scope.identifiIndex) {
          return;
        }
        if ($state.is('messages.show')) {
          return $scope.findOne();
        }
      };
      return $scope.$watch('identifiIndex',
    load);
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxhQUFBOztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUU7SUFFakUsWUFGaUU7SUFHakUsU0FIaUU7SUFJakUsY0FKaUU7SUFLakUsV0FMaUU7SUFNakUsT0FOaUU7SUFPakUsUUFQaUU7O0lBU2pFLFFBVGlFO0lBVWpFLFVBVmlFO0lBV2pFLHFCQVhpRTtJQVlqRSxRQUFBLENBQUMsTUFBRDtJQUFTLFVBQVQ7SUFBcUIsT0FBckI7SUFBOEIsWUFBOUI7SUFBNEMsU0FBNUM7SUFBdUQsS0FBdkQ7SUFBOEQsTUFBOUQ7SUFBc0UsUUFBdEU7SUFBZ0YsTUFBaEY7SUFBd0YsUUFBeEY7SUFBa0csbUJBQWxHLENBQUEsRUFBQTtBQUNFLFVBQUE7TUFBQSxNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7TUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO01BRTlCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7ZUFDakIsSUFBSSxLQUFKLENBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFUO0lBQVksSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFULENBQVosQ0FBVjtNQURpQjtNQUduQixNQUFNLENBQUMsU0FBUCxHQUFtQixRQUFBLENBQUMsTUFBRCxDQUFBO0FBQ2pCLFlBQUE7UUFBQSxTQUFBLEdBQVk7UUFDWixJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0UsU0FBQSxHQUFZLFdBRGQ7U0FBQSxNQUVLLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDSCxTQUFBLEdBQVksV0FEVDs7ZUFFTDtNQU5pQjtNQVFuQixNQUFNLENBQUMs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b250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWVzc2FnZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICckdGltZW91dCdcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBNZXNzYWdlcywgY29uZmlnLCAkdGltZW91dCwgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHByb2Nlc3NSZXNwb25zZSA9IC0+XG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbJHNjb3BlLm1lc3NhZ2VdLCB7fSlcbiAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICdNZXNzYWdlICcgKyBoYXNoXG4gICAgICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEoJHNjb3BlLm1lc3NhZ2UpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRCwgJ2tleUlEJylcbiAgICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcygkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5LCB0cnVlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnlBdHRyID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlKFsna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRF0pXG4gICAgICAgIGlmIGhhc2gubWF0Y2ggL15RbVsxLTlBLVphLXpdezQwLDUwfSQvICMgbG9va3MgbGlrZSBhbiBpcGZzIGFkZHJlc3NcbiAgICAgICAgICAkc2NvcGUuaXBmc0dldChoYXNoKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICBzID0gSlNPTi5wYXJzZShyZXMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdtc2cgZnJvbSBpcGZzJywgcmVzLCBzXG4gICAgICAgICAgICAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuZnJvbVNpZyhzKS50aGVuIChyKSAtPlxuICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IHJcbiAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UuaXBmc1VyaSA9IGhhc2hcbiAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlKClcbiAgICAgICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZyBlXG5cbiAgICBsb2FkID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgIGlmICRzdGF0ZS5pcygnbWVzc2FnZXMuc2hvdycpXG4gICAgICAgICRzY29wZS5maW5kT25lKClcbiAgICAkc2NvcGUuJHdhdGNoICdpZGVudGlmaUluZGV4JywgbG9hZFxuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope',
    '$rootScope',
    '$location',
    '$http',
    '$state',
    'config',
    'localStorageService',
    'clipboard',
    '$uibModal',
    '$window',
    '$stateParams',
    '$q',
    'focus',
    //'Authentication'
    //'Menus'
    //'Persona'
    function($scope,
    $rootScope,
    $location,
    $http,
    $state,
    config,
    localStorageService,
    clipboard,
    $uibModal,
    $window,
    $stateParams,
    $q,
    focus) { // Authentication, Menus, Persona
      var hosts,
    loadMsgs,
    privateKey,
    scrollTo,
    setIndex;
      hosts = ['https://identifi.herokuapp.com/gun',
    'https://identifi2.herokuapp.com/gun'];
      if ($window.location.protocol === "https:") {
        $scope.gun = new Gun(hosts);
      } else {
        hosts.push('http://localhost:8765/gun');
        $scope.gun = new Gun(hosts);
      }
      // TODO: move everything to main controller?
      // set authentication
      $scope.authentication = {}; // Authentication
      $scope.getIdUrl = function(type,
    value) {
        if ($window.location.hostname.indexOf('.') > -1) { // differentiate between localhost / chrome plugin uri and DNS name
          return $state.href('identities.show',
    {type,
    value},
    {
            absolute: true
          }) + '?share';
        } else {
          return 'https://identi.fi/' + $state.href('identities.show',
    {type,
    value}) + '?share';
        }
      };
      $scope.getIdKey = function(id) {
        if (Array.isArray(id)) {
          return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1]);
        } else {
          return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val);
        }
      };
      $scope.defaultIndexKeyID = '_D8nRhjFgAGo8frfJHMi4H7M7fTMB2LJshgeKyLaL1Y.9uNU0eQO-1ThgA9fJXFFN3yYbk9SNewC2Pz4mvQvGUE';
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
        list: []
      };
      $scope.msgs = {
        list: []
      };
      $scope.phoneRegex = /^\+?\d+$/;
      $scope.ipfs = new Ipfs({
        init: true,
        start: true,
        repo: 'ipfs7-identifi'
      });
      $scope.capitalizeWords = function(s) {
        if (s && s.length) {
          return (s.split(' ').map(function(word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          })).join(' ');
        } else {
          return s;
        }
      };
      $scope.copyToClipboard = function(text) {
        return clipboard.copyText(text);
      };
      $scope.search = function(query,
    limit) {
        var cursor,
    resultFound,
    searchKey;
        if (!$scope.identifiIndex) {
          return;
        }
        $scope.ids.activeKey = -1;
        $scope.ids.list = [];
        console.log('search');
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        $scope.searchKey = searchKey;
        $scope.previousSearchKey = searchKey;
        limit = limit || 10;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        resultFound = function(i) {
          if (searchKey !== $scope.searchKey) {
            return;
          }
          console.log('i',
    i);
          i.gun.on(function(data) {
            i.data = data;
            return i.gun.get('linkTo').on(function(linkTo) {
              if (i.linkTo || !linkTo) {
                return;
              }
              return $scope.$apply(function() {
                return i.linkTo = linkTo;
              });
            });
          });
          $scope.setIdentityNames(i,
    true);
          return $scope.ids.list.push(i);
        };
        $scope.identifiIndex.search(searchKey,
    void 0,
    resultFound,
    limit,
    cursor);
        return new Promise(function(resolve) { // TODO: uib-typeahead is limited, but something better pls
          return setTimeout(function() {
            return resolve($scope.ids.list);
          },
    1000);
        });
      };
      setIndex = function(results) {
        if ($scope.query.term !== '') {
          $scope.query.term = '';
        }
        $scope.ids.list = [];
        $scope.msgs.list = [];
        $scope.identifiIndex = results;
        console.log('Got index',
    $scope.identifiIndex);
        $scope.viewpoint.identity = $scope.identifiIndex.get($scope.viewpoint.val,
    $scope.viewpoint.name);
        return $scope.viewpoint.identity.gun.get('attrs').open(function(attrs) {
          $scope.viewpoint.attrs = attrs;
          return $scope.viewpoint.mostVerifiedAttributes = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
        });
      };
      $scope.loadDefaultIndex = function() {
        $scope.viewpoint = {
          name: 'keyID',
          val: $scope.defaultIndexKeyID
        };
        return setIndex(new $window.identifiLib.Index($scope.gun.user($scope.defaultIndexKeyID).get('identifi')));
      };
      $scope.loginWithKey = function(privateKeySerialized) {
        var keyID;
        $scope.privateKey = $window.identifiLib.Key.fromJwk(privateKeySerialized);
        localStorageService.set('identifiKey',
    privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $window.identifiLib.Key.getId($scope.privateKey)
        };
        $scope.authentication.user.url = $scope.getIdUrl('keyID',
    $scope.authentication.user.idValue);
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        keyID = $window.identifiLib.Key.getId($scope.privateKey);
        $scope.viewpoint = {
          name: 'keyID',
          val: keyID
        };
        $scope.ids.list = [];
        $scope.msgs.list = [];
        return $window.identifiLib.Index.create($scope.gun,
    $scope.privateKey).then(function(i) {
          setIndex(i);
          $scope.authentication.identity = $scope.identifiIndex.get(keyID,
    'keyID');
          $scope.authentication.identity.gun.get('attrs').open(function(val,
    key,
    msg,
    eve) {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(val);
            $scope.authentication.identity.mva = mva;
            if (mva.profilePhoto) {
              return eve.off();
            }
          });
          return $scope.authentication.identity.gun.on(function(data) {
            if (data.receivedPositive && $scope.authentication.identity.data && !$scope.authentication.identity.data.receivedPositive) {
              console.log('great, you got your first upvote!');
            }
            // TODO: notification
            return $scope.authentication.identity.data = data;
          });
        });
      };
      privateKey = localStorageService.get('identifiKey');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      } else {
        $scope.loadDefaultIndex();
      }
      $scope.updateIpfsPeers = function() {
        return $scope.ipfs.swarm.peers(function(err,
    peerInfos) {
          if (err) {
            return console.error('failed to fetch ipfs peers',
    err);
          } else {
            return $scope.$apply(function() {
              return $scope.ipfsPeers = peerInfos;
            });
          }
        });
      };
      $scope.ipfs.on('ready',
    function() {
        $scope.ipfsReady = true;
        $window.ipfs = $scope.ipfs;
        $scope.updateIpfsPeers();
        return setInterval($scope.updateIpfsPeers,
    5000);
      });
      $scope.localSettings = localStorageService.get('localSettings') || {};
      $scope.closeProfileUploadNotification = function() {
        $scope.localSettings.profileUploadNotificationClosed = true;
        return localStorageService.set('localSettings',
    $scope.localSettings);
      };
      $scope.openProfilePhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadProfilePhoto,
    'Upload profile photo',
    true);
      };
      $scope.uploadProfilePhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var attr,
    id,
    recipient;
          console.log(files,
    $scope.identity);
          if ($state.is('identities.show')) {
            attr = [$stateParams.type,
    $stateParams.value];
          } else {
            id = $scope.authentication.user;
            attr = [id.idType,
    id.idValue];
            $scope.closeProfileUploadNotification();
          }
          recipient = [attr,
    ['profilePhoto',
    '/ipfs/' + files[0].path]];
          return $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.hideProfilePhoto = true; // There's a weird bug where the profile identicon doesn't update
            $scope.identifiIndex.addMessage(m,
    $scope.ipfs).then(function() {
              $scope.hideProfilePhoto = false;
              if (!$state.is('identities.show')) {
                return $state.go('identities.show',
    {
                  type: id.idType,
                  value: id.idValue
                });
              }
            });
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri,
    getJson) {
        return new Promise(function(resolve) {
          var go;
          go = function() {
            return $scope.ipfs.files.cat(uri).then(function(file) {
              file = $scope.ipfs.types.Buffer(file);
              if (getJson) {
                file = JSON.parse(file.toString());
              }
              return resolve(file);
            });
          };
          if ($scope.ipfsReady) {
            return go();
          } else {
            return $scope.ipfs.on('ready',
    function() {
              return go();
            });
          }
        });
      };
      $scope.resetMsg = function() {
        $scope.newMessage = {
          rating: 1,
          comment: ''
        };
        return $scope.newVerification = {
          type: '',
          value: ''
        };
      };
      $scope.resetMsg();
      // Create new Message
      $scope.createMessage = function(event,
    params,
    id) {
        var message,
    options;
        if (event) {
          event.stopPropagation();
        }
        // Create new Message object
        message = null;
        if (params.type === 'rating') {
          params.maxRating |= 3;
          params.minRating |= -3;
          message = $window.identifiLib.Message.createRating(params,
    $scope.privateKey);
        } else if (params.type === 'verification') {
          message = $window.identifiLib.Message.createVerification(params,
    $scope.privateKey);
        } else {
          message = $window.identifiLib.Message.create(params,
    $scope.privateKey);
        }
        options = {};
        return message.then(function(m) {
          var ref;
          console.log(m);
          $scope.identifiIndex.addMessage(m,
    $scope.ipfs);
          if ((ref = $scope.filters.type) !== params.type && ref !== null) {
            $scope.filters.type = params.type;
          }
          return $scope.resetMsg();
        }).catch(function(e) {
          console.error(e);
          return $scope.error = e;
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.max_distance = -1; // because the user doesn't have a trust index yet
      };
      $scope.openLoginModal = function() {
        $scope.loginModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/main/login.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.loginModal.rendered.then(function() {
          document.activeElement.blur();
          return focus('newUser');
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.loginModal.close();
        });
      };
      $scope.openUploadModal = function(callback,
    modalButtonText,
    squarify) {
        $scope.uploadModalCallback = callback;
        $scope.modalButtonText = modalButtonText || 'Upload';
        $scope.squarify = squarify;
        $scope.uploadModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/identities/upload.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.uploadModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.uploadModal.close();
        });
      };
      $scope.$on('$stateChangeStart',
    function() {
        return $scope.filters.type = null;
      });
      loadMsgs = function() {
        var cursor,
    limit,
    resultFound;
        limit = 40;
        cursor = null;
        $scope.msgs.list = [];
        resultFound = function(msg) {
          console.log('got msg',
    msg);
          $scope.processMessages([msg]);
          return $scope.$apply(function() {
            return $scope.msgs.list.push(msg);
          });
        };
        return $scope.identifiIndex.getMessagesByTimestamp(resultFound,
    limit,
    cursor);
      };
      $scope.$watch('identifiIndex',
    function() {
        if (!$scope.identifiIndex) {
          return;
        }
        loadMsgs();
        return $scope.search();
      });
      $scope.uploadFile = function(blob) {
        return new Promise(function(resolve,
    reject) {
          var fileReader;
          console.log('uploading',
    blob);
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            var buffer;
            buffer = $scope.ipfs.types.Buffer.from(event.target.result);
            console.log('buffer',
    buffer);
            return $scope.ipfs.files.add(buffer,
    function(err,
    files) {
              if (err) {
                return reject('adding to ipfs failed',
    err);
              } else {
                resolve(files);
                return console.log('done:',
    err,
    files);
              }
            });
          };
          return fileReader.readAsArrayBuffer(blob);
        });
      };
      $scope.createUser = function(name) {
        return $window.identifiLib.Key.generate().then(function(key) {
          $scope.privateKey = key;
          $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey);
          return $scope.loginWithKey($scope.privateKeySerialized);
        }).then(function() {
          var recipient;
          recipient = [['keyID',
    $window.identifiLib.Key.getId($scope.privateKey)],
    ['name',
    name]];
          return $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey);
        }).then(function(msg) {
          var added;
          added = false;
          return $scope.$watch('identifiIndex',
    function() {
            if (added) {
              return;
            }
            added = true;
            console.log('msg',
    msg);
            return $scope.identifiIndex.addMessage(msg,
    $scope.ipfs);
          });
        });
      };
      $scope.generateKey = function() {
        return $window.identifiLib.Key.generate().then(function(key) {
          return $scope.$apply(function() {
            $scope.privateKey = key;
            console.log($scope.privateKey);
            return $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey);
          });
        });
      };
      $scope.downloadText = function(text) {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(text);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'identifi_private_key.txt';
        return hiddenElement.click();
      };
      $scope.openLogoutModal = function() {
        $scope.logoutModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/main/logout.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.logoutModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.logoutModal.close();
        });
      };
      $scope.closeLogoutModal = function() {
        return $scope.logoutModal.close();
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
        $scope.privateKeySerialized = '';
        $scope.authentication = {};
        localStorageService.clearAll();
        $state.go('identities.list');
        $scope.privateKey = null;
        $scope.publicKey = null;
        $scope.logoutModal.close();
        $scope.loadDefaultIndex();
        return $scope.localSettings = {};
      };
      $scope.msgFilter = function(value,
    index,
    array) {
        var data,
    neutralRating,
    ref;
        data = value.data || value.signedData;
        if ($scope.filters.type) {
          if ($scope.filters.type.match(/^rating/)) {
            if (data.type !== 'rating') {
              return false;
            }
            neutralRating = (data.maxRating + data.minRating) / 2;
            if ($scope.filters.type === 'rating:positive' && data.rating <= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:negative' && data.rating >= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:neutral' && data.rating !== neutralRating) {
              return false;
            }
          } else if (data.type !== $scope.filters.type) {
            return false;
          }
        } else {
          if ((ref = data.type) === 'verification' || ref === 'unverification') {
            return false;
          }
        }
        if ($scope.filters.max_distance) {
          if ($scope.filters.max_distance === 0 && typeof value.authorTrustDistance !== 'number') {
            return false;
          } else if ($scope.filters.max_distance > 0 && value.authorTrustDistance > $scope.filters.max_distance) {
            return false;
          }
        }
        return true;
      };
      $scope.removeFocus = function(event) {
        return event.currentTarget.blur();
      };
      $scope.setMsgRawData = function(msg) {
        var showRawData;
        showRawData = {
          hash: msg.hash,
          data: msg.data,
          priority: msg.priority,
          jws: msg.jws
        };
        return msg.strData = JSON.stringify(showRawData,
    void 0,
    2);
      };
      $scope.openMessage = function(event,
    message,
    size) {
        var t;
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        // TODO: check sig
        $scope.message.recipient = $scope.message.getRecipient($scope.identifiIndex);
        $scope.message.recipient.gun.get('attrs').open(function(d) {
          var mva;
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return $scope.$apply(function() {
              return $scope.message.recipient_name = mva.name.attribute.val;
            });
          } else if (mva.nickname) {
            return $scope.$apply(function() {
              return $scope.message.recipient_name = mva.nickname.attribute.val;
            });
          }
        });
        $scope.message.signerKeyID = $scope.message.getSignerKeyID();
        $scope.message.verifiedBy = $scope.identifiIndex.get($scope.message.signerKeyID,
    'keyID');
        $scope.message.verifiedByAttr = new $window.identifiLib.Attribute(['keyID',
    $scope.message.signerKeyID]);
        $scope.messageModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/messages/show.modal.html',
          size: size,
          scope: $scope
        });
        $scope.messageModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.messageModal.close();
        });
      };
      $scope.filters = $scope.filters || config.defaultFilters;
      $scope.isCollapsed = false;
      // $scope.menu = Menus.getMenu('topbar')
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages,
    msgOptions) {
        var processMessage;
        processMessage = function(msg) {
          msg.data = msg.signedData;
          msg.author = msg.getAuthor($scope.identifiIndex);
          msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
          msg.author.gun.get('attrs').open(function(d) {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
            if (mva.name) {
              return $scope.$apply(function() {
                return msg.author_name = mva.name.attribute.val;
              });
            } else if (mva.nickname) {
              return $scope.$apply(function() {
                return msg.author_name = mva.nickname.attribute.val;
              });
            }
          });
          msg.recipient = msg.getRecipient($scope.identifiIndex);
          msg.recipient.gun.get('attrs').open(function(d) {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
            if (mva.name) {
              return $scope.$apply(function() {
                return msg.recipient_name = mva.name.attribute.val;
              });
            } else if (mva.nickname) {
              return $scope.$apply(function() {
                return msg.recipient_name = mva.nickname.attribute.val;
              });
            }
          });
          return $scope.$apply(function() {
            var alpha,
    i,
    index,
    maxRatingDiff,
    minRatingDiff,
    neutralRating,
    rating,
    ref,
    ref1,
    signedData,
    smallestIndex;
            // TODO: make sure message signature is checked
            msg.linkToAuthor = msg.data.author[0];
            i = void 0;
            i = 0;
            smallestIndex = 1000;
            while (i < msg.data.author.length) {
              index = Object.keys($window.identifiLib.Attribute.getUniqueIdValidators()).indexOf(msg.data.author[i][0]);
              if (index > -1 && index < smallestIndex) {
                smallestIndex = index;
                msg.linkToAuthor = msg.data.author[i];
              } else if (!msg.author_name && ((ref = msg.data.author[i][0]) === 'name' || ref === 'nickname')) {
                msg.author_name = msg.data.author[i][1];
              }
              i++;
            }
            msg.linkToRecipient = msg.data.recipient[0];
            i = 0;
            smallestIndex = 1000;
            while (i < msg.data.recipient.length) {
              index = Object.keys($window.identifiLib.Attribute.getUniqueIdValidators()).indexOf(msg.data.recipient[i][0]);
              if (index > -1 && index < smallestIndex) {
                smallestIndex = index;
                msg.linkToRecipient = msg.data.recipient[i];
              } else if (!msg.recipient_name && ((ref1 = msg.data.recipient[i][0]) === 'name' || ref1 === 'nickname')) {
                msg.recipient_name = msg.data.recipient[i][1];
              }
              i++;
            }
            if (msg.linkToAuthor[0] === msg.linkToRecipient[0] && msg.linkToAuthor[1] === msg.linkToRecipient[1]) {
              msg.sameAuthorAndRecipient = true;
            }
            signedData = msg.data;
            alpha = void 0;
            msg.iconStyle = '';
            msg.bgColor = '';
            msg.iconCount = new Array(1);
            switch (signedData.type) {
              case 'verify_identity':
              case 'verification':
                msg.iconStyle = 'glyphicon glyphicon-ok-sign';
                return msg.isVerification = true;
              case 'unverify_identity':
              case 'unverification':
                msg.iconStyle = 'glyphicon glyphicon-remove negative';
                msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
                return msg.isUnverification = true;
              case 'post':
                msg.iconStyle = 'fa fa-pencil';
                return msg.isPost = true;
              case 'rating':
                rating = signedData.rating;
                neutralRating = (signedData.minRating + signedData.maxRating) / 2;
                maxRatingDiff = signedData.maxRating - neutralRating;
                minRatingDiff = signedData.minRating - neutralRating;
                if (rating > neutralRating) {
                  if (signedData.context === 'verifier') {
                    msg.iconStyle = 'fa fa-shield positive';
                  } else {
                    msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive';
                    msg.iconCount = maxRatingDiff < 2 ? msg.iconCount : new Array(Math.ceil(3 * rating / maxRatingDiff));
                  }
                  alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2;
                  return msg.bgColor = 'background-color: rgba(223,240,216,' + alpha + ');';
                } else if (rating < neutralRating) {
                  msg.iconStyle = 'glyphicon glyphicon-thumbs-down negative';
                  msg.iconCount = minRatingDiff > -2 ? msg.iconCount : new Array(Math.ceil(3 * rating / minRatingDiff));
                  alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2;
                  return msg.bgColor = 'background-color:rgba(242,222,222,' + alpha + ');';
                } else {
                  msg.bgColor = 'background-color: #fcf8e3;';
                  return msg.iconStyle = 'glyphicon glyphicon-question-sign neutral';
                }
            }
          });
        };
        return angular.forEach(messages,
    function(msg,
    key) {
          var k,
    v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          return processMessage(msg);
        });
      };
      // Collapsing the menu after navigation
      $scope.$on('$stateChangeSuccess',
    function() {
        return $scope.isCollapsed = false;
      });
      scrollTo = function(el) {
        var pos;
        if (!el) {
          return;
        }
        pos = el.getBoundingClientRect();
        if (pos.top) {
          if (pos.top - 60 < $window.pageYOffset) {
            $window.scrollTo(0,
    pos.top - 60);
          } else if (pos.bottom > $window.pageYOffset + ($window.innerHeight || document.documentElement.clientHeight)) {
            $window.scrollTo(0,
    pos.bottom - ($window.innerHeight || document.documentElement.clientHeight) + 15);
          }
        }
      };
      $scope.setIdentityNames = function(i,
    htmlSafe,
    setTitle) {
        i.verified = false;
        return i.gun.get('attrs').open(function(attrs) {
          return $scope.$apply(function() {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
            if (mva.name) {
              i.primaryName = mva.name.attribute.val;
              i.hasProperName = true;
              if (mva.name.verified) {
                i.verified = true;
              }
            } else if (mva.nickname) {
              i.primaryName = mva.nickname.attribute.val;
              i.hasProperName = true;
            } else {
              i.primaryName = Object.values(attrs)[0].val;
            }
            if (i.primaryName) {
              if (mva.nickname && mva.nickname.attribute.val !== i.primaryName) {
                i.nickname = mva.nickname.attribute.val;
                if (htmlSafe) {
                  i.nickname = i.nickname.replace('<',
    '&lt;');
                }
              }
              if (htmlSafe) {
                i.primaryName = i.primaryName.replace('<',
    '&lt;');
              }
            }
            if (setTitle) {
              return $scope.setPageTitle(i.primaryName);
            }
          });
        });
      };
      $scope.searchKeydown = function(event) {
        var el,
    id,
    wait;
        switch ((event ? event.which : -1)) {
          case 38:
            event.preventDefault();
            if ($scope.ids.activeKey > -1) {
              $scope.addEntryActive = false;
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.activeKey--;
              if ($scope.ids.activeKey >= 0) {
                $scope.ids.list[$scope.ids.activeKey].active = true;
              }
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 40:
            event.preventDefault();
            if ($scope.ids.activeKey < ($scope.ids.list.length || 0) - 1) {
              if ($scope.ids.activeKey >= 0) {
                $scope.ids.list[$scope.ids.activeKey].active = false;
              }
              $scope.ids.list[$scope.ids.activeKey + 1].active = true;
              $scope.ids.activeKey++;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 13:
            event.preventDefault();
            if ($scope.ids.activeKey === -1) {
              return $state.go('identities.create');
            } else {
              id = $scope.ids.list[$scope.ids.activeKey];
              return $state.go('identities.show',
    {
                type: id.linkTo.name,
                value: id.linkTo.val
              });
            }
            break;
          case -1:
            clearTimeout($scope.timer);
            $scope.query.term = '';
            return $scope.search();
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 39:
            break;
          default:
            el = angular.element(event.currentTarget);
            clearTimeout($scope.timer);
            wait = setTimeout((function() {
              $scope.query.term = el.val();
              $scope.search();
            }),
    300);
            $scope.timer = wait;
            break;
        }
      };
      $scope.dropdownSearchSelect = function(item) {
        $state.go('identities.show',
    {
          type: item.linkTo.name,
          value: item.linkTo.val
        });
        return $scope.query.term = '';
      };
      $scope.addGunPeer = function(url) {
        return $scope.gun.opt({
          peers: [url]
        });
      };
      $scope.removeGunPeer = function(url) {
        return console.log('removeGunPeer'); // TODO: how to do this?
      };
      $scope.addIpfsPeer = function(url) {
        return $scope.ipfs.swarm.connect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
      return $scope.removeIpfsPeer = function(url) {
        return $scope.ipfs.swarm.disconnect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxXQUg2RDtJQUk3RCxPQUo2RDtJQUs3RCxRQUw2RDtJQU03RCxRQU42RDtJQU83RCxxQkFQNkQ7SUFRN0QsV0FSNkQ7SUFTN0QsV0FUNkQ7SUFVN0QsU0FWNkQ7SUFXN0QsY0FYNkQ7SUFZN0QsSUFaNkQ7SUFhN0QsT0FiNkQ7Ozs7SUFrQjdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBQ2tFLEVBRGxFO0lBQ3NFLEtBRHRFLENBQUEsRUFBQTtBQUVFLFVBQUEsS0FBQTtJQUFBLFFBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsS0FBQSxHQUFRLENBQUMsb0NBQUQ7SUFBdUMscUNBQXZDO01BQ1IsSUFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQWpCLEtBQTZCLFFBQWhDO1FBQ0UsTUFBTSxDQUFDLEdBQVAsR0FBYSxJQUFJLEdBQUosQ0FBUSxLQUFSLEVBRGY7T0FBQSxNQUFBO1FBR0UsS0FBSyxDQUFDLElBQU4sQ0FBVywyQkFBWDtRQUNBLE1BQU0sQ0FBQyxHQUFQLEdBQWEsSUFBSSxHQUFKLENBQVEsS0FBUixFQUpmO09BREE7OztNQVNBLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLENBQUEsRUFUeEI7TUFXQSxNQUFNLENBQUMsUUFBUCxHQUFrQixRQUFBLENBQUMsSUFBRDtJQUFPLEtBQVAsQ0FBQTtR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QyxDQUE3QjtlQUNBLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQjtNQUZRO01BSTlCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLFFBQUEsQ0FBQyxHQUFELENBQUE7ZUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFYLENBQWU7VUFBQyxLQUFBLEVBQU8sQ0FBQyxHQUFEO1FBQVIsQ0FBZjtNQURrQjtNQUdwQixNQUFNLENBQUMsYUFBUCxHQUF1QixRQUFBLENBQUMsR0FBRCxDQUFBO2VBQ3JCLE9BQU8sQ0FBQyxHQUFSLENBQVksZUFBWixFQURxQjtNQUFBO01BR3ZCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxHQUFELENBQUE7ZUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBbEIsQ0FBMEIsR0FBMUIsQ0FBOEIsQ0FBQyxJQUEvQixDQUFvQyxRQUFBLENBQUEsQ0FBQTtpQkFDbEMsTUFBTSxDQUFDLGVBQVAsQ0FBQTtRQURrQyxDQUFwQztNQURtQjthQUlyQixNQUFNLENBQUMsY0FBUCxHQUF3QixRQUFBLENBQUMsR0FBRCxDQUFBO2VBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQWxCLENBQTZCLEdBQTdCLENBQWlDLENBQUMsSUFBbEMsQ0FBdUMsUUFBQSxDQUFBLENBQUE7aUJBQ3JDLE1BQU0sQ0FBQyxlQUFQLENBQUE7UUFEcUMsQ0FBdkM7TUFEc0I7SUF0bEIxQixDQWxCNkQ7R0FBL0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHN0YXRlJ1xuICAnY29uZmlnJyxcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICdjbGlwYm9hcmQnXG4gICckdWliTW9kYWwnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJHEnXG4gICdmb2N1cydcblxuICAjJ0F1dGhlbnRpY2F0aW9uJ1xuICAjJ01lbnVzJ1xuICAjJ1BlcnNvbmEnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsICRzdGF0ZSwgY29uZmlnLFxuICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLCBjbGlwYm9hcmQsICR1aWJNb2RhbCwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkcSwgZm9jdXMpIC0+ICMgQXV0aGVudGljYXRpb24sIE1lbnVzLCBQZXJzb25hXG4gICAgaG9zdHMgPSBbJ2h0dHBzOi8vaWRlbnRpZmkuaGVyb2t1YXBwLmNvbS9ndW4nLCAnaHR0cHM6Ly9pZGVudGlmaTIuaGVyb2t1YXBwLmNvbS9ndW4nXVxuICAgIGlmICR3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT0gXCJodHRwczpcIlxuICAgICAgJHNjb3BlLmd1biA9IG5ldyBHdW4oaG9zdHMpXG4gICAgZWxzZVxuICAgICAgaG9zdHMucHVzaCgnaHR0cDovL2xvY2FsaG9zdDo4NzY1L2d1bicpXG4gICAgICAkc2NvcGUuZ3VuID0gbmV3IEd1bihob3N0cylcblxuICAgICMgVE9ETzogbW92ZSBldmVyeXRoaW5nIHRvIG1haW4gY29udHJvbGxlcj9cbiAgICAjIHNldCBhdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9ICMgQXV0aGVudGljYXRpb25cblxuICAgICRzY29wZS5nZXRJZFVybCA9ICh0eXBlLCB2YWx1ZSkgLT5cbiAgICAgIGlmICR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignLicpID4gLTEgIyBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbG9jYWxob3N0IC8gY2hyb21lIHBsdWdpbiB1cmkgYW5kIEROUyBuYW1lXG4gICAgICAgIHJldHVybiAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfSwge2Fic29sdXRlOiB0cnVlfSkgKyAnP3NoYXJlJ1xuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vaWRlbnRpLmZpLycgKyAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfSkgKyAnP3NoYXJlJ1xuXG4gICAgJHNjb3BlLmdldElkS2V5ID0gKGlkKSAtPlxuICAgICAgaWYgQXJyYXkuaXNBcnJheShpZClcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZFswXSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWRbMV0pXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWQubmFtZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudmFsKVxuXG4gICAgJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEID0gJ19EOG5SaGpGZ0FHbzhmcmZKSE1pNEg3TTdmVE1CMkxKc2hnZUt5TGFMMVkuOXVOVTBlUU8tMVRoZ0E5ZkpYRkZOM3lZYms5U05ld0MyUHo0bXZRdkdVRSdcbiAgICAkc2NvcGUucXVlcnkgPSB7fVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSAnJ1xuICAgICRzY29wZS5pZHMgPVxuICAgICAgbGlzdDogW11cbiAgICAkc2NvcGUubXNncyA9XG4gICAgICBsaXN0OiBbXVxuICAgICRzY29wZS5waG9uZVJlZ2V4ID0gL15cXCs/XFxkKyQvXG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgc3RhcnQ6IHRydWVcbiAgICAgIHJlcG86ICdpcGZzNy1pZGVudGlmaSdcbiAgICApXG5cbiAgICAkc2NvcGUuY2FwaXRhbGl6ZVdvcmRzID0gKHMpIC0+XG4gICAgICBpZiBzIGFuZCBzLmxlbmd0aFxuICAgICAgICByZXR1cm4gKHMuc3BsaXQoJyAnKS5tYXAgKHdvcmQpIC0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmRbMS4uLTFdLnRvTG93ZXJDYXNlKCkpLmpvaW4gJyAnXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBzXG5cbiAgICAkc2NvcGUuY29weVRvQ2xpcGJvYXJkID0gKHRleHQpIC0+XG4gICAgICBjbGlwYm9hcmQuY29weVRleHQgdGV4dFxuXG4gICAgJHNjb3BlLnNlYXJjaCA9IChxdWVyeSwgbGltaXQpIC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IC0xXG4gICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgY29uc29sZS5sb2cgJ3NlYXJjaCdcbiAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAkc2NvcGUuc2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgMTBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG5cbiAgICAgIHJlc3VsdEZvdW5kID0gKGkpIC0+XG4gICAgICAgIHJldHVybiBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnNlYXJjaEtleVxuICAgICAgICBjb25zb2xlLmxvZyAnaScsIGlcbiAgICAgICAgaS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICAgaS5kYXRhID0gZGF0YVxuICAgICAgICAgIGkuZ3VuLmdldCgnbGlua1RvJykub24gKGxpbmtUbykgLT5cbiAgICAgICAgICAgIHJldHVybiBpZiBpLmxpbmtUbyBvciAhbGlua1RvXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgIGkubGlua1RvID0gbGlua1RvXG4gICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGksIHRydWUpXG4gICAgICAgICRzY29wZS5pZHMubGlzdC5wdXNoIGlcblxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCByZXN1bHRGb3VuZCwgbGltaXQsIGN1cnNvcilcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT4gIyBUT0RPOiB1aWItdHlwZWFoZWFkIGlzIGxpbWl0ZWQsIGJ1dCBzb21ldGhpbmcgYmV0dGVyIHBsc1xuICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgcmVzb2x2ZSgkc2NvcGUuaWRzLmxpc3QpXG4gICAgICAgICwgMTAwMFxuXG4gICAgc2V0SW5kZXggPSAocmVzdWx0cykgLT5cbiAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJycgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0gIT0gJydcbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4ID0gcmVzdWx0c1xuICAgICAgY29uc29sZS5sb2cgJ0dvdCBpbmRleCcsICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICAkc2NvcGUudmlld3BvaW50LmlkZW50aXR5ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS52aWV3cG9pbnQudmFsLCAkc2NvcGUudmlld3BvaW50Lm5hbWUpXG4gICAgICAkc2NvcGUudmlld3BvaW50LmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICRzY29wZS52aWV3cG9pbnQuYXR0cnMgPSBhdHRyc1xuICAgICAgICAkc2NvcGUudmlld3BvaW50Lm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoYXR0cnMpXG5cbiAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCA9IC0+XG4gICAgICAkc2NvcGUudmlld3BvaW50ID0ge25hbWU6ICdrZXlJRCcsIHZhbDogJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEfVxuICAgICAgc2V0SW5kZXggbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSW5kZXgoJHNjb3BlLmd1bi51c2VyKCRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRCkuZ2V0KCdpZGVudGlmaScpKVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5U2VyaWFsaXplZCkgLT5cbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZnJvbUp3ayhwcml2YXRlS2V5U2VyaWFsaXplZClcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdpZGVudGlmaUtleScsIHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPVxuICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgaWRWYWx1ZTogJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci51cmwgPSAkc2NvcGUuZ2V0SWRVcmwgJ2tleUlEJywgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKSBpZiAkc2NvcGUubG9naW5Nb2RhbFxuICAgICAga2V5SUQgPSAkd2luZG93LmlkZW50aWZpTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICRzY29wZS52aWV3cG9pbnQgPSB7bmFtZTogJ2tleUlEJywgdmFsOiBrZXlJRH1cbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuSW5kZXguY3JlYXRlKCRzY29wZS5ndW4sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChpKSAtPlxuICAgICAgICBzZXRJbmRleChpKVxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoa2V5SUQsICdrZXlJRCcpXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKHZhbCwga2V5LCBtc2csIGV2ZSkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXModmFsKVxuICAgICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5tdmEgPSBtdmFcbiAgICAgICAgICBldmUub2ZmKCkgaWYgbXZhLnByb2ZpbGVQaG90b1xuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgIGlmIGRhdGEucmVjZWl2ZWRQb3NpdGl2ZSBhbmQgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5LmRhdGEgYW5kIG5vdCAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZGF0YS5yZWNlaXZlZFBvc2l0aXZlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnZ3JlYXQsIHlvdSBnb3QgeW91ciBmaXJzdCB1cHZvdGUhJ1xuICAgICAgICAgICAgIyBUT0RPOiBub3RpZmljYXRpb25cbiAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZGF0YSA9IGRhdGFcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcbiAgICBlbHNlXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG5cbiAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzID0gKCkgLT5cbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLnBlZXJzIChlcnIsIHBlZXJJbmZvcykgLT5cbiAgICAgICAgaWYgZXJyXG4gICAgICAgICAgY29uc29sZS5lcnJvciAnZmFpbGVkIHRvIGZldGNoIGlwZnMgcGVlcnMnLCBlcnJcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICRzY29wZS5pcGZzUGVlcnMgPSBwZWVySW5mb3NcblxuICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAkc2NvcGUuaXBmc1JlYWR5ID0gdHJ1ZVxuICAgICAgJHdpbmRvdy5pcGZzID0gJHNjb3BlLmlwZnNcbiAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuICAgICAgc2V0SW50ZXJ2YWwgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycywgNTAwMFxuXG4gICAgJHNjb3BlLmxvY2FsU2V0dGluZ3MgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxTZXR0aW5ncycpIHx8IHt9XG4gICAgJHNjb3BlLmNsb3NlUHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbiA9IC0+XG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5ncy5wcm9maWxlVXBsb2FkTm90aWZpY2F0aW9uQ2xvc2VkID0gdHJ1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsU2V0dGluZ3MnLCAkc2NvcGUubG9jYWxTZXR0aW5ncylcblxuICAgICRzY29wZS5vcGVuUHJvZmlsZVBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90bywgJ1VwbG9hZCBwcm9maWxlIHBob3RvJywgdHJ1ZSlcblxuICAgICRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8gPSAoYmxvYiwgaWRlbnRpdHkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgY29uc29sZS5sb2cgZmlsZXMsICRzY29wZS5pZGVudGl0eVxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICBhdHRyID0gWyRzdGF0ZVBhcmFtcy50eXBlLCAkc3RhdGVQYXJhbXMudmFsdWVdXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBpZCA9ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyXG4gICAgICAgICAgYXR0ciA9IFtpZC5pZFR5cGUsIGlkLmlkVmFsdWVdXG4gICAgICAgICAgJHNjb3BlLmNsb3NlUHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbigpXG4gICAgICAgIHJlY2lwaWVudCA9IFthdHRyLCBbJ3Byb2ZpbGVQaG90bycsICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aF1dXG4gICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5oaWRlUHJvZmlsZVBob3RvID0gdHJ1ZSAjIFRoZXJlJ3MgYSB3ZWlyZCBidWcgd2hlcmUgdGhlIHByb2ZpbGUgaWRlbnRpY29uIGRvZXNuJ3QgdXBkYXRlXG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtLCAkc2NvcGUuaXBmcykudGhlbiAtPlxuICAgICAgICAgICAgJHNjb3BlLmhpZGVQcm9maWxlUGhvdG8gPSBmYWxzZVxuICAgICAgICAgICAgaWYgISRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaWQuaWRUeXBlLCB2YWx1ZTogaWQuaWRWYWx1ZSB9XG4gICAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5zZXRQYWdlVGl0bGUgPSAodGl0bGUpIC0+XG4gICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSA9ICdJZGVudGlmaSdcbiAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgKz0gJyAtICcgKyB0aXRsZVxuXG4gICAgJHNjb3BlLmlwZnNHZXQgPSAodXJpLCBnZXRKc29uKSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBnbyA9IC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuY2F0KHVyaSkudGhlbiAoZmlsZSkgLT5cbiAgICAgICAgICAgIGZpbGUgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoZmlsZSlcbiAgICAgICAgICAgIGlmIGdldEpzb25cbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZS50b1N0cmluZygpKVxuICAgICAgICAgICAgcmVzb2x2ZSBmaWxlXG5cbiAgICAgICAgaWYgJHNjb3BlLmlwZnNSZWFkeVxuICAgICAgICAgIGdvKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAgICAgICBnbygpXG5cbiAgICAkc2NvcGUucmVzZXRNc2cgPSAtPlxuICAgICAgJHNjb3BlLm5ld01lc3NhZ2UgPVxuICAgICAgICByYXRpbmc6IDFcbiAgICAgICAgY29tbWVudDogJydcbiAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgICB0eXBlOiAnJ1xuICAgICAgICB2YWx1ZTogJydcbiAgICAkc2NvcGUucmVzZXRNc2coKVxuICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlXG4gICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UgPSAoZXZlbnQsIHBhcmFtcywgaWQpIC0+XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKSBpZiBldmVudFxuICAgICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2Ugb2JqZWN0XG4gICAgICBtZXNzYWdlID0gbnVsbFxuICAgICAgaWYgcGFyYW1zLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgcGFyYW1zLm1heFJhdGluZyB8PSAzXG4gICAgICAgIHBhcmFtcy5taW5SYXRpbmcgfD0gLTNcbiAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVSYXRpbmcocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIGVsc2UgaWYgcGFyYW1zLnR5cGUgPT0gJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24ocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIGVsc2VcbiAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGUocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgICBtZXNzYWdlLnRoZW4gKG0pIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIG1cbiAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtLCAkc2NvcGUuaXBmcylcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSBub3QgaW4gW3BhcmFtcy50eXBlLCBudWxsXVxuICAgICAgICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBwYXJhbXMudHlwZVxuICAgICAgICAkc2NvcGUucmVzZXRNc2coKVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICRzY29wZS5lcnJvciA9IGVcblxuICAgICRzY29wZS5hZGRBdHRyaWJ1dGUgPSAtPlxuICAgICAgJGxvY2F0aW9uLnBhdGggJyMvaWRlbnRpdGllcy9jcmVhdGUvJyArICRzY29wZS5xdWVyeS50ZXJtXG5cbiAgICAkc2NvcGUubG9naW4gPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gLTEgIyBiZWNhdXNlIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBhIHRydXN0IGluZGV4IHlldFxuXG4gICAgJHNjb3BlLm9wZW5Mb2dpbk1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dpbk1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9naW4ubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAgIGZvY3VzKCduZXdVc2VyJylcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCA9IChjYWxsYmFjaywgbW9kYWxCdXR0b25UZXh0LCBzcXVhcmlmeSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRNb2RhbENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICRzY29wZS5tb2RhbEJ1dHRvblRleHQgPSBtb2RhbEJ1dHRvblRleHQgb3IgJ1VwbG9hZCdcbiAgICAgICRzY29wZS5zcXVhcmlmeSA9IHNxdWFyaWZ5XG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy91cGxvYWQubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcblxuICAgIGxvYWRNc2dzID0gLT5cbiAgICAgIGxpbWl0ID0gNDBcbiAgICAgIGN1cnNvciA9IG51bGxcbiAgICAgICRzY29wZS5tc2dzLmxpc3QgPSBbXVxuICAgICAgcmVzdWx0Rm91bmQgPSAobXNnKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZ290IG1zZycsIG1zZ1xuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUubXNncy5saXN0LnB1c2ggbXNnXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRNZXNzYWdlc0J5VGltZXN0YW1wKHJlc3VsdEZvdW5kLCBsaW1pdCwgY3Vyc29yKVxuXG4gICAgJHNjb3BlLiR3YXRjaCAnaWRlbnRpZmlJbmRleCcsIC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICBsb2FkTXNncygpXG4gICAgICAkc2NvcGUuc2VhcmNoKClcblxuICAgICRzY29wZS51cGxvYWRGaWxlID0gKGJsb2IpIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ3VwbG9hZGluZycsIGJsb2JcbiAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQpIC0+XG4gICAgICAgICAgYnVmZmVyID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyLmZyb20oZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICBjb25zb2xlLmxvZyAnYnVmZmVyJywgYnVmZmVyXG4gICAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuYWRkIGJ1ZmZlciwgKGVyciwgZmlsZXMpIC0+XG4gICAgICAgICAgICBpZiBlcnJcbiAgICAgICAgICAgICAgcmVqZWN0KCdhZGRpbmcgdG8gaXBmcyBmYWlsZWQnLCBlcnIpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nICdkb25lOicsIGVyciwgZmlsZXNcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXG4gICAgJHNjb3BlLmNyZWF0ZVVzZXIgPSAobmFtZSkgLT5cbiAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmdlbmVyYXRlKClcbiAgICAgIC50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5XG4gICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LnRvSndrKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICAkc2NvcGUubG9naW5XaXRoS2V5KCRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZClcbiAgICAgIC50aGVuIC0+XG4gICAgICAgIHJlY2lwaWVudCA9IFtbJ2tleUlEJywgJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXSwgWyduYW1lJywgbmFtZV1dXG4gICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgLnRoZW4gKG1zZykgLT5cbiAgICAgICAgYWRkZWQgPSBmYWxzZVxuICAgICAgICAkc2NvcGUuJHdhdGNoICdpZGVudGlmaUluZGV4JywgKCkgLT5cbiAgICAgICAgICByZXR1cm4gaWYgYWRkZWRcbiAgICAgICAgICBhZGRlZCA9IHRydWVcbiAgICAgICAgICBjb25zb2xlLmxvZyAnbXNnJywgbXNnXG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtc2csICRzY29wZS5pcGZzKVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmdlbmVyYXRlKCkudGhlbiAoa2V5KSAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBrZXlcbiAgICAgICAgICBjb25zb2xlLmxvZyAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LnRvSndrKCRzY29wZS5wcml2YXRlS2V5KVxuXG4gICAgJHNjb3BlLmRvd25sb2FkVGV4dCA9ICh0ZXh0KSAtPlxuICAgICAgaGlkZGVuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgaGlkZGVuRWxlbWVudC5ocmVmID0gJ2RhdGE6dGV4dC9jc3Y7Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJKHRleHQpXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gJ2lkZW50aWZpX3ByaXZhdGVfa2V5LnR4dCdcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLm9wZW5Mb2dvdXRNb2RhbCA9IC0+XG4gICAgICAkc2NvcGUubG9nb3V0TW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dvdXQubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUubG9nb3V0TW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICAkc2NvcGUubG9nb3V0TW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmNsb3NlTG9nb3V0TW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ291dE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5sb2dvdXQgPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJydcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9XG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyQWxsKClcbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5saXN0JylcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IG51bGxcbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5jbG9zZSgpXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG4gICAgICAkc2NvcGUubG9jYWxTZXR0aW5ncyA9IHt9XG5cbiAgICAkc2NvcGUubXNnRmlsdGVyID0gKHZhbHVlLCBpbmRleCwgYXJyYXkpIC0+XG4gICAgICBkYXRhID0gdmFsdWUuZGF0YSBvciB2YWx1ZS5zaWduZWREYXRhXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUubWF0Y2ggL15yYXRpbmcvXG4gICAgICAgICAgaWYgZGF0YS50eXBlICE9ICdyYXRpbmcnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKGRhdGEubWF4UmF0aW5nICsgZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpwb3NpdGl2ZScgYW5kIGRhdGEucmF0aW5nIDw9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5lZ2F0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPj0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmV1dHJhbCcgYW5kIGRhdGEucmF0aW5nICE9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmIGRhdGEudHlwZSAhPSAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBlbHNlXG4gICAgICAgIGlmIGRhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbiddXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID09IDAgYW5kIHR5cGVvZiB2YWx1ZS5hdXRob3JUcnVzdERpc3RhbmNlICE9ICdudW1iZXInXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID4gMCBhbmQgdmFsdWUuYXV0aG9yVHJ1c3REaXN0YW5jZSA+ICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgICRzY29wZS5yZW1vdmVGb2N1cyA9IChldmVudCkgLT5cbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYmx1cigpXG5cbiAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSA9IChtc2cpIC0+XG4gICAgICBzaG93UmF3RGF0YSA9XG4gICAgICAgIGhhc2g6IG1zZy5oYXNoXG4gICAgICAgIGRhdGE6IG1zZy5kYXRhXG4gICAgICAgIHByaW9yaXR5OiBtc2cucHJpb3JpdHlcbiAgICAgICAgandzOiBtc2cuandzXG4gICAgICBtc2cuc3RyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNob3dSYXdEYXRhLCB1bmRlZmluZWQsIDIpXG5cbiAgICAkc2NvcGUub3Blbk1lc3NhZ2UgPSAoZXZlbnQsIG1lc3NhZ2UsIHNpemUpIC0+XG4gICAgICB0ID0gZXZlbnQudGFyZ2V0XG4gICAgICByZXR1cm4gaWYgYW5ndWxhci5lbGVtZW50KHQpLmNsb3Nlc3QoJ2EnKS5sZW5ndGhcbiAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKG1lc3NhZ2UpXG4gICAgICAkc2NvcGUubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICAgICMgVE9ETzogY2hlY2sgc2lnXG4gICAgICAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnQgPSAkc2NvcGUubWVzc2FnZS5nZXRSZWNpcGllbnQoJHNjb3BlLmlkZW50aWZpSW5kZXgpXG4gICAgICAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnQuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChkKSAtPlxuICAgICAgICBtdmEgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50X25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlELCAna2V5SUQnKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeUF0dHIgPSBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUoWydrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEXSlcbiAgICAgICRzY29wZS5tZXNzYWdlTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5tZXNzYWdlTW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICAkc2NvcGUubWVzc2FnZU1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5maWx0ZXJzID0gJHNjb3BlLmZpbHRlcnMgb3IgY29uZmlnLmRlZmF1bHRGaWx0ZXJzXG5cbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuICAgICMgJHNjb3BlLm1lbnUgPSBNZW51cy5nZXRNZW51KCd0b3BiYXInKVxuXG4gICAgJHNjb3BlLnRvZ2dsZUNvbGxhcHNpYmxlTWVudSA9IC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSAhJHNjb3BlLmlzQ29sbGFwc2VkXG5cbiAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzID0gKG1lc3NhZ2VzLCBtc2dPcHRpb25zKSAtPlxuICAgICAgcHJvY2Vzc01lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICBtc2cuZGF0YSA9IG1zZy5zaWduZWREYXRhXG4gICAgICAgIG1zZy5hdXRob3IgPSBtc2cuZ2V0QXV0aG9yKCRzY29wZS5pZGVudGlmaUluZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICAgIG1zZy5hdXRob3IuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChkKSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+IG1zZy5hdXRob3JfbmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICBtc2cucmVjaXBpZW50ID0gbXNnLmdldFJlY2lwaWVudCgkc2NvcGUuaWRlbnRpZmlJbmRleClcbiAgICAgICAgbXNnLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgICAgbXZhID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGQpXG4gICAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+IG1zZy5yZWNpcGllbnRfbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAjIFRPRE86IG1ha2Ugc3VyZSBtZXNzYWdlIHNpZ25hdHVyZSBpcyBjaGVja2VkXG5cbiAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yWzBdXG4gICAgICAgICAgaSA9IHVuZGVmaW5lZFxuICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEuYXV0aG9yLmxlbmd0aFxuICAgICAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cygkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZS5nZXRVbmlxdWVJZFZhbGlkYXRvcnMoKSkuaW5kZXhPZihtc2cuZGF0YS5hdXRob3JbaV1bMF0pXG4gICAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuZGF0YS5hdXRob3JbaV1cbiAgICAgICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgbXNnLmRhdGEuYXV0aG9yW2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IG1zZy5kYXRhLmF1dGhvcltpXVsxXVxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFswXVxuICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEucmVjaXBpZW50Lmxlbmd0aFxuICAgICAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cygkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZS5nZXRVbmlxdWVJZFZhbGlkYXRvcnMoKSkuaW5kZXhPZihtc2cuZGF0YS5yZWNpcGllbnRbaV1bMF0pXG4gICAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBtc2cuZGF0YS5yZWNpcGllbnRbaV1cbiAgICAgICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgbXNnLmRhdGEucmVjaXBpZW50W2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVsxXVxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgaWYgbXNnLmxpbmtUb0F1dGhvclswXSA9PSBtc2cubGlua1RvUmVjaXBpZW50WzBdIGFuZCBtc2cubGlua1RvQXV0aG9yWzFdID09IG1zZy5saW5rVG9SZWNpcGllbnRbMV1cbiAgICAgICAgICAgIG1zZy5zYW1lQXV0aG9yQW5kUmVjaXBpZW50ID0gdHJ1ZVxuICAgICAgICAgIHNpZ25lZERhdGEgPSBtc2cuZGF0YVxuICAgICAgICAgIGFscGhhID0gdW5kZWZpbmVkXG4gICAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnXG4gICAgICAgICAgbXNnLmJnQ29sb3IgPSAnJ1xuICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBuZXcgQXJyYXkoMSlcbiAgICAgICAgICBzd2l0Y2ggc2lnbmVkRGF0YS50eXBlXG4gICAgICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tb2stc2lnbidcbiAgICAgICAgICAgICAgbXNnLmlzVmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAndW52ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZmljYXRpb24nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgbmVnYXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgICAgICBtc2cuaXNVbnZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ3Bvc3QnXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZmEgZmEtcGVuY2lsJ1xuICAgICAgICAgICAgICBtc2cuaXNQb3N0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAncmF0aW5nJ1xuICAgICAgICAgICAgICByYXRpbmcgPSBzaWduZWREYXRhLnJhdGluZ1xuICAgICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKHNpZ25lZERhdGEubWluUmF0aW5nICsgc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgICAgICBtYXhSYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIG1pblJhdGluZ0RpZmYgPSBzaWduZWREYXRhLm1pblJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgaWYgcmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAgIGlmIHNpZ25lZERhdGEuY29udGV4dCA9PSAndmVyaWZpZXInXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2ZhIGZhLXNoaWVsZCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1heFJhdGluZ0RpZmYgPCAyIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1heFJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgICAgZWxzZSBpZiByYXRpbmcgPCBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtaW5SYXRpbmdEaWZmID4gLTIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWluUmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyArIDAuNSkgLyBtaW5SYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzOydcbiAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIHByb2Nlc3NNZXNzYWdlKG1zZylcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyA9IChpLCBodG1sU2FmZSwgc2V0VGl0bGUpIC0+XG4gICAgICBpLnZlcmlmaWVkID0gZmFsc2VcbiAgICAgIGkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcbiAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICAgIGkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgIGkudmVyaWZpZWQgPSB0cnVlIGlmIG12YS5uYW1lLnZlcmlmaWVkXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICAgICAgaS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBPYmplY3QudmFsdWVzKGF0dHJzKVswXS52YWxcbiAgICAgICAgICBpZiBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICBpZiBtdmEubmlja25hbWUgYW5kIG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsICE9IGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICAgICAgIGkubmlja25hbWUgPSBpLm5pY2tuYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgaS5wcmltYXJ5TmFtZSBpZiBzZXRUaXRsZVxuXG4gICAgJHNjb3BlLnNlYXJjaEtleWRvd24gPSAoZXZlbnQpIC0+XG4gICAgICBzd2l0Y2ggKGlmIGV2ZW50IHRoZW4gZXZlbnQud2hpY2ggZWxzZSAtMSlcbiAgICAgICAgd2hlbiAzOFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+IC0xXG4gICAgICAgICAgICAkc2NvcGUuYWRkRW50cnlBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPj0gMFxuICAgICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5IDwgKCRzY29wZS5pZHMubGlzdC5sZW5ndGggfHwgMCkgLSAxXG4gICAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+PSAwXG4gICAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSArIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID09IC0xXG4gICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlkID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XVxuICAgICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGlkLmxpbmtUby5uYW1lLCB2YWx1ZTogaWQubGlua1RvLnZhbCB9XG4gICAgICAgIHdoZW4gLTFcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICB3aGVuIDMzLCAzNCwgMzUsIDM2LCAzNywgMzlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsID0gYW5ndWxhci5lbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgIHdhaXQgPSBzZXRUaW1lb3V0KCgtPlxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSBlbC52YWwoKVxuICAgICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICApLCAzMDApXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gd2FpdFxuICAgICAgICAgIGJyZWFrXG5cbiAgICAkc2NvcGUuZHJvcGRvd25TZWFyY2hTZWxlY3QgPSAoaXRlbSkgLT5cbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpdGVtLmxpbmtUby5uYW1lLCB2YWx1ZTogaXRlbS5saW5rVG8udmFsIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkR3VuUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuZ3VuLm9wdCh7cGVlcnM6IFt1cmxdfSk7ICMgVE9ETzogdmFsaWRhdGUgdXJsXG5cbiAgICAkc2NvcGUucmVtb3ZlR3VuUGVlciA9ICh1cmwpIC0+XG4gICAgICBjb25zb2xlLmxvZyAncmVtb3ZlR3VuUGVlcicgIyBUT0RPOiBob3cgdG8gZG8gdGhpcz9cblxuICAgICRzY29wZS5hZGRJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5jb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcblxuICAgICRzY29wZS5yZW1vdmVJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5kaXNjb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcbl1cbiJdfQ==

(function() {
  'use strict';
  // Identities controller
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    '$q',
    '$timeout',
    '$uibModal',
    // 'Authentication'
    'config',
    'localStorageService',
    'focus',
    function($scope,
    $state,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    $q,
    $timeout,
    $uibModal,
    config,
    localStorageService,
    focus) { //, Authentication
      var load,
    thumbsDownObj,
    thumbsUpObj;
      $scope.newEntry = {};
      $scope.activeTab = 1;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.sent = [];
      $scope.received = [];
      $scope.connections = {};
      thumbsUpObj = {};
      thumbsDownObj = {};
      $scope.thumbsUp = [];
      $scope.thumbsDown = [];
      $scope.verifications = [];
      if ($stateParams.search) {
        $scope.query.term = $stateParams.search;
      }
      $scope.newVerification = {
        type: '',
        value: ''
      };
      $scope.collapseLevel = {};
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.slider = {
        value: 0,
        options: {
          floor: -3,
          ceil: 3,
          hidePointerLabels: true,
          hideLimitLabels: true
        }
      };
      if ($location.search().share) {
        $scope.share = true;
      }
      $scope.$on('MessageAdded',
    function(event,
    args) {
        return $state.reload();
      });
      $scope.addEntry = function(event,
    entry) {
        var linkTo,
    params,
    recipient,
    uuid;
        recipient = [];
        linkTo = null;
        if (entry.name) {
          recipient.push(['name',
    entry.name]);
        }
        if (entry.email) {
          recipient.push(['email',
    entry.email]);
          linkTo = {
            type: 'email',
            value: entry.email
          };
        }
        if (entry.url) {
          recipient.push(['url',
    entry.url]);
          if (!linkTo) {
            linkTo = {
              type: 'url',
              value: entry.url
            };
          }
        }
        if (entry.phone) {
          recipient.push(['phone',
    entry.phone]);
          if (!linkTo) {
            linkTo = {
              type: 'phone',
              value: entry.phone
            };
          }
        }
        if (!(entry.email || entry.url || entry.phone)) {
          uuid = $window.identifiLib.Attribute.getUuid();
          recipient.push(['uuid',
    uuid.val]);
          linkTo = {
            type: 'uuid',
            value: uuid.val
          };
        }
        params = {
          type: 'verification',
          recipient: recipient
        };
        return $scope.createMessage(event,
    params).then(function(response) {
          return $state.go('identities.show',
    linkTo);
        },
    function(error) {
          return console.log("error",
    error);
        });
      };
      $scope.guessAttributeType = function() {
        if ($scope.newVerification.value.length) {
          $scope.newVerification.type = $window.identifiLib.Attribute.guessTypeOf($scope.newVerification.value);
          if (!$scope.newVerification.type) {
            if (!$scope.newVerification.value.match(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:/)) {
              return $scope.newVerification.type = 'name';
            }
          }
        } else {
          return $scope.newVerification.type = '';
        }
      };
      $scope.addName = function(name) {
        var recipient;
        if (name) {
          recipient = [[$scope.idType,
    $scope.idValue],
    ['name',
    name]];
          $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            return $scope.identifiIndex.addMessage(m,
    $scope.ipfs);
          });
          return $scope.nameAdded = true;
        } else {
          $scope.addingName = true;
          return focus('addNameFocus');
        }
      };
      $scope.getConnections = function() {
        return $scope.identity.gun.get('attrs').open(function(attrs) {
          var alpha,
    c,
    conn,
    connections,
    i,
    len,
    mostConfirmations,
    percentage,
    ref;
          console.log(attrs);
          connections = attrs || [];
          if (connections.length > 0) {
            c = connections[0];
            mostConfirmations = c.conf;
          } else {
            mostConfirmations = 1;
          }
          $scope.connections = Object.values(connections).sort(function(a,
    b) {
            return (b.conf - 2 * b.ref) - (a.conf - 2 * a.ref);
          });
          ref = $scope.connections;
          for (i = 0, len = ref.length; i < len; i++) {
            conn = ref[i];
            if (!(conn.name && conn.val)) {
              return;
            }
            conn.attr = new $window.identifiLib.Attribute([conn.name,
    conn.val]);
            conn.isCurrent = conn.name === $scope.idType && conn.val === $scope.idValue;
            switch (conn.name) {
              case 'email':
                conn.iconStyle = 'glyphicon glyphicon-envelope';
                conn.btnStyle = 'btn-success';
                conn.link = 'mailto:' + conn.val;
                conn.quickContact = true;
                break;
              case 'bitcoin_address':
              case 'bitcoin':
                conn.iconStyle = 'fa fa-bitcoin';
                conn.btnStyle = 'btn-primary';
                conn.link = 'https://blockchain.info/address/' + conn.val;
                conn.quickContact = true;
                break;
              case 'gpg_fingerprint':
              case 'gpg_keyid':
                conn.iconStyle = 'fa fa-key';
                conn.btnStyle = 'btn-default';
                conn.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + conn.val;
                break;
              case 'account':
                conn.iconStyle = 'fa fa-at';
                break;
              case 'nickname':
                $scope.identity.hasProperName = true;
                conn.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'name':
                $scope.identity.hasProperName = true;
                conn.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'tel':
              case 'phone':
                conn.iconStyle = 'glyphicon glyphicon-earphone';
                conn.btnStyle = 'btn-success';
                conn.link = 'tel:' + conn.val;
                conn.quickContact = true;
                break;
              case 'keyID':
                conn.iconStyle = 'fa fa-key';
                break;
              case 'coverPhoto':
                if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                  $scope.ipfsGet(conn.val).then(function(coverPhoto) {
                    return $scope.coverPhoto = $scope.coverPhoto || {
                      'background-image': 'url(data:image;base64,' + coverPhoto.toString('base64') + ')'
                    };
                  });
                }
                break;
              case 'url':
                conn.link = conn.val;
                if (conn.val.indexOf('facebook.com/') > -1) {
                  conn.iconStyle = 'fa fa-facebook';
                  conn.btnStyle = 'btn-facebook';
                  conn.link = conn.val;
                  conn.linkName = conn.val.split('facebook.com/')[1];
                  conn.quickContact = true;
                } else if (conn.val.indexOf('twitter.com/') > -1) {
                  conn.iconStyle = 'fa fa-twitter';
                  conn.btnStyle = 'btn-twitter';
                  conn.link = conn.val;
                  conn.linkName = conn.val.split('twitter.com/')[1];
                  conn.quickContact = true;
                } else if (conn.val.indexOf('plus.google.com/') > -1) {
                  conn.iconStyle = 'fa fa-google-plus';
                  conn.btnStyle = 'btn-google-plus';
                  conn.link = conn.val;
                  conn.linkName = conn.val.split('plus.google.com/')[1];
                  conn.quickContact = true;
                } else if (conn.val.indexOf('linkedin.com/') > -1) {
                  conn.iconStyle = 'fa fa-linkedin';
                  conn.btnStyle = 'btn-linkedin';
                  conn.link = conn.val;
                  conn.linkName = conn.val.split('linkedin.com/')[1];
                  conn.quickContact = true;
                } else if (conn.val.indexOf('github.com/') > -1) {
                  conn.iconStyle = 'fa fa-github';
                  conn.btnStyle = 'btn-github';
                  conn.link = conn.val;
                  conn.linkName = conn.val.split('github.com/')[1];
                  conn.quickContact = true;
                } else {
                  conn.iconStyle = 'glyphicon glyphicon-link';
                  conn.btnStyle = 'btn-default';
                }
            }
            if (conn.val && conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
              conn.link = 'https://ipfs.io' + conn.val;
              conn.linkName = conn.val;
              conn.iconStyle = 'glyphicon glyphicon-link';
              conn.btnStyle = 'btn-default';
            }
            if (conn.conf + conn.ref > 0) {
              percentage = conn.conf * 100 / (conn.conf + conn.ref);
              if (percentage >= 80) {
                alpha = conn.conf / mostConfirmations * 0.7 + 0.3;
              // conn.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
              } else if (percentage >= 60) {
                conn.rowClass = 'warning';
              } else {
                conn.rowClass = 'danger';
              }
            }
            $scope.hasQuickContacts = $scope.hasQuickContacts || conn.quickContact;
          }
          return $scope.connectionsLength = Object.keys($scope.connections).length;
        });
      };
      $scope.getConnectingMsgs = function(id1,
    id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('',
    10000,
    false,
    true).then(function(res) {
                res.forEach(function(row) {
                  var msg,
    ref;
                  msg = $window.identifiLib.Message.fromJws(row.value.jws);
                  if (((ref = msg.signedData.type) === 'verify_identity' || ref === 'verification' || ref === 'unverify_identity' || ref === 'unverification')) {
                    msg.linkToAuthor = msg.signedData.author[0];
                    return $scope.verifications.push(msg);
                  }
                });
                return resolve();
              });
            } else {
              return resolve();
            }
          } else {
            return resolve();
          }
        });
        return getVerifications.then(function() {
          var msgs;
          msgs = [];
          $scope.verifications.forEach(function(msg) {
            var hasId1,
    hasId2,
    i,
    id,
    len,
    ref;
            hasId1 = hasId2 = false;
            ref = msg.signedData.recipient;
            for (i = 0, len = ref.length; i < len; i++) {
              id = ref[i];
              if (id[0] === id2.name && id[1] === id2.val) {
                return msgs.push(msg);
              }
            }
          });
          return msgs;
        });
      };
      $scope.connectionClicked = function(event,
    id) {
        if (id.connecting_msgs) {
          return id.collapse = !id.collapse;
        } else {
          return $scope.getConnectingMsgs([$scope.idType,
    $scope.idValue],
    id).then(function(msgs) {
            id.connecting_msgs = msgs;
            return id.collapse = !id.collapse;
          });
        }
      };
      $scope.getSentMsgs = function() {
        var cursor,
    resultFound;
        if (!($scope.identity && $scope.identifiIndex)) {
          return;
        }
        $scope.sent = [];
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        resultFound = function(msg) {
          $scope.processMessages([msg],
    {
            authorIsSelf: true
          });
          return $scope.sent.push(msg);
        };
        return $scope.identifiIndex.getSentMsgs($scope.identity,
    resultFound,
    $scope.filters.limit);
      };
      $scope.getReceivedMsgs = function() {
        var cursor,
    resultFound;
        if (!($scope.identity && $scope.identifiIndex)) {
          return;
        }
        $scope.received = [];
        cursor = $scope.received.length ? $scope.received[$scope.received.length - 1].cursor : '';
        resultFound = function(msg) {
          $scope.processMessages([msg],
    {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            if (msg.isPositive()) {
              if ($scope.thumbsUp.length < 12 && !thumbsUpObj[JSON.stringify(msg.signedData.author)]) {
                thumbsUpObj[JSON.stringify(msg.signedData.author)] = true;
                $scope.thumbsUp.push(msg);
                $scope.hasThumbsUp = true;
              }
            } else if (msg.isNegative() && $scope.thumbsDown.length < 12 && !thumbsDownObj[JSON.stringify(msg.signedData.author)]) {
              thumbsDownObj[JSON.stringify(msg.signedData.author)] = true;
              $scope.thumbsDown.push(msg);
              $scope.hasThumbsDown = true;
            }
            return $scope.received.push(msg);
          });
        };
        return $scope.identifiIndex.getReceivedMsgs($scope.identity,
    resultFound,
    $scope.filters.limit,
    cursor);
      };
      $scope.setFilters = function(filters) {
        return angular.extend($scope.filters,
    filters);
      };
      $scope.uploadCoverPhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          console.log(files,
    $scope.identity);
          recipient = [[$scope.idType,
    $scope.idValue],
    ['coverPhoto',
    '/ipfs/' + files[0].path]];
          return $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.identifiIndex.addMessage(m,
    $scope.ipfs);
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.openShareModal = function() {
        $scope.shareModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/identities/share.modal.html',
          size: 'md',
          scope: $scope
        });
        $scope.shareModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.shareModal.close();
        });
      };
      $scope.openReadQRModal = function() {
        $scope.readQRModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/identities/readqr.modal.html',
          size: 'md',
          scope: $scope
        });
        $scope.readQRModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.readQRModal.close();
        });
      };
      $scope.openCoverPhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadCoverPhoto,
    'Upload cover photo',
    false);
      };
      $scope.findOne = function() {
        if (!$scope.identifiIndex) {
          return;
        }
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        $scope.idAttr = new $window.identifiLib.Attribute([$scope.idType,
    $scope.idValue]);
        $scope.idUrl = $scope.getIdUrl($scope.idType,
    $scope.idValue);
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = $window.identifiLib.Attribute.isUniqueType($scope.idType);
        if (!$scope.isUniqueType) {
          $state.go('identities.list',
    {
            search: $scope.idValue
          });
          if ($scope.tabs) {
            $scope.tabs[2].active = true;
          }
        }
        $scope.setPageTitle($scope.idValue);
        $scope.identity = $scope.identifiIndex.get($scope.idValue,
    $scope.idType);
        $scope.setIdentityNames($scope.identity,
    false,
    true);
        $scope.identity.gun.on(function(data) {
          return $scope.identity.data = data;
        });
        $scope.getConnections();
        $scope.getSentMsgs();
        $scope.getReceivedMsgs();
        return $scope.identity.gun.get('scores').open(function(scores) {
          return $scope.scores = scores;
        });
      };
      load = function() {
        if ($scope.identifiIndex) {
          if ($state.is('identities.show')) {
            $scope.findOne();
          }
          if ($state.is('identities.create')) {
            focus('idNameFocus');
            return $scope.newEntry.name = $scope.capitalizeWords($scope.query.term);
          }
        }
      };
      $scope.$watch('identifiIndex',
    load);
      $scope.qrScanSuccess = function(data) {
        var a,
    type,
    value;
        a = data.split('/');
        if (data.indexOf('https://identi.fi' === 0 && a.length > 4)) {
          type = a[a.length - 2];
          value = a[a.length - 1];
          return $state.go('identities.show',
    {type,
    value});
        } else {
          return console.log('Unrecognized identity url',
    data);
        }
      };
      return $scope.qrScanError = function(e) {};
    }
  ]);

  // this is called each time a QR code is not found on the camera
// console.error e

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRTtJQUVuRSxRQUZtRTtJQUduRSxZQUhtRTtJQUluRSxTQUptRTtJQUtuRSxjQUxtRTtJQU1uRSxXQU5tRTtJQU9uRSxPQVBtRTtJQVFuRSxJQVJtRTtJQVNuRSxVQVRtRTtJQVVuRSxXQVZtRTs7SUFZbkUsUUFabUU7SUFhbkUscUJBYm1FO0lBY25FLE9BZG1FO0lBZW5FLFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxTQUFwRDtJQUErRCxLQUEvRDtJQUFzRSxFQUF0RTtJQUEwRSxRQUExRTtJQUFvRixTQUFwRjtJQUErRixNQUEvRjtJQUNBLG1CQURBO0lBQ3FCLEtBRHJCLENBQUEsRUFBQTtBQUVFLFVBQUEsSUFBQTtJQUFBLGFBQUE7SUFBQTtNQUFBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLENBQUE7TUFDbEIsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLEtBQUQsQ0FBQTtlQUFXLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQTlCO01BQ3JCLE1BQU0sQ0FBQyxJQUFQLEdBQWM7TUFDZCxNQUFNLENBQUMsUUFBUCxHQUFrQjtNQUNsQixNQUFNLENBQUMsV0FBUCxHQUFxQixDQUFBO01BQ3JCLFdBQUEsR0FBYyxDQUFBO01BQ2QsYUFBQSxHQUFnQixDQUFBO01BQ2hCLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO01BQ3BC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QUFDLEVBQVAsQ0FBVSxpQkFBVjtJQUE2QixDQUFDLElBQUQ7SUFBTyxLQUFQLENBQTdCLEVBSEY7U0FBQSxNQUFBO2lCQUtFLE9BQU8sQ0FBQyxHQUFSLENBQVksMkJBQVo7SUFBeUMsSUFBekMsRUFMRjs7TUFGcUI7YUFRdkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsUUFBQSxDQUFDLENBQUQsQ0FBQSxFQUFBO0lBalV2QixDQWZtRTtHQUFyRTs7RUFGQTs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBJZGVudGl0aWVzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdJZGVudGl0aWVzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRzdGF0ZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckcSdcbiAgJyR0aW1lb3V0J1xuICAnJHVpYk1vZGFsJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICdmb2N1cydcbiAgKCRzY29wZSwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsICRxLCAkdGltZW91dCwgJHVpYk1vZGFsLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGZvY3VzKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5uZXdFbnRyeSA9IHt9XG4gICAgJHNjb3BlLmFjdGl2ZVRhYiA9IDFcbiAgICAkc2NvcGUuYWN0aXZhdGVUYWIgPSAodGFiSWQpIC0+ICRzY29wZS5hY3RpdmVUYWIgPSB0YWJJZFxuICAgICRzY29wZS5zZW50ID0gW11cbiAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICRzY29wZS5jb25uZWN0aW9ucyA9IHt9XG4gICAgdGh1bWJzVXBPYmogPSB7fVxuICAgIHRodW1ic0Rvd25PYmogPSB7fVxuICAgICRzY29wZS50aHVtYnNVcCA9IFtdXG4gICAgJHNjb3BlLnRodW1ic0Rvd24gPSBbXVxuICAgICRzY29wZS52ZXJpZmljYXRpb25zID0gW11cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICRzdGF0ZVBhcmFtcy5zZWFyY2ggaWYgJHN0YXRlUGFyYW1zLnNlYXJjaFxuICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5jb2xsYXBzZUxldmVsID0ge31cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG4gICAgJHNjb3BlLnNsaWRlciA9XG4gICAgICB2YWx1ZTogMFxuICAgICAgb3B0aW9uczpcbiAgICAgICAgZmxvb3I6IC0zXG4gICAgICAgIGNlaWw6IDNcbiAgICAgICAgaGlkZVBvaW50ZXJMYWJlbHM6IHRydWVcbiAgICAgICAgaGlkZUxpbWl0TGFiZWxzOiB0cnVlXG5cbiAgICAkc2NvcGUuc2hhcmUgPSB0cnVlIGlmICRsb2NhdGlvbi5zZWFyY2goKS5zaGFyZVxuXG4gICAgJHNjb3BlLiRvbiAnTWVzc2FnZUFkZGVkJywgKGV2ZW50LCBhcmdzKSAtPlxuICAgICAgJHN0YXRlLnJlbG9hZCgpXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgcmVjaXBpZW50ID0gW11cbiAgICAgIGxpbmtUbyA9IG51bGxcbiAgICAgIGlmIGVudHJ5Lm5hbWVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyduYW1lJywgZW50cnkubmFtZV1cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnZW1haWwnLCBlbnRyeS5lbWFpbF1cbiAgICAgICAgbGlua1RvID0geyB0eXBlOiAnZW1haWwnLCB2YWx1ZTogZW50cnkuZW1haWwgfVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICd1cmwnLCB2YWx1ZTogZW50cnkudXJsIH0gdW5sZXNzIGxpbmtUb1xuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICdwaG9uZScsIHZhbHVlOiBlbnRyeS5waG9uZSB9IHVubGVzcyBsaW5rVG9cbiAgICAgIHVubGVzcyBlbnRyeS5lbWFpbCBvciBlbnRyeS51cmwgb3IgZW50cnkucGhvbmVcbiAgICAgICAgdXVpZCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlLmdldFV1aWQoKVxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ3V1aWQnLCB1dWlkLnZhbF1cbiAgICAgICAgbGlua1RvID0geyB0eXBlOiAndXVpZCcsIHZhbHVlOiB1dWlkLnZhbCB9XG4gICAgICBwYXJhbXMgPVxuICAgICAgICB0eXBlOiAndmVyaWZpY2F0aW9uJ1xuICAgICAgICByZWNpcGllbnQ6IHJlY2lwaWVudFxuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UoZXZlbnQsIHBhcmFtcykudGhlbiAocmVzcG9uc2UpIC0+XG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgbGlua1RvXG4gICAgICAsIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgXCJlcnJvclwiLCBlcnJvclxuXG4gICAgJHNjb3BlLmd1ZXNzQXR0cmlidXRlVHlwZSA9IC0+XG4gICAgICBpZiAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlLmxlbmd0aFxuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZS5ndWVzc1R5cGVPZigkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlKVxuICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlXG4gICAgICAgICAgdW5sZXNzICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubWF0Y2ggL1xcYHxcXH58XFwhfFxcQHxcXCN8XFwkfFxcJXxcXF58XFwmfFxcKnxcXCh8XFwpfFxcK3xcXD18XFxbfFxce3xcXF18XFx9fFxcfHxcXFxcfFxcJ3xcXDx8XFwsfFxcLnxcXD58XFw/fFxcL3xcXFwiXCJ8XFw7fFxcOi9cbiAgICAgICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICduYW1lJ1xuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAnJ1xuXG4gICAgJHNjb3BlLmFkZE5hbWUgPSAobmFtZSkgLT5cbiAgICAgIGlmIG5hbWVcbiAgICAgICAgcmVjaXBpZW50ID0gW1skc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIFsnbmFtZScsIG5hbWVdXVxuICAgICAgICAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5hZGRNZXNzYWdlKG0sICRzY29wZS5pcGZzKVxuICAgICAgICAkc2NvcGUubmFtZUFkZGVkID0gdHJ1ZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuYWRkaW5nTmFtZSA9IHRydWVcbiAgICAgICAgZm9jdXMoJ2FkZE5hbWVGb2N1cycpXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMgPSAtPlxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIGF0dHJzXG4gICAgICAgIGNvbm5lY3Rpb25zID0gYXR0cnMgb3IgW11cbiAgICAgICAgaWYgY29ubmVjdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgIGMgPSBjb25uZWN0aW9uc1swXVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gYy5jb25mXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IDFcbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zID0gT2JqZWN0LnZhbHVlcyhjb25uZWN0aW9ucykuc29ydCAoYSwgYikgLT5cbiAgICAgICAgICAoYi5jb25mIC0gMiAqIGIucmVmKSAtIChhLmNvbmYgLSAyICogYS5yZWYpXG4gICAgICAgIGZvciBjb25uIGluICRzY29wZS5jb25uZWN0aW9uc1xuICAgICAgICAgIHJldHVybiB1bmxlc3MgY29ubi5uYW1lIGFuZCBjb25uLnZhbFxuICAgICAgICAgIGNvbm4uYXR0ciA9IG5ldyAkd2luZG93LmlkZW50aWZpTGliLkF0dHJpYnV0ZShbY29ubi5uYW1lLCBjb25uLnZhbF0pXG4gICAgICAgICAgY29ubi5pc0N1cnJlbnQgPSBjb25uLm5hbWUgPT0gJHNjb3BlLmlkVHlwZSBhbmQgY29ubi52YWwgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICBzd2l0Y2ggY29ubi5uYW1lXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ21haWx0bzonICsgY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tcHJpbWFyeSdcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgY29ubi52YWxcbiAgICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSAndGVsOicgKyBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2tleUlEJ1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICB3aGVuICdjb3ZlclBob3RvJ1xuICAgICAgICAgICAgICBpZiBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGNvbm4udmFsKS50aGVuIChjb3ZlclBob3RvKSAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChkYXRhOmltYWdlO2Jhc2U2NCwnICsgY292ZXJQaG90by50b1N0cmluZygnYmFzZTY0JykgKyAnKScgfVxuICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBpZiBjb25uLnZhbC5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCd0d2l0dGVyLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2xpbmtlZGluLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGNvbm4udmFsIGFuZCBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vaXBmcy5pbycgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGNvbm4uY29uZiArIGNvbm4ucmVmID4gMFxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IGNvbm4uY29uZiAqIDEwMCAvIChjb25uLmNvbmYgKyBjb25uLnJlZilcbiAgICAgICAgICAgIGlmIHBlcmNlbnRhZ2UgPj0gODBcbiAgICAgICAgICAgICAgYWxwaGEgPSBjb25uLmNvbmYgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgICAjIGNvbm4ucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICAgIGVsc2UgaWYgcGVyY2VudGFnZSA+PSA2MFxuICAgICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnZGFuZ2VyJ1xuICAgICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgY29ubi5xdWlja0NvbnRhY3RcbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zTGVuZ3RoID0gT2JqZWN0LmtleXMoJHNjb3BlLmNvbm5lY3Rpb25zKS5sZW5ndGhcblxuXG4gICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzID0gKGlkMSwgaWQyKSAtPlxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucyA9ICRxIChyZXNvbHZlKSAtPlxuICAgICAgICBpZiAhJHNjb3BlLnZlcmlmaWNhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgaWYgJHNjb3BlLnJlY2VpdmVkSW5kZXhcbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4LnNlYXJjaFRleHQoJycsIDEwMDAwLCBmYWxzZSwgdHJ1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICByZXMuZm9yRWFjaCAocm93KSAtPlxuICAgICAgICAgICAgICAgIG1zZyA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tSndzKHJvdy52YWx1ZS5qd3MpXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ10pXG4gICAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLnNpZ25lZERhdGEuYXV0aG9yWzBdXG4gICAgICAgICAgICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5wdXNoIG1zZ1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucy50aGVuIC0+XG4gICAgICAgIG1zZ3MgPSBbXVxuICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgaGFzSWQxID0gaGFzSWQyID0gZmFsc2VcbiAgICAgICAgICBmb3IgaWQgaW4gbXNnLnNpZ25lZERhdGEucmVjaXBpZW50XG4gICAgICAgICAgICByZXR1cm4gbXNncy5wdXNoIG1zZyBpZiBpZFswXcKgPT0gaWQyLm5hbWUgYW5kIGlkWzFdID09IGlkMi52YWxcbiAgICAgICAgcmV0dXJuIG1zZ3NcblxuICAgICRzY29wZS5jb25uZWN0aW9uQ2xpY2tlZCA9IChldmVudCwgaWQpIC0+XG4gICAgICBpZiBpZC5jb25uZWN0aW5nX21zZ3NcbiAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzKFskc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIGlkKS50aGVuIChtc2dzKSAtPlxuICAgICAgICAgIGlkLmNvbm5lY3RpbmdfbXNncyA9IG1zZ3NcbiAgICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuXG4gICAgJHNjb3BlLmdldFNlbnRNc2dzID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmlkZW50aXR5IGFuZCAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnNlbnQubGVuZ3RoIHRoZW4gJHNjb3BlLnNlbnRbJHNjb3BlLnNlbnQubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgIHJlc3VsdEZvdW5kID0gKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbbXNnXSwgeyBhdXRob3JJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuc2VudC5wdXNoIG1zZ1xuXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRTZW50TXNncygkc2NvcGUuaWRlbnRpdHksIHJlc3VsdEZvdW5kLCAkc2NvcGUuZmlsdGVycy5saW1pdClcblxuICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaWRlbnRpdHkgYW5kICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnJlY2VpdmVkLmxlbmd0aCB0aGVuICRzY29wZS5yZWNlaXZlZFskc2NvcGUucmVjZWl2ZWQubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgIHJlc3VsdEZvdW5kID0gKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbbXNnXSwgeyByZWNpcGllbnRJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgaWYgbXNnLmlzUG9zaXRpdmUoKVxuICAgICAgICAgICAgaWYgJHNjb3BlLnRodW1ic1VwLmxlbmd0aCA8IDEyIGFuZCBub3QgdGh1bWJzVXBPYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV1cbiAgICAgICAgICAgICAgdGh1bWJzVXBPYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSB0cnVlXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNVcC5wdXNoIG1zZ1xuICAgICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzVXAgPSB0cnVlXG4gICAgICAgICAgZWxzZSBpZiBtc2cuaXNOZWdhdGl2ZSgpIGFuZCAkc2NvcGUudGh1bWJzRG93bi5sZW5ndGggPCAxMiBhbmQgbm90IHRodW1ic0Rvd25PYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV1cbiAgICAgICAgICAgIHRodW1ic0Rvd25PYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93bi5wdXNoIG1zZ1xuICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic0Rvd24gPSB0cnVlXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnB1c2ggbXNnXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRSZWNlaXZlZE1zZ3MoJHNjb3BlLmlkZW50aXR5LCByZXN1bHRGb3VuZCwgJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuXG4gICAgJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8gPSAoYmxvYiwgaWRlbnRpdHkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgY29uc29sZS5sb2cgZmlsZXMsICRzY29wZS5pZGVudGl0eVxuICAgICAgICByZWNpcGllbnQgPSBbWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgWydjb3ZlclBob3RvJywgJy9pcGZzLycgKyBmaWxlc1swXS5wYXRoXV1cbiAgICAgICAgJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtLCAkc2NvcGUuaXBmcylcbiAgICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5TaGFyZU1vZGFsID0gKCkgLT5cbiAgICAgICRzY29wZS5zaGFyZU1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvc2hhcmUubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ21kJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUuc2hhcmVNb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgICRzY29wZS5zaGFyZU1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuUmVhZFFSTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLnJlYWRRUk1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvcmVhZHFyLm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6ICdtZCdcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgJHNjb3BlLnJlYWRRUk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLnJlYWRRUk1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuQ292ZXJQaG90b1VwbG9hZE1vZGFsID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRDb3ZlclBob3RvLCAnVXBsb2FkIGNvdmVyIHBob3RvJywgZmFsc2UpXG5cbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAkc2NvcGUuaWRBdHRyID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlKFskc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0pXG4gICAgICAkc2NvcGUuaWRVcmwgPSAkc2NvcGUuZ2V0SWRVcmwoJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWUpXG4gICAgICAkc2NvcGUuaXNDdXJyZW50VXNlciA9ICRzY29wZS5hdXRoZW50aWNhdGlvbiBhbmRcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgYW5kXG4gICAgICAgICRzY29wZS5pZFR5cGUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlIGFuZFxuICAgICAgICAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5BdHRyaWJ1dGUuaXNVbmlxdWVUeXBlKCRzY29wZS5pZFR5cGUpXG4gICAgICBpZiAhJHNjb3BlLmlzVW5pcXVlVHlwZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCcsIHsgc2VhcmNoOiAkc2NvcGUuaWRWYWx1ZSB9XG4gICAgICAgICRzY29wZS50YWJzWzJdLmFjdGl2ZSA9IHRydWUgaWYgJHNjb3BlLnRhYnNcbiAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS5pZGVudGl0eSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUuaWRWYWx1ZSwgJHNjb3BlLmlkVHlwZSlcbiAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5pZGVudGl0eSwgZmFsc2UsIHRydWUpXG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAkc2NvcGUuaWRlbnRpdHkuZGF0YSA9IGRhdGFcbiAgICAgICRzY29wZS5nZXRDb25uZWN0aW9ucygpXG4gICAgICAkc2NvcGUuZ2V0U2VudE1zZ3MoKVxuICAgICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncygpXG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnc2NvcmVzJykub3BlbiAoc2NvcmVzKSAtPlxuICAgICAgICAkc2NvcGUuc2NvcmVzID0gc2NvcmVzXG5cbiAgICBsb2FkID0gLT5cbiAgICAgIGlmICRzY29wZS5pZGVudGlmaUluZGV4XG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgICRzY29wZS5maW5kT25lKClcblxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGZvY3VzKCdpZE5hbWVGb2N1cycpXG4gICAgICAgICAgJHNjb3BlLm5ld0VudHJ5Lm5hbWUgPSAkc2NvcGUuY2FwaXRhbGl6ZVdvcmRzKCRzY29wZS5xdWVyeS50ZXJtKVxuICAgICRzY29wZS4kd2F0Y2ggJ2lkZW50aWZpSW5kZXgnLCBsb2FkXG5cbiAgICAkc2NvcGUucXJTY2FuU3VjY2VzcyA9IChkYXRhKSAtPlxuICAgICAgYSA9IGRhdGEuc3BsaXQoJy8nKVxuICAgICAgaWYgZGF0YS5pbmRleE9mICdodHRwczovL2lkZW50aS5maScgPT0gMCBhbmQgYS5sZW5ndGggPiA0XG4gICAgICAgIHR5cGUgPSBhW2EubGVuZ3RoIC0gMl1cbiAgICAgICAgdmFsdWUgPSBhW2EubGVuZ3RoIC0gMV1cbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9XG4gICAgICBlbHNlXG4gICAgICAgIGNvbnNvbGUubG9nICdVbnJlY29nbml6ZWQgaWRlbnRpdHkgdXJsJywgZGF0YVxuICAgICRzY29wZS5xclNjYW5FcnJvciA9IChlKSAtPlxuICAgICAgIyB0aGlzIGlzIGNhbGxlZCBlYWNoIHRpbWUgYSBRUiBjb2RlIGlzIG5vdCBmb3VuZCBvbiB0aGUgY2FtZXJhXG4gICAgICAjIGNvbnNvbGUuZXJyb3IgZVxuXVxuIl19

(function() {
  angular.module('identifiAngular').run(function($log, $rootScope, $state, $stateParams, $window, localStorageService) {
    'ngInject';
    $log.debug('runBlock end');
    return $rootScope.$on('$stateChangeSuccess', function(event, current, previous) {
      $rootScope.pageTitle = $state.current.title || 'Identifi';
      localStorageService.set('state', current.name);
      localStorageService.set('stateParams', $stateParams);
      return $window.scrollTo(0, 0);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsR0FESCxDQUNPLFFBQUEsQ0FBQyxJQUFELEVBQU8sVUFBUCxFQUFtQixNQUFuQixFQUEyQixZQUEzQixFQUF5QyxPQUF6QyxFQUFrRCxtQkFBbEQsQ0FBQTtJQUNIO0lBQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYO1dBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZSxxQkFBZixFQUFzQyxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsQ0FBQTtNQUNwQyxVQUFVLENBQUMsU0FBWCxHQUF1QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWYsSUFBd0I7TUFDL0MsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsT0FBeEIsRUFBaUMsT0FBTyxDQUFDLElBQXpDO01BQ0EsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsYUFBeEIsRUFBdUMsWUFBdkM7YUFDQSxPQUFPLENBQUMsUUFBUixDQUFpQixDQUFqQixFQUFtQixDQUFuQjtJQUpvQyxDQUF0QztFQUhHLENBRFA7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5ydW4gKCRsb2csICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkd2luZG93LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4gICAgJHJvb3RTY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIGN1cnJlbnQsIHByZXZpb3VzKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAkc3RhdGUuY3VycmVudC50aXRsZSB8fCAnSWRlbnRpZmknXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3RhdGUnLCBjdXJyZW50Lm5hbWUpXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3RhdGVQYXJhbXMnLCAkc3RhdGVQYXJhbXMpXG4gICAgICAkd2luZG93LnNjcm9sbFRvKDAsMClcbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('identities', {
      url: '/contacts',
      template: "<ui-view/>",
      abstract: true
    }).state('identities.list', {
      url: '',
      templateUrl: 'app/identities/list.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities',
      params: {
        search: ''
      },
      title: 'Identifi - Contacts'
    }).state('identities.create', {
      url: '/create',
      templateUrl: 'app/identities/create.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('identities.show', {
      url: '/:type/:value',
      templateUrl: 'app/identities/show.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('messages', {
      url: '',
      template: "<ui-view/>",
      abstract: true
    }).state('messages.list', {
      url: '',
      templateUrl: 'app/messages/list.html',
      controller: 'MessagesController',
      controllerAs: 'messages',
      title: 'Identifi'
    }).state('messages.show', {
      url: '/messages/:id',
      templateUrl: 'app/messages/show.html',
      controller: 'MessagesController',
      controllerAs: 'messages'
    }).state('about', {
      url: '/about',
      templateUrl: 'app/main/about.html',
      title: 'Identifi - About'
    }).state('settings', {
      url: '/settings',
      templateUrl: 'app/main/settings.html',
      title: 'Identifi - Settings'
    });
    return $urlRouterProvider.otherwise('');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxRQUFBLENBQUMsY0FBRCxFQUFpQixrQkFBakIsQ0FBQTtJQUNOO0lBQ0EsY0FDRSxDQUFDLEtBREgsQ0FDUyxZQURULEVBRUk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0FGSixDQUtFLENBQUMsS0FMSCxDQUtTLGlCQUxULEVBTUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO01BSUEsTUFBQSxFQUNFO1FBQUEsTUFBQSxFQUFRO01BQVIsQ0FMRjtNQU1BLEtBQUEsRUFBTztJQU5QLENBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLFNBQUw7TUFDQSxXQUFBLEVBQWEsNEJBRGI7TUFFQSxVQUFBLEVBQVksc0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQWRKLENBa0JFLENBQUMsS0FsQkgsQ0FrQlMsaUJBbEJULEVBbUJJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEsMEJBRGI7TUFFQSxVQUFBLEVBQVksc0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQW5CSixDQXVCRSxDQUFDLEtBdkJILENBdUJTLFVBdkJULEVBd0JJO01BQUEsR0FBQSxFQUFLLEVBQUw7TUFDQSxRQUFBLEVBQVUsWUFEVjtNQUVBLFFBQUEsRUFBVTtJQUZWLENBeEJKLENBMkJFLENBQUMsS0EzQkgsQ0EyQlMsZUEzQlQsRUE0Qkk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSx3QkFEYjtNQUVBLFVBQUEsRUFBWSxvQkFGWjtNQUdBLFlBQUEsRUFBYyxVQUhkO01BSUEsS0FBQSxFQUFPO0lBSlAsQ0E1QkosQ0FpQ0UsQ0FBQyxLQWpDSCxDQWlDUyxlQWpDVCxFQWtDSTtNQUFBLEdBQUEsRUFBSyxlQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjO0lBSGQsQ0FsQ0osQ0FzQ0UsQ0FBQyxLQXRDSCxDQXNDUyxPQXRDVCxFQXVDSTtNQUFBLEdBQUEsRUFBSyxRQUFMO01BQ0EsV0FBQSxFQUFhLHFCQURiO01BRUEsS0FBQSxFQUFPO0lBRlAsQ0F2Q0osQ0EwQ0UsQ0FBQyxLQTFDSCxDQTBDUyxVQTFDVCxFQTJDSTtNQUFBLEdBQUEsRUFBSyxXQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsS0FBQSxFQUFPO0lBRlAsQ0EzQ0o7V0ErQ0Esa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsRUFBN0I7RUFqRE0sQ0FEVjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcycsXG4gICAgICAgIHVybDogJy9jb250YWN0cydcbiAgICAgICAgdGVtcGxhdGU6IFwiPHVpLXZpZXcvPlwiXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9saXN0Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgICAgcGFyYW1zOlxuICAgICAgICAgIHNlYXJjaDogJydcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIENvbnRhY3RzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnLzp0eXBlLzp2YWx1ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdtZXNzYWdlcy5saXN0JyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9saXN0Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpJ1xuICAgICAgLnN0YXRlICdtZXNzYWdlcy5zaG93JyxcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzLzppZCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgIC5zdGF0ZSAnYWJvdXQnLFxuICAgICAgICB1cmw6ICcvYWJvdXQnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vYWJvdXQuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIEFib3V0J1xuICAgICAgLnN0YXRlICdzZXR0aW5ncycsXG4gICAgICAgIHVybDogJy9zZXR0aW5ncydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9zZXR0aW5ncy5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gU2V0dGluZ3MnXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcnXG4iXX0=

(function() {
  angular.module('identifiAngular').constant('config', {
    defaultFilters: {
      type: null,
      limit: 20,
      max_distance: 0
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFFSTtJQUFBLGNBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxZQUFBLEVBQWM7SUFGZDtFQURGLENBRko7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKVxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogMjBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuIl19

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxZQUFELENBQUE7SUFDTixXQUFBOztXQUVBLFlBQVksQ0FBQyxZQUFiLENBQTBCLElBQTFCO0VBSE0sQ0FEVjs7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJGxvZ1Byb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuIl19

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label> <input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=1 infinite-scroll-disabled=true><tbody><tr ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.verified></span> <small ng-if=!(result.mostVerifiedAttributes.name||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs[0].name|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon><button class="btn btn-default mar-left15" ng-click=openShareModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openShareModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.verified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openShareModal()><span class="glyphicon glyphicon-share mar-right5"></span> Share</button> <span ng-if="identity.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0 && identity.data.trustDistance < 1000" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div class="panel panel-info" ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right btn btn-primary" data-style=zoom-out><span><span class="fa fa-edit"></span> Publish</span><span></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in received | filter:msgFilter | orderBy:\'data.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div><div ng-if="isCurrentUser && receivedFiltered.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that this account belongs to your already trusted identity.</p><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{idUrl}} size=240></qrcode></div></div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'data.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="connectionsLength || 0"></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a ng-hide="id.name === \'keyID\' || id.name === \'uuid\'" style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><identicon identity=id.attr ng-show="id.attr && (id.name === \'keyID\' || id.name === \'uuid\')" width=45></identicon><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon ipfs=ipfs identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/messages/create.partial.html','<div class="panel panel-default panel-default"><div class=panel-body><form ng-submit="createMessage($event, { type: \'post\', comment: newMessage.comment, recipient: [[\'keyID\', authentication.user.idValue]] })"><div class=form-group><textarea style="resize: vertical" ng-disabled=!authentication.user name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="What\'s on your mind?"></textarea></div><div class=row><div class=col-xs-12><button ng-disabled="!authentication.user || !newMessage.comment" type=submit class="btn btn-primary" data-style=zoom-out><span><span class="fa fa-edit"></span> Publish</span><span></span></button></div></div></form></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.name, value: viewpoint.val })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint.identity border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.val></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'post\') }" ng-click="setFilters({ type: \'post\' })"><a><span class="fa fa-pencil"></span> Post</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div ng-if=!authentication.user class=jumbotron><div class=align-center><h1>Social networking freedom</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-download fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-download"></i> Everything is stored on users\' devices &mdash; no corporate gatekeepers.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Filter all content using your web of trust.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div ng-if=!authentication.user class=mar-top25-xs></div><div id=messages class=row><div class=col-md-4><div class="hidden-xs hidden-sm" ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/getstarted.partial.html\'"></div><div ng-include="\'app/messages/create.partial.html\'"></div><div class="visible-xs visible-sm" ng-include="\'app/messages/filters.partial.html\'"></div><div infinite-scroll=find() infinite-scroll-distance=1 infinite-scroll-disabled=true><message ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'data.timestamp\' : true as filteredMsgs" ipfs=ipfs msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div class="alert alert-info text-center" ng-if=!filteredMsgs.length>No messages yet</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section><div class="col-md-8 col-md-offset-2 msg-col"><message ipfs=ipfs show-recipient=true msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by <span ng-show=message.verifiedByAttr><identicon identity=message.verifiedByAttr class=mar-right5 border=3 width=35></identicon></span>which is associated with <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.primaryName></span></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><!-- <div class="mar-top15 mar-bot10"><button ng-click="messageModal.close()" class="btn btn-default">Close</button></div> --></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Identifi</h3><p class=lead>Identifi is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><h4>Public messaging</h4><p>It\'s a bit like Tw****r.</p><h4>Web of trust</h4><p>You can create new Identifi accounts (technically: cryptographic keypairs) at will, without asking for anyone\'s permission, but only the users whose <b>web of trust</b> upvoted your account will see its posts.</p><p>When you upvote someone, they become your 1st degree contact. The accounts they upvoted become 2nd degree contacts. Then there are 3rd degree contacts and so on. This is the web of trust, which can be used to filter all content on Identifi. Hiding users by downvoting is also possible.</p><p><b>This way we can avoid spam and other unwanted content without giving power to central moderators.</b></p><p>You can also add to your contacts list and rate people and organizations who are not yet on Identifi.</p><p>A decentralized web of trust, unlike certain big brother systems, could be a strong positive social force as envisioned in the blog post <a href=https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f>Learning to Trust Strangers</a>.</p><h4>Identity verifications</h4><p>Keep your contact details up-to-date and ask for verifications from peers or specialized verifiers trusted by your WoT. Use your Identifi account for online authentication or identification on services that support it.</p><p>If you lose access to your account (keypair), just create a new one and link it to your existing identity by asking for verifications from your web of trust.</p><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>everything you post on Identifi is public</b>.</p><p>Private chat between users will probably be implemented at some point, and other user permissions and groups maybe later.</p><h4>Technology</h4><p>Identifi uses <a href=https://gun.eco>GUN</a> for indexing and <a href=https://ipfs.io>IPFS</a> for messages, images and other static data.</p><p>Identifi is free and open source software. The project is in alpha development stage. <b>Contributions welcome!</b></p><ul><li><a href=https://github.com/identifi/identifi>Source code</a></li><li><a href=https://cdn.rawgit.com/identifi/identifi-lib/b979abf6/example/browser.html>Technical description of Identifi with live code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a> (<a href="https://github.com/identifi/identifi-angular/blob/master/dist.crx?raw=true">mirror</a>) - use Identifi offline. In the future, can be used to sign in to websites.</li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class=form-inline ng-submit=createUser(newUserName)><div class=form-group><label for=newUserName class=mar-right5>Get started</label> <input autofocus focus-on=newUser style=min-width:200px type=text id=newUserName class=form-control ng-model=newUserName placeholder="Your name is all you need"></div><i class="hidden-xs mar-right5"></i> <button type=submit class="btn btn-primary" ng-disabled=!newUserName>Create user</button> <i class="mar-left15 hidden-xs"></i> <i class="mar-top5 visible-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote this Identifi distribution\'s <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">default address book</a></b> as a starting point.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click=copyToClipboard(authentication.user.url) class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=240></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value="Create user" class="btn btn-primary" ng-disabled=!newUserName></form><br><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/settings.html','<div class=container><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click=copyToClipboard(privateKey|json)>Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button></p></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>Identifi indexing settings</div><div class=panel-body><p><pre ng-bind=identifiIndex.options|json></pre></p></div></div><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Identifi</a></p></div></div></div></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification, \'panel-default\':$ctrl.msgData.isPost}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon ipfs=$ctrl.ipfs identity="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo) || $ctrl.msgData.author" class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><span ng-show=!$ctrl.msgData.sameAuthorAndRecipient><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" class=id-link><identicon ng-if=$ctrl.showRecipient ipfs=$ctrl.ipfs identity=$ctrl.msgData.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]"></span> </a></span>- <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfsUri || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);