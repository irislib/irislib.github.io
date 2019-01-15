(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule', 'angular-clipboard', 'monospaced.qrcode', 'ngFileUpload']);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsRUFFcUQsbUJBRnJELEVBR0EsbUJBSEEsRUFHcUIsY0FIckIsQ0FERjs7RUFNQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUNuRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsa0JBQUEsQ0FBbUIsS0FBbkIsQ0FBbkI7TUFERjtJQURtRCxDQUFGO0dBQW5EOztFQUlBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxvQkFBekMsRUFBK0Q7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUMvRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsS0FBbkI7TUFERjtJQUQrRCxDQUFGO0dBQS9EOztFQUtBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxXQUF6QyxFQUFzRCxRQUFBLENBQUMsSUFBRCxDQUFBO1dBQ3BELFFBQUEsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFBO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxRQUFBLENBQUEsQ0FBQTtXQUNsRCxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ0UsVUFBQSxDQUFBLEVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXRCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJ11cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnZXNjYXBlJywgWyAtPlxuICAoaW5wdXQpIC0+XG4gICAgZW5jb2RlVVJJQ29tcG9uZW50IGVuY29kZVVSSUNvbXBvbmVudChpbnB1dClcbiBdXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlbmNvZGVVUklDb21wb25lbnQnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgaW5wdXRcbiBdXG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2hpZ2hsaWdodCcsICgkc2NlKSAtPlxuICAodGV4dCwgcGhyYXNlKSAtPlxuICAgIGlmIHR5cGVvZiB0ZXh0ID09ICdzdHJpbmcnIGFuZCBwaHJhc2VcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBwaHJhc2UgKyAnKScsICdnaScpLCAnPGI+JDE8L2I+JylcbiAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sIHRleHQudG9TdHJpbmcoKVxuICAgIHJldHVybiB0ZXh0XG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ29yZGluYWwnLCAtPlxuICAoaW5wdXQpIC0+XG4gICAgcyA9IFtcbiAgICAgICd0aCdcbiAgICAgICdzdCdcbiAgICAgICduZCdcbiAgICAgICdyZCdcbiAgICBdXG4gICAgdiA9IGlucHV0ICUgMTAwXG4gICAgaW5wdXQgKyAoc1sodiAtIDIwKSAlIDEwXSBvciBzW3ZdIG9yIHNbMF0pXG4iXX0=

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
  var hasProp = {}.hasOwnProperty;

  // Messages controller
  angular.module('identifiAngular').controller('MessagesController', [
    '$scope',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    // 'Authentication'
    'Messages',
    'config',
    '$timeout',
    'localStorageService',
    function($scope,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    Messages,
    config,
    $timeout,
    localStorageService) { //, Authentication
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.filters.type = 'rating';
      $scope.resetMsgs = function() {
        var msgs,
    prop,
    value;
        msgs = {};
        return $scope.msgs = {
          loading: false,
          finished: false,
          list: (function() {
            var results;
            results = [];
            for (prop in msgs) {
              if (!hasProp.call(msgs, prop)) continue;
              value = msgs[prop];
              results.push(value);
            }
            return results;
          })()
        };
      };
      $scope.resetMsgs();
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
      $scope.find = function() {
        var cursor;
        if ($scope.msgs.loading) {
          return;
        }
        $scope.msgs.loading = true;
        // Get latest messages from ipfs index
        if ($scope.msgs.list.length) {
          cursor = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey;
        }
        return $scope.identifiIndex.getMessagesByTimestamp($scope.filters.limit,
    cursor).then(function(messages) {
          $scope.processMessages(messages);
          Array.prototype.push.apply($scope.msgs.list,
    messages);
          if (messages.length < $scope.filters.limit - 1) { // bug
            $scope.$apply(function() {
              return $scope.msgs.finished = true;
            });
          }
          return $scope.$apply(function() {
            return $scope.msgs.loading = false;
          });
        });
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters,
    filters);
        $scope.resetMsgs();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          processResponse = function() {
            $scope.processMessages([$scope.message],
    {},
    true);
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyID = $scope.message.getSignerKeyID();
            return $scope.message.verifiedBy = $scope.identifiIndex.get($scope.message.signerKeyID,
    'keyID');
          };
          return $scope.$watch('apiReady',
    function(isReady) {
            if (isReady) {
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
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUEsMkJBQUE7OztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUU7SUFFakUsWUFGaUU7SUFHakUsU0FIaUU7SUFJakUsY0FKaUU7SUFLakUsV0FMaUU7SUFNakUsT0FOaUU7O0lBUWpFLFVBUmlFO0lBU2pFLFFBVGlFO0lBVWpFLFVBVmlFO0lBV2pFLHFCQVhpRTtJQVlqRSxRQUFBLENBQUMsTUFBRDtJQUFTLFVBQVQ7SUFBcUIsT0FBckI7SUFBOEIsWUFBOUI7SUFBNEMsU0FBNUM7SUFBdUQsS0FBdkQ7SUFBOEQsUUFBOUQ7SUFBd0UsTUFBeEU7SUFBZ0YsUUFBaEY7SUFBMEYsbUJBQTFGLENBQUEsRUFBQTtNQUNFLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFFOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFmLEdBQXNCO01BRXRCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQSxDQUFBO0FBQ2pCLFlBQUEsSUFBQTtJQUFBLElBQUE7SUFBQTtRQUFBLElBQUEsR0FBTyxDQUFBO2VBQ1AsTUFBTSxDQUFDLElBQVAsR0FDRTtVQUFBLE9BQUEsRUFBUyxLQUFUO1VBQ0EsUUFBQSxFQUFVLEtBRFY7VUFFQSxJQUFBOztBQUFhO1lBQUEsS0FBQSxZQUFBOzs7MkJBQU47WUFBTSxDQUFBOzs7UUFGYjtNQUhlO01BTW5CLE1BQU0sQ0FBQyxTQUFQLENBQUE7TUFFQSxNQUFNLENBQUMsU0FBUCxHQUFtQixRQUFBLENBQUMsTUFBRCxDQUFBO2VBQ2pCLElBQUksS0FBSixD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bGxlclxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01lc3NhZ2VzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnTWVzc2FnZXMnXG4gICdjb25maWcnXG4gICckdGltZW91dCdcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgTWVzc2FnZXMsIGNvbmZpZywgJHRpbWVvdXQsIGxvY2FsU3RvcmFnZVNlcnZpY2UpIC0+ICMsIEF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcblxuICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSAncmF0aW5nJ1xuXG4gICAgJHNjb3BlLnJlc2V0TXNncyA9IC0+XG4gICAgICBtc2dzID0ge31cbiAgICAgICRzY29wZS5tc2dzID1cbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgZmluaXNoZWQ6IGZhbHNlXG4gICAgICAgIGxpc3Q6ICh2YWx1ZSBmb3Igb3duIHByb3AsIHZhbHVlIG9mIG1zZ3MpXG4gICAgJHNjb3BlLnJlc2V0TXNncygpXG5cbiAgICAkc2NvcGUuaWNvbkNvdW50ID0gKHJhdGluZykgLT5cbiAgICAgIG5ldyBBcnJheShNYXRoLm1heCgxLCBNYXRoLmFicyhyYXRpbmcpKSlcblxuICAgICRzY29wZS5pY29uU3R5bGUgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ25ldXRyYWwnXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdwb3NpdGl2ZSdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnbmVnYXRpdmUnXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5pY29uQ2xhc3MgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi1xdWVzdGlvbi1zaWduJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy11cCdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy1kb3duJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG5cbiAgICAkc2NvcGUuZmluZCA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLm1zZ3MubG9hZGluZ1xuICAgICAgJHNjb3BlLm1zZ3MubG9hZGluZyA9IHRydWVcbiAgICAgICMgR2V0IGxhdGVzdCBtZXNzYWdlcyBmcm9tIGlwZnMgaW5kZXhcbiAgICAgIGlmICRzY29wZS5tc2dzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5tc2dzLmxpc3RbJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldE1lc3NhZ2VzQnlUaW1lc3RhbXAoJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChtZXNzYWdlcykgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBtZXNzYWdlc1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUubXNncy5saXN0LCBtZXNzYWdlcylcbiAgICAgICAgaWYgbWVzc2FnZXMubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxICMgYnVnXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubXNncy5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubXNncy5sb2FkaW5nID0gZmFsc2VcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuICAgICAgJHNjb3BlLnJlc2V0TXNncygpXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgIyBGaW5kIGV4aXN0aW5nIE1lc3NhZ2VcbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICBpZiAkc3RhdGVQYXJhbXMuaWRcbiAgICAgICAgaGFzaCA9ICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBwcm9jZXNzUmVzcG9uc2UgPSAtPlxuICAgICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoWyRzY29wZS5tZXNzYWdlXSwge30sIHRydWUpXG4gICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAnTWVzc2FnZSAnICsgaGFzaFxuICAgICAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKCRzY29wZS5tZXNzYWdlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEID0gJHNjb3BlLm1lc3NhZ2UuZ2V0U2lnbmVyS2V5SUQoKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQsICdrZXlJRCcpXG5cbiAgICAgICAgJHNjb3BlLiR3YXRjaCAnYXBpUmVhZHknLCAoaXNSZWFkeSkgLT5cbiAgICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgICBpZiBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kLyAjIGxvb2tzIGxpa2UgYW4gaXBmcyBhZGRyZXNzXG4gICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGhhc2gpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgICAgICBzID0gSlNPTi5wYXJzZShyZXMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAnbXNnIGZyb20gaXBmcycsIHJlcywgc1xuICAgICAgICAgICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tU2lnKHMpLnRoZW4gKHIpIC0+XG4gICAgICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlLmlwZnNVcmkgPSBoYXNoXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzUmVzcG9uc2UoKVxuICAgICAgICAgICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgZVxuXG4gICAgcmV0dXJuXG5dXG4iXX0=

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
    $q,
    focus) { // Authentication, Menus, Persona
      var privateKey,
    scrollTo,
    setIndex;
      if ($window.location.protocol === "https:") {
        $scope.gun = new Gun(['https://identifi.herokuapp.com/gun',
    'https://identifi2.herokuapp.com/gun']);
      } else {
        $scope.gun = new Gun(['http://localhost:8765/gun',
    'https://identifi.herokuapp.com/gun',
    'https://identifi2.herokuapp.com/gun']);
      }
      console.log($scope.gun['_'].opt.peers);
      // set authentication
      $scope.authentication = {}; // Authentication
      $scope.getIdKey = function(id) {
        if (Array.isArray(id)) {
          return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1]);
        } else {
          return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val);
        }
      };
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
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
      $scope.searchRequest = null;
      $scope.search = function(query,
    limit) {
        var cursor,
    searchKey;
        $scope.ids.loading = true;
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        $scope.searchKey = searchKey;
        if (searchKey !== $scope.previousSearchKey) {
          $scope.ids.list = [];
          $scope.ids.finished = false;
        }
        $scope.previousSearchKey = searchKey;
        limit = limit || 30;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        $scope.searchRequest = $scope.identifiIndex.search(searchKey,
    void 0,
    limit,
    cursor).then(function(identities) {
          return {identities,
    searchKey};
        });
        $scope.searchRequest = $scope.searchRequest.then(function(res) {
          var identities;
          if (res.searchKey !== $scope.searchKey) {
            return;
          }
          identities = res.identities;
          console.log(identities);
          if (limit) {
            identities.splice(limit);
          }
          identities.forEach(function(i) {
            i.gun.on(function(data) {
              i.data = data;
              return i.gun.get('linkTo').once(function(linkTo) {
                return $scope.$apply(function() {
                  return i.linkTo = linkTo;
                });
              });
            });
            return $scope.setIdentityNames(i,
    true);
          });
          searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
          if (searchKey !== $scope.previousSearchKey) { // search key changed
            return;
          }
          $scope.ids.list = $scope.ids.list || [];
          if (identities.length < limit) {
            $scope.ids.finished = true;
          }
          if (identities.length && $scope.ids.list.length && $scope.getIdKey(identities[0].linkTo) === $scope.getIdKey($scope.ids.list[$scope.ids.list.length - 1].linkTo)) {
            identities.shift(); // Prevent duplicate
          }
          $scope.ids.list = $scope.ids.list.concat(identities);
          if (identities.length > 0 && $scope.ids.list.length === identities.length) {
            $scope.ids.activeKey = 0;
            $scope.ids.list[0].active = true;
          } else {
            $scope.ids.activeKey = -1;
          }
          $scope.$apply(function() {
            return $scope.ids.loading = false;
          });
          return $scope.ids.list;
        });
        return $scope.searchRequest;
      };
      setIndex = function(results) {
        $scope.identifiIndex = results;
        console.log('Got index',
    $scope.identifiIndex);
        $scope.identifiIndex.gun.get('identitiesByTrustDistance').once(function() {
          return $scope.identifiIndex.getViewpoint().then(function(vp) {
            console.log('got viewpoint',
    vp);
            $scope.viewpoint = vp;
            $scope.viewpoint.gun.get('linkTo').open(function(linkTo) {
              return $scope.viewpoint.linkTo = linkTo;
            });
            return $scope.viewpoint.gun.get('attrs').open(function(attrs) {
              $scope.viewpoint.attrs = attrs;
              return $scope.viewpoint.mostVerifiedAttributes = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
            });
          });
        });
        return $scope.identifiIndex.gun.get('identitiesBySearchKey').once(function() {
          $scope.apiReady = true;
          if ($scope.query.term !== '') {
            $scope.query.term = '';
          }
          $scope.ids.list = [];
          $scope.ids.finished = false;
          return $scope.search();
        });
      };
      $scope.defaultIndexKeyID = '_D8nRhjFgAGo8frfJHMi4H7M7fTMB2LJshgeKyLaL1Y.9uNU0eQO-1ThgA9fJXFFN3yYbk9SNewC2Pz4mvQvGUE';
      $scope.loadDefaultIndex = function() {
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
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        keyID = $window.identifiLib.Key.getId($scope.privateKey);
        return $window.identifiLib.Index.create($scope.gun,
    $scope.privateKey).then(function(i) {
          return setIndex(i).then(function() {
            return $scope.authentication.identity = $scope.identifiIndex.get(keyID,
    'keyID');
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
      $scope.newMessage = {
        rating: 1,
        comment: ''
      };
      $scope.newVerification = {
        type: '',
        value: ''
      };
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
        } else {
          message = $window.identifiLib.Message.createVerification(params,
    $scope.privateKey);
        }
        options = {};
        return message.then(function(m) {
          console.log(m);
          $scope.identifiIndex.addMessage(m,
    $scope.ipfs);
          return $scope.filters.type = 'rating';
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
          return $scope.identifiIndex.addMessage(msg,
    $scope.ipfs);
        }).then(function() {
          return $scope.search();
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
        return $scope.loadDefaultIndex();
      };
      $scope.msgFilter = function(value,
    index,
    array) {
        var data,
    neutralRating;
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
      $scope.logoClicked = function() {
        focus('searchFocus');
        if ($state.is('identities.list')) {
          if ($scope.query.term !== '') {
            $scope.query.term = '';
            return $scope.search();
          }
        } else {
          $scope.query.term = '';
          $scope.ids.list = [];
          $scope.ids.finished = false;
          return $state.go('identities.list');
        }
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
    msgOptions,
    findRecipient) {
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
          if (findRecipient) {
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
          }
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
              index = config.uniqueAttributeTypes.indexOf(msg.data.author[i][0]);
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
              index = config.uniqueAttributeTypes.indexOf(msg.data.recipient[i][0]);
              if (index > -1 && index < smallestIndex) {
                smallestIndex = index;
                msg.linkToRecipient = msg.data.recipient[i];
              } else if (!msg.recipient_name && ((ref1 = msg.data.recipient[i][0]) === 'name' || ref1 === 'nickname')) {
                msg.recipient_name = msg.data.recipient[i][1];
              }
              i++;
            }
            signedData = msg.data;
            alpha = void 0;
            msg.iconStyle = '';
            msg.hasSuccess = '';
            msg.bgColor = '';
            msg.iconCount = new Array(1);
            switch (signedData.type) {
              case 'verify_identity':
              case 'verification':
                msg.iconStyle = 'glyphicon glyphicon-ok-sign';
                msg.hasSuccess = 'has-success';
                return msg.isVerification = true;
              case 'unverify_identity':
              case 'unverification':
                msg.iconStyle = 'glyphicon glyphicon-remove negative';
                msg.hasSuccess = 'has-error';
                msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
                return msg.isUnverification = true;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxXQUg2RDtJQUk3RCxPQUo2RDtJQUs3RCxRQUw2RDtJQU03RCxRQU42RDtJQU83RCxxQkFQNkQ7SUFRN0QsV0FSNkQ7SUFTN0QsV0FUNkQ7SUFVN0QsU0FWNkQ7SUFXN0QsSUFYNkQ7SUFZN0QsT0FaNkQ7Ozs7SUFpQjdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELEVBRHBEO0lBQ3dELEtBRHhELENBQUEsRUFBQTtBQUVFLFVBQUEsVUFBQTtJQUFBLFFBQUE7SUFBQTtNQUFBLElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFqQixLQUE2QixRQUFoQztRQUNFLE1BQU0sQ0FBQyxHQUFQLEdBQWEsSUFBSSxHQUFKLENBQVEsQ0FBQyxvQ0FBRDtJQUF1QyxxQ0FBdkMsQ0FBUixFQURmO09BQUEsTUFBQTtRQUdFLE1BQU0sQ0FBQyxHQUFQLEdBQWEsSUFBSSxHQUFKLENBQVEsQ0FBQywyQkFBRDtJQUE4QixvQ0FBOUI7SUFBb0UscUNBQXBFLENBQVIsRUFIZjs7TUFLQSxPQUFPLENBQUMsR0FBUixDQUFZLE1BQU0sQ0FBQyxHQUFJLENBQUEsR0FBQSxDQUFJLENBQUMsR0FBRyxDQUFDLEtBQWhDLEVBTEE7O01BT0EsTUFBTSxDQUFDLGNBQVAsR0FBd0IsQ0FBQSxFQVB4QjtNQVNBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLFFBQUEsQ0FB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QyxDQUF1QyxRQUFBLENBQUEsQ0FBQTtpQkFDckMsTUFBTSxDQUFDLGVBQVAsQ0FBQTtRQURxQyxDQUF2QztNQURzQjtJQXZpQjFCLENBakI2RDtHQUEvRDtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICdjb25maWcnLFxuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJ2NsaXBib2FyZCdcbiAgJyR1aWJNb2RhbCdcbiAgJyR3aW5kb3cnXG4gICckcSdcbiAgJ2ZvY3VzJ1xuXG4gICMnQXV0aGVudGljYXRpb24nXG4gICMnTWVudXMnXG4gICMnUGVyc29uYSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGNsaXBib2FyZCwgJHVpYk1vZGFsLCAkd2luZG93LCAkcSwgZm9jdXMpIC0+ICMgQXV0aGVudGljYXRpb24sIE1lbnVzLCBQZXJzb25hXG4gICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PSBcImh0dHBzOlwiXG4gICAgICAkc2NvcGUuZ3VuID0gbmV3IEd1bihbJ2h0dHBzOi8vaWRlbnRpZmkuaGVyb2t1YXBwLmNvbS9ndW4nLCAnaHR0cHM6Ly9pZGVudGlmaTIuaGVyb2t1YXBwLmNvbS9ndW4nXSlcbiAgICBlbHNlXG4gICAgICAkc2NvcGUuZ3VuID0gbmV3IEd1bihbJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc2NS9ndW4nLCAnaHR0cHM6Ly9pZGVudGlmaS5oZXJva3VhcHAuY29tL2d1bicsICdodHRwczovL2lkZW50aWZpMi5oZXJva3VhcHAuY29tL2d1biddKVxuXG4gICAgY29uc29sZS5sb2cgJHNjb3BlLmd1blsnXyddLm9wdC5wZWVyc1xuICAgICMgc2V0IGF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge30gIyBBdXRoZW50aWNhdGlvblxuXG4gICAgJHNjb3BlLmdldElkS2V5ID0gKGlkKSAtPlxuICAgICAgaWYgQXJyYXkuaXNBcnJheShpZClcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZFswXSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWRbMV0pXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWQubmFtZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudmFsKVxuXG4gICAgJHNjb3BlLnF1ZXJ5ID0ge31cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gJydcbiAgICAkc2NvcGUuaWRzID0geyBsaXN0OiBbXSB9XG4gICAgJHNjb3BlLnBob25lUmVnZXggPSAvXlxcKz9cXGQrJC9cblxuICAgICRzY29wZS5pcGZzID0gbmV3IElwZnMoXG4gICAgICBpbml0OiB0cnVlXG4gICAgICBzdGFydDogdHJ1ZVxuICAgICAgcmVwbzogJ2lwZnM3LWlkZW50aWZpJ1xuICAgIClcblxuICAgICRzY29wZS5jYXBpdGFsaXplV29yZHMgPSAocykgLT5cbiAgICAgIGlmIHMgYW5kIHMubGVuZ3RoXG4gICAgICAgIHJldHVybiAocy5zcGxpdCgnICcpLm1hcCAod29yZCkgLT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZFsxLi4tMV0udG9Mb3dlckNhc2UoKSkuam9pbiAnICdcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIHNcblxuICAgICRzY29wZS5jb3B5VG9DbGlwYm9hcmQgPSAodGV4dCkgLT5cbiAgICAgIGNsaXBib2FyZC5jb3B5VGV4dCB0ZXh0XG5cbiAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9IG51bGxcbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgICRzY29wZS5pZHMubG9hZGluZyA9IHRydWVcbiAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAkc2NvcGUuc2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5XG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBsaW1pdCA9IGxpbWl0IG9yIDMwXG4gICAgICBjdXJzb3IgPSBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmlkcy5saXN0Lmxlbmd0aFxuICAgICAgICBjdXJzb3IgPSAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCAtIDFdLmN1cnNvclxuICAgICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5zZWFyY2goc2VhcmNoS2V5LCB1bmRlZmluZWQsIGxpbWl0LCBjdXJzb3IpXG4gICAgICAudGhlbiAoaWRlbnRpdGllcykgLT4ge2lkZW50aXRpZXMsIHNlYXJjaEtleX1cbiAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLnNlYXJjaFJlcXVlc3QudGhlbiAocmVzKSAtPlxuICAgICAgICByZXR1cm4gaWYgcmVzLnNlYXJjaEtleSAhPSAkc2NvcGUuc2VhcmNoS2V5XG4gICAgICAgIGlkZW50aXRpZXMgPSByZXMuaWRlbnRpdGllc1xuICAgICAgICBjb25zb2xlLmxvZyBpZGVudGl0aWVzXG4gICAgICAgIGlkZW50aXRpZXMuc3BsaWNlKGxpbWl0KSBpZiBsaW1pdFxuICAgICAgICBpZGVudGl0aWVzLmZvckVhY2ggKGkpIC0+XG4gICAgICAgICAgaS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICAgICBpLmRhdGEgPSBkYXRhXG4gICAgICAgICAgICBpLmd1bi5nZXQoJ2xpbmtUbycpLm9uY2UgKGxpbmtUbykgLT5cbiAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgIGkubGlua1RvID0gbGlua1RvXG4gICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoaSwgdHJ1ZSlcbiAgICAgICAgc2VhcmNoS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KChxdWVyeSBvciAkc2NvcGUucXVlcnkudGVybSBvciAnJykudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgaWYgc2VhcmNoS2V5ICE9ICRzY29wZS5wcmV2aW91c1NlYXJjaEtleVxuICAgICAgICAgIHJldHVybiAjIHNlYXJjaCBrZXkgY2hhbmdlZFxuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSAkc2NvcGUuaWRzLmxpc3Qgb3IgW11cbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPCBsaW1pdFxuICAgICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoICYmICRzY29wZS5pZHMubGlzdC5sZW5ndGggJiZcbiAgICAgICAgJHNjb3BlLmdldElkS2V5KGlkZW50aXRpZXNbMF0ubGlua1RvKSA9PSAkc2NvcGUuZ2V0SWRLZXkoJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMubGlzdC5sZW5ndGggLSAxXS5saW5rVG8pXG4gICAgICAgICAgaWRlbnRpdGllcy5zaGlmdCgpICMgUHJldmVudCBkdXBsaWNhdGVcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gJHNjb3BlLmlkcy5saXN0LmNvbmNhdChpZGVudGl0aWVzKVxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCA+IDAgJiYgJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCA9PSBpZGVudGl0aWVzLmxlbmd0aFxuICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5ID0gMFxuICAgICAgICAgICRzY29wZS5pZHMubGlzdFswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IC0xXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLmlkcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0XG4gICAgICByZXR1cm4gJHNjb3BlLnNlYXJjaFJlcXVlc3RcblxuICAgIHNldEluZGV4ID0gKHJlc3VsdHMpIC0+XG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleCA9IHJlc3VsdHNcbiAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ3VuLmdldCgnaWRlbnRpdGllc0J5VHJ1c3REaXN0YW5jZScpLm9uY2UgLT5cbiAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0Vmlld3BvaW50KCkudGhlbiAodnApIC0+XG4gICAgICAgICAgY29uc29sZS5sb2cgJ2dvdCB2aWV3cG9pbnQnLCB2cFxuICAgICAgICAgICRzY29wZS52aWV3cG9pbnQgPSB2cFxuICAgICAgICAgICRzY29wZS52aWV3cG9pbnQuZ3VuLmdldCgnbGlua1RvJykub3BlbiAobGlua1RvKSAtPlxuICAgICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5saW5rVG8gPSBsaW5rVG9cbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICAgICAkc2NvcGUudmlld3BvaW50LmF0dHJzID0gYXR0cnNcbiAgICAgICAgICAgICRzY29wZS52aWV3cG9pbnQubW9zdFZlcmlmaWVkQXR0cmlidXRlcyA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4Lmd1bi5nZXQoJ2lkZW50aXRpZXNCeVNlYXJjaEtleScpLm9uY2UgLT5cbiAgICAgICAgJHNjb3BlLmFwaVJlYWR5ID0gdHJ1ZVxuICAgICAgICBpZiAkc2NvcGUucXVlcnkudGVybSAhPSAnJ1xuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzY29wZS5zZWFyY2goKVxuXG4gICAgJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEID0gJ19EOG5SaGpGZ0FHbzhmcmZKSE1pNEg3TTdmVE1CMkxKc2hnZUt5TGFMMVkuOXVOVTBlUU8tMVRoZ0E5ZkpYRkZOM3lZYms5U05ld0MyUHo0bXZRdkdVRSdcbiAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCA9IC0+XG4gICAgICBzZXRJbmRleCBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5JbmRleCgkc2NvcGUuZ3VuLnVzZXIoJHNjb3BlLmRlZmF1bHRJbmRleEtleUlEKS5nZXQoJ2lkZW50aWZpJykpXG5cbiAgICAkc2NvcGUubG9naW5XaXRoS2V5ID0gKHByaXZhdGVLZXlTZXJpYWxpemVkKSAtPlxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSAkd2luZG93LmlkZW50aWZpTGliLktleS5mcm9tSndrKHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2lkZW50aWZpS2V5JywgcHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9XG4gICAgICAgIGlkVHlwZTogJ2tleUlEJ1xuICAgICAgICBpZFZhbHVlOiAkd2luZG93LmlkZW50aWZpTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKCkgaWYgJHNjb3BlLmxvZ2luTW9kYWxcbiAgICAgIGtleUlEID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkd2luZG93LmlkZW50aWZpTGliLkluZGV4LmNyZWF0ZSgkc2NvcGUuZ3VuLCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAoaSkgLT5cbiAgICAgICAgc2V0SW5kZXgoaSkudGhlbiAtPlxuICAgICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldChrZXlJRCwgJ2tleUlEJylcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcbiAgICBlbHNlXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG5cbiAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzID0gKCkgLT5cbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLnBlZXJzIChlcnIsIHBlZXJJbmZvcykgLT5cbiAgICAgICAgaWYgZXJyXG4gICAgICAgICAgY29uc29sZS5lcnJvciAnZmFpbGVkIHRvIGZldGNoIGlwZnMgcGVlcnMnLCBlcnJcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICRzY29wZS5pcGZzUGVlcnMgPSBwZWVySW5mb3NcblxuICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAkc2NvcGUuaXBmc1JlYWR5ID0gdHJ1ZVxuICAgICAgJHdpbmRvdy5pcGZzID0gJHNjb3BlLmlwZnNcbiAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuICAgICAgc2V0SW50ZXJ2YWwgJHNjb3BlLnVwZGF0ZUlwZnNQZWVycywgNTAwMFxuXG4gICAgJHNjb3BlLnNldFBhZ2VUaXRsZSA9ICh0aXRsZSkgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJ0lkZW50aWZpJ1xuICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSArPSAnIC0gJyArIHRpdGxlXG5cbiAgICAkc2NvcGUuaXBmc0dldCA9ICh1cmksIGdldEpzb24pIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUpIC0+XG4gICAgICAgIGdvID0gLT5cbiAgICAgICAgICAkc2NvcGUuaXBmcy5maWxlcy5jYXQodXJpKS50aGVuIChmaWxlKSAtPlxuICAgICAgICAgICAgZmlsZSA9ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihmaWxlKVxuICAgICAgICAgICAgaWYgZ2V0SnNvblxuICAgICAgICAgICAgICBmaWxlID0gSlNPTi5wYXJzZShmaWxlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICByZXNvbHZlIGZpbGVcblxuICAgICAgICBpZiAkc2NvcGUuaXBmc1JlYWR5XG4gICAgICAgICAgZ28oKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgICAgICAgIGdvKClcblxuICAgICRzY29wZS5uZXdNZXNzYWdlID1cbiAgICAgIHJhdGluZzogMVxuICAgICAgY29tbWVudDogJydcbiAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJydcbiAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZVxuICAgICRzY29wZS5jcmVhdGVNZXNzYWdlID0gKGV2ZW50LCBwYXJhbXMsIGlkKSAtPlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlIG9iamVjdFxuICAgICAgbWVzc2FnZSA9IG51bGxcbiAgICAgIGlmIHBhcmFtcy50eXBlID09ICdyYXRpbmcnXG4gICAgICAgIHBhcmFtcy5tYXhSYXRpbmcgfD0gM1xuICAgICAgICBwYXJhbXMubWluUmF0aW5nIHw9IC0zXG4gICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlUmF0aW5nKHBhcmFtcywgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICBlbHNlXG4gICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHBhcmFtcywgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICBvcHRpb25zID0ge31cblxuICAgICAgbWVzc2FnZS50aGVuIChtKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBtXG4gICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmFkZE1lc3NhZ2UobSwgJHNjb3BlLmlwZnMpXG4gICAgICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSAncmF0aW5nJ1xuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICRzY29wZS5lcnJvciA9IGVcblxuICAgICRzY29wZS5hZGRBdHRyaWJ1dGUgPSAtPlxuICAgICAgJGxvY2F0aW9uLnBhdGggJyMvaWRlbnRpdGllcy9jcmVhdGUvJyArICRzY29wZS5xdWVyeS50ZXJtXG5cbiAgICAkc2NvcGUubG9naW4gPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gLTEgIyBiZWNhdXNlIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBhIHRydXN0IGluZGV4IHlldFxuXG4gICAgJHNjb3BlLm9wZW5Mb2dpbk1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dpbk1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9naW4ubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAgIGZvY3VzKCduZXdVc2VyJylcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCA9IChjYWxsYmFjaywgbW9kYWxCdXR0b25UZXh0LCBzcXVhcmlmeSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRNb2RhbENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICRzY29wZS5tb2RhbEJ1dHRvblRleHQgPSBtb2RhbEJ1dHRvblRleHQgb3IgJ1VwbG9hZCdcbiAgICAgICRzY29wZS5zcXVhcmlmeSA9IHNxdWFyaWZ5XG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy91cGxvYWQubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcblxuICAgICRzY29wZS51cGxvYWRGaWxlID0gKGJsb2IpIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ3VwbG9hZGluZycsIGJsb2JcbiAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQpIC0+XG4gICAgICAgICAgYnVmZmVyID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyLmZyb20oZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICBjb25zb2xlLmxvZyAnYnVmZmVyJywgYnVmZmVyXG4gICAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuYWRkIGJ1ZmZlciwgKGVyciwgZmlsZXMpIC0+XG4gICAgICAgICAgICBpZiBlcnJcbiAgICAgICAgICAgICAgcmVqZWN0KCdhZGRpbmcgdG8gaXBmcyBmYWlsZWQnLCBlcnIpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nICdkb25lOicsIGVyciwgZmlsZXNcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXG4gICAgJHNjb3BlLmNyZWF0ZVVzZXIgPSAobmFtZSkgLT5cbiAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmdlbmVyYXRlKClcbiAgICAgIC50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5XG4gICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LnRvSndrKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICAkc2NvcGUubG9naW5XaXRoS2V5KCRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZClcbiAgICAgIC50aGVuIC0+XG4gICAgICAgIHJlY2lwaWVudCA9IFtbJ2tleUlEJywgJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXSwgWyduYW1lJywgbmFtZV1dXG4gICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgLnRoZW4gKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtc2csICRzY29wZS5pcGZzKVxuICAgICAgLnRoZW4gLT5cbiAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG5cbiAgICAkc2NvcGUuZ2VuZXJhdGVLZXkgPSAtPlxuICAgICAgJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2VuZXJhdGUoKS50aGVuIChrZXkpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAgIGNvbnNvbGUubG9nICRzY29wZS5wcml2YXRlS2V5XG4gICAgICAgICAgJHNjb3BlLnByaXZhdGVLZXlTZXJpYWxpemVkID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkudG9Kd2soJHNjb3BlLnByaXZhdGVLZXkpXG5cbiAgICAkc2NvcGUuZG93bmxvYWRUZXh0ID0gKHRleHQpIC0+XG4gICAgICBoaWRkZW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBoaWRkZW5FbGVtZW50LmhyZWYgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUkkodGV4dClcbiAgICAgIGhpZGRlbkVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgIGhpZGRlbkVsZW1lbnQuZG93bmxvYWQgPSAnaWRlbnRpZmlfcHJpdmF0ZV9rZXkudHh0J1xuICAgICAgaGlkZGVuRWxlbWVudC5jbGljaygpXG5cbiAgICAkc2NvcGUub3BlbkxvZ291dE1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbCA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2xvZ291dC5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgICRzY29wZS5sb2dvdXRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUuY2xvc2VMb2dvdXRNb2RhbCA9IC0+XG4gICAgICAkc2NvcGUubG9nb3V0TW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLmxvZ291dE1vZGFsLmNsb3NlKClcbiAgICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4KClcblxuICAgICRzY29wZS5tc2dGaWx0ZXIgPSAodmFsdWUsIGluZGV4LCBhcnJheSkgLT5cbiAgICAgIGRhdGEgPSB2YWx1ZS5kYXRhIG9yIHZhbHVlLnNpZ25lZERhdGFcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZS5tYXRjaCAvXnJhdGluZy9cbiAgICAgICAgICBpZiBkYXRhLnR5cGUgIT0gJ3JhdGluZydcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAoZGF0YS5tYXhSYXRpbmcgKyBkYXRhLm1pblJhdGluZykgLyAyXG4gICAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOnBvc2l0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPD0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmVnYXRpdmUnIGFuZCBkYXRhLnJhdGluZyA+PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZXV0cmFsJyBhbmQgZGF0YS5yYXRpbmcgIT0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgaWYgZGF0YS50eXBlICE9ICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPT0gMCBhbmQgdHlwZW9mIHZhbHVlLmF1dGhvclRydXN0RGlzdGFuY2UgIT0gJ251bWJlcidcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPiAwIGFuZCB2YWx1ZS5hdXRob3JUcnVzdERpc3RhbmNlID4gJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgJHNjb3BlLnJlbW92ZUZvY3VzID0gKGV2ZW50KSAtPlxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5ibHVyKClcblxuICAgICRzY29wZS5sb2dvQ2xpY2tlZCA9IC0+XG4gICAgICBmb2N1cygnc2VhcmNoRm9jdXMnKVxuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICAgIGlmICRzY29wZS5xdWVyeS50ZXJtICE9ICcnXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCdcblxuICAgICRzY29wZS5zZXRNc2dSYXdEYXRhID0gKG1zZykgLT5cbiAgICAgIHNob3dSYXdEYXRhID1cbiAgICAgICAgaGFzaDogbXNnLmhhc2hcbiAgICAgICAgZGF0YTogbXNnLmRhdGFcbiAgICAgICAgcHJpb3JpdHk6IG1zZy5wcmlvcml0eVxuICAgICAgICBqd3M6IG1zZy5qd3NcbiAgICAgIG1zZy5zdHJEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2hvd1Jhd0RhdGEsIHVuZGVmaW5lZCwgMilcblxuICAgICRzY29wZS5vcGVuTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSwgc2l6ZSkgLT5cbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudCA9ICRzY29wZS5tZXNzYWdlLmdldFJlY2lwaWVudCgkc2NvcGUuaWRlbnRpZmlJbmRleClcbiAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50X25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRfbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRCA9ICRzY29wZS5tZXNzYWdlLmdldFNpZ25lcktleUlEKClcbiAgICAgICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQsICdrZXlJRCcpXG4gICAgICAkc2NvcGUubWVzc2FnZU1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUubWVzc2FnZU1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLm1lc3NhZ2VNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUuZmlsdGVycyA9ICRzY29wZS5maWx0ZXJzIG9yIGNvbmZpZy5kZWZhdWx0RmlsdGVyc1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcbiAgICAjICRzY29wZS5tZW51ID0gTWVudXMuZ2V0TWVudSgndG9wYmFyJylcblxuICAgICRzY29wZS50b2dnbGVDb2xsYXBzaWJsZU1lbnUgPSAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gISRzY29wZS5pc0NvbGxhcHNlZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucywgZmluZFJlY2lwaWVudCkgLT5cbiAgICAgIHByb2Nlc3NNZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgbXNnLmRhdGEgPSBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBtc2cuYXV0aG9yID0gbXNnLmdldEF1dGhvcigkc2NvcGUuaWRlbnRpZmlJbmRleClcbiAgICAgICAgbXNnLmF1dGhvci5ndW4uZ2V0KCd0cnVzdERpc3RhbmNlJykub24gKGQpIC0+IG1zZy5hdXRob3JUcnVzdERpc3RhbmNlID0gZFxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgaWYgZmluZFJlY2lwaWVudFxuICAgICAgICAgIG1zZy5yZWNpcGllbnQgPSBtc2cuZ2V0UmVjaXBpZW50KCRzY29wZS5pZGVudGlmaUluZGV4KVxuICAgICAgICAgIG1zZy5yZWNpcGllbnQuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChkKSAtPlxuICAgICAgICAgICAgbXZhID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGQpXG4gICAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+IG1zZy5yZWNpcGllbnRfbmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICMgVE9ETzogbWFrZSBzdXJlIG1lc3NhZ2Ugc2lnbmF0dXJlIGlzIGNoZWNrZWRcblxuICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuZGF0YS5hdXRob3JbMF1cbiAgICAgICAgICBpID0gdW5kZWZpbmVkXG4gICAgICAgICAgaSA9IDBcbiAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICAgIHdoaWxlIGkgPCBtc2cuZGF0YS5hdXRob3IubGVuZ3RoXG4gICAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLmF1dGhvcltpXVswXSlcbiAgICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5kYXRhLmF1dGhvcltpXVxuICAgICAgICAgICAgZWxzZSBpZiAhbXNnLmF1dGhvcl9uYW1lIGFuZCBtc2cuZGF0YS5hdXRob3JbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gbXNnLmRhdGEuYXV0aG9yW2ldWzFdXG4gICAgICAgICAgICBpKytcbiAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50WzBdXG4gICAgICAgICAgaSA9IDBcbiAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICAgIHdoaWxlIGkgPCBtc2cuZGF0YS5yZWNpcGllbnQubGVuZ3RoXG4gICAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLnJlY2lwaWVudFtpXVswXSlcbiAgICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVxuICAgICAgICAgICAgZWxzZSBpZiAhbXNnLnJlY2lwaWVudF9uYW1lIGFuZCBtc2cuZGF0YS5yZWNpcGllbnRbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLmRhdGEucmVjaXBpZW50W2ldWzFdXG4gICAgICAgICAgICBpKytcbiAgICAgICAgICBzaWduZWREYXRhID0gbXNnLmRhdGFcbiAgICAgICAgICBhbHBoYSA9IHVuZGVmaW5lZFxuICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnJ1xuICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJydcbiAgICAgICAgICBtc2cuYmdDb2xvciA9ICcnXG4gICAgICAgICAgbXNnLmljb25Db3VudCA9IG5ldyBBcnJheSgxKVxuICAgICAgICAgIHN3aXRjaCBzaWduZWREYXRhLnR5cGVcbiAgICAgICAgICAgIHdoZW4gJ3ZlcmlmeV9pZGVudGl0eScsICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vay1zaWduJ1xuICAgICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtc3VjY2VzcydcbiAgICAgICAgICAgICAgbXNnLmlzVmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAndW52ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZmljYXRpb24nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgbmVnYXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1lcnJvcidcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI0ZGRjBERTtib3JkZXItY29sb3I6I0ZGRTJDNjsnXG4gICAgICAgICAgICAgIG1zZy5pc1VudmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAncmF0aW5nJ1xuICAgICAgICAgICAgICByYXRpbmcgPSBzaWduZWREYXRhLnJhdGluZ1xuICAgICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKHNpZ25lZERhdGEubWluUmF0aW5nICsgc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgICAgICBtYXhSYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIG1pblJhdGluZ0RpZmYgPSBzaWduZWREYXRhLm1pblJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgaWYgcmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAgIGlmIHNpZ25lZERhdGEuY29udGV4dCA9PSAndmVyaWZpZXInXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2ZhIGZhLXNoaWVsZCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1heFJhdGluZ0RpZmYgPCAyIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1heFJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgICAgZWxzZSBpZiByYXRpbmcgPCBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtaW5SYXRpbmdEaWZmID4gLTIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWluUmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyArIDAuNSkgLyBtaW5SYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzOydcbiAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIHByb2Nlc3NNZXNzYWdlKG1zZylcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyA9IChpLCBodG1sU2FmZSwgc2V0VGl0bGUpIC0+XG4gICAgICBpLnZlcmlmaWVkID0gZmFsc2VcbiAgICAgIGkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcbiAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICAgIGkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgIGkudmVyaWZpZWQgPSB0cnVlIGlmIG12YS5uYW1lLnZlcmlmaWVkXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICAgICAgaS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBPYmplY3QudmFsdWVzKGF0dHJzKVswXS52YWxcbiAgICAgICAgICBpZiBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICBpZiBtdmEubmlja25hbWUgYW5kIG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsICE9IGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICAgICAgIGkubmlja25hbWUgPSBpLm5pY2tuYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgaS5wcmltYXJ5TmFtZSBpZiBzZXRUaXRsZVxuXG4gICAgJHNjb3BlLnNlYXJjaEtleWRvd24gPSAoZXZlbnQpIC0+XG4gICAgICBzd2l0Y2ggKGlmIGV2ZW50IHRoZW4gZXZlbnQud2hpY2ggZWxzZSAtMSlcbiAgICAgICAgd2hlbiAzOFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+IC0xXG4gICAgICAgICAgICAkc2NvcGUuYWRkRW50cnlBY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPj0gMFxuICAgICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5IDwgKCRzY29wZS5pZHMubGlzdC5sZW5ndGggfHwgMCkgLSAxXG4gICAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+PSAwXG4gICAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSArIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID09IC0xXG4gICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGlkID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XVxuICAgICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGlkLmxpbmtUby5uYW1lLCB2YWx1ZTogaWQubGlua1RvLnZhbCB9XG4gICAgICAgIHdoZW4gLTFcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICB3aGVuIDMzLCAzNCwgMzUsIDM2LCAzNywgMzlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsID0gYW5ndWxhci5lbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgIHdhaXQgPSBzZXRUaW1lb3V0KCgtPlxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSBlbC52YWwoKVxuICAgICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICApLCAzMDApXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gd2FpdFxuICAgICAgICAgIGJyZWFrXG5cbiAgICAkc2NvcGUuZHJvcGRvd25TZWFyY2hTZWxlY3QgPSAoaXRlbSkgLT5cbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpdGVtLmxpbmtUby5uYW1lLCB2YWx1ZTogaXRlbS5saW5rVG8udmFsIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkR3VuUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuZ3VuLm9wdCh7cGVlcnM6IFt1cmxdfSk7ICMgVE9ETzogdmFsaWRhdGUgdXJsXG5cbiAgICAkc2NvcGUucmVtb3ZlR3VuUGVlciA9ICh1cmwpIC0+XG4gICAgICBjb25zb2xlLmxvZyAncmVtb3ZlR3VuUGVlcicgIyBUT0RPOiBob3cgdG8gZG8gdGhpcz9cblxuICAgICRzY29wZS5hZGRJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5jb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcblxuICAgICRzY29wZS5yZW1vdmVJcGZzUGVlciA9ICh1cmwpIC0+XG4gICAgICAkc2NvcGUuaXBmcy5zd2FybS5kaXNjb25uZWN0KHVybCkudGhlbiAtPlxuICAgICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcbl1cbiJdfQ==

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
      var thumbsDownObj,
    thumbsUpObj;
      $scope.newEntry = {};
      $scope.activeTab = 0;
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
      $scope.$on('MessageAdded',
    function(event,
    args) {
        return $state.reload();
      });
      $scope.addEntry = function(event,
    entry) {
        var linkTo,
    params,
    recipient;
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
        params = {
          type: 'verify_identity',
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
        var cursor;
        if ($scope.sent.loading || !$scope.identity) {
          return;
        }
        $scope.sent.loading = true;
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        return $scope.identifiIndex.getSentMsgs($scope.identity,
    $scope.filters.limit,
    cursor).then(function(sent) {
          $scope.processMessages(sent,
    {
            authorIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.sent,
    sent);
            $scope.sent.loading = false;
            if (sent.length < $scope.filters.limit - 1) {
              return $scope.sent.finished = true;
            }
          });
        }).catch(function(error) {
          console.log('error loading sent messages',
    error);
          return $scope.sent.finished = true;
        });
      };
      $scope.getReceivedMsgs = function() {
        var cursor;
        if ($scope.received.loading || !$scope.identity) {
          return;
        }
        $scope.received.loading = true;
        cursor = $scope.received.length ? $scope.received[$scope.received.length - 1].cursor : '';
        return $scope.identifiIndex.getReceivedMsgs($scope.identity,
    $scope.filters.limit,
    cursor).then(function(received) {
          $scope.processMessages(received,
    {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.received,
    received);
            $scope.received.loading = false;
            if (received.length < $scope.filters.limit - 1) {
              $scope.received.finished = true;
            }
            return received.forEach(function(msg) {
              if (msg.isPositive()) {
                if ($scope.thumbsUp.length < 12 && !thumbsUpObj[JSON.stringify(msg.signedData.author)]) {
                  thumbsUpObj[JSON.stringify(msg.signedData.author)] = true;
                  $scope.thumbsUp.push(msg);
                  return $scope.hasThumbsUp = true;
                }
              } else if (msg.isNegative() && $scope.thumbsDown.length < 12 && !thumbsDownObj[JSON.stringify(msg.signedData.author)]) {
                thumbsDownObj[JSON.stringify(msg.signedData.author)] = true;
                $scope.thumbsDown.push(msg);
                return $scope.hasThumbsDown = true;
              }
            });
          });
        }).catch(function(error) {
          console.log('error loading received messages',
    error);
          return $scope.received.finished = true;
        });
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters,
    filters);
        $scope.sent = [];
        $scope.received = [];
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.uploadProfilePhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          console.log(files,
    $scope.identity);
          recipient = [[$scope.idType,
    $scope.idValue],
    ['profilePhoto',
    '/ipfs/' + files[0].path]];
          return $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.hideProfilePhoto = true; // There's a weird bug where the profile identicon doesn't update
            $scope.identifiIndex.addMessage(m,
    $scope.ipfs).then(function() {
              return $scope.hideProfilePhoto = false;
            });
            return $scope.uploadModal.close();
          });
        });
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
      $scope.openProfilePhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadProfilePhoto,
    'Upload profile photo',
    true);
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
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        if ($window.location.hostname.indexOf('.') > -1) { // differentiate between localhost / chrome plugin uri and DNS name
          $scope.idUrl = $state.href('identities.show',
    {
            type: $scope.idType,
            value: $scope.idValue
          },
    {
            absolute: true
          });
        } else {
          $scope.idUrl = 'https://identi.fi/' + $state.href('identities.show',
    {
            type: $scope.idType,
            value: $scope.idValue
          });
        }
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1;
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
        return $scope.$watch('apiReady',
    function(isReady) {
          if (isReady) {
            $scope.identity = $scope.identifiIndex.get($scope.idValue,
    $scope.idType);
            $scope.setIdentityNames($scope.identity,
    false,
    true);
            if ($scope.identity.gun) {
              $scope.identity.gun.on(function(data) {
                return $scope.identity.data = data;
              });
              $scope.identity.gun.get('attrs').on(function() {
                return $scope.getConnections();
              });
              $scope.identity.gun.get('sent').on(function() {
                return $scope.getSentMsgs(0);
              });
              $scope.identity.gun.get('received').on(function() {
                return $scope.getReceivedMsgs(0);
              });
              return $scope.identity.gun.get('scores').open(function(scores) {
                return $scope.scores = scores;
              });
            }
          }
        });
      };
      if ($state.is('identities.show')) {
        $scope.findOne();
      }
      if ($state.is('identities.create')) {
        focus('idNameFocus');
        return $scope.newEntry.name = $scope.capitalizeWords($scope.query.term);
      }
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRTtJQUVuRSxRQUZtRTtJQUduRSxZQUhtRTtJQUluRSxTQUptRTtJQUtuRSxjQUxtRTtJQU1uRSxXQU5tRTtJQU9uRSxPQVBtRTtJQVFuRSxJQVJtRTtJQVNuRSxVQVRtRTtJQVVuRSxXQVZtRTs7SUFZbkUsUUFabUU7SUFhbkUscUJBYm1FO0lBY25FLE9BZG1FO0lBZW5FLFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxTQUFwRDtJQUErRCxLQUEvRDtJQUFzRSxFQUF0RTtJQUEwRSxRQUExRTtJQUFvRixTQUFwRjtJQUErRixNQUEvRjtJQUNBLG1CQURBO0lBQ3FCLEtBRHJCLENBQUEsRUFBQTtBQUVFLFVBQUEsYUFBQTtJQUFBO01BQUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsQ0FBQTtNQUNsQixNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUNuQixNQUFNLENBQUMsV0FBUCxHQUFxQixRQUFBLENBQUMsS0FBRCxDQUFBO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLENBQUE7TUFDckIsV0FBQSxHQUFjLENBQUE7TUFDZCxhQUFBLEdBQWdCLENBQUE7TUFDaEIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFD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LENBQUMsUUFBUSxDQUFDLElBQWhCLEdBQXVCLE1BQU0sQ0FBQyxlQUFQLENBQXVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBcEMsRUFGekI7O0lBblVGLENBZm1FO0dBQXJFO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgSWRlbnRpdGllcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnSWRlbnRpdGllc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckc3RhdGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHEnXG4gICckdGltZW91dCdcbiAgJyR1aWJNb2RhbCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnZm9jdXMnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsICR1aWJNb2RhbCwgY29uZmlnLFxuICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLCBmb2N1cykgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUubmV3RW50cnkgPSB7fVxuICAgICRzY29wZS5hY3RpdmVUYWIgPSAwXG4gICAgJHNjb3BlLmFjdGl2YXRlVGFiID0gKHRhYklkKSAtPiAkc2NvcGUuYWN0aXZlVGFiID0gdGFiSWRcbiAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgJHNjb3BlLnJlY2VpdmVkID0gW11cbiAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSB7fVxuICAgIHRodW1ic1VwT2JqID0ge31cbiAgICB0aHVtYnNEb3duT2JqID0ge31cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAkc3RhdGVQYXJhbXMuc2VhcmNoIGlmICRzdGF0ZVBhcmFtcy5zZWFyY2hcbiAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJydcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgdmFsdWU6IDBcbiAgICAgIG9wdGlvbnM6XG4gICAgICAgIGZsb29yOiAtM1xuICAgICAgICBjZWlsOiAzXG4gICAgICAgIGhpZGVQb2ludGVyTGFiZWxzOiB0cnVlXG4gICAgICAgIGhpZGVMaW1pdExhYmVsczogdHJ1ZVxuXG4gICAgJHNjb3BlLiRvbiAnTWVzc2FnZUFkZGVkJywgKGV2ZW50LCBhcmdzKSAtPlxuICAgICAgJHN0YXRlLnJlbG9hZCgpXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgcmVjaXBpZW50ID0gW11cbiAgICAgIGxpbmtUbyA9IG51bGxcbiAgICAgIGlmIGVudHJ5Lm5hbWVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyduYW1lJywgZW50cnkubmFtZV1cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnZW1haWwnLCBlbnRyeS5lbWFpbF1cbiAgICAgICAgbGlua1RvID0geyB0eXBlOiAnZW1haWwnLCB2YWx1ZTogZW50cnkuZW1haWwgfVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICd1cmwnLCB2YWx1ZTogZW50cnkudXJsIH0gdW5sZXNzIGxpbmtUb1xuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICdwaG9uZScsIHZhbHVlOiBlbnRyeS5waG9uZSB9IHVubGVzcyBsaW5rVG9cbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgIHJlY2lwaWVudDogcmVjaXBpZW50XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShldmVudCwgcGFyYW1zKS50aGVuIChyZXNwb25zZSkgLT5cbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCBsaW5rVG9cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ3Vlc3NBdHRyaWJ1dGVUeXBlID0gLT5cbiAgICAgIGlmICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubGVuZ3RoXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlLmd1ZXNzVHlwZU9mKCRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUpXG4gICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGVcbiAgICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5tYXRjaCAvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXCR8XFwlfFxcXnxcXCZ8XFwqfFxcKHxcXCl8XFwrfFxcPXxcXFt8XFx7fFxcXXxcXH18XFx8fFxcXFx8XFwnfFxcPHxcXCx8XFwufFxcPnxcXD98XFwvfFxcXCJcInxcXDt8XFw6L1xuICAgICAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJ25hbWUnXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkTmFtZSA9IChuYW1lKSAtPlxuICAgICAgaWYgbmFtZVxuICAgICAgICByZWNpcGllbnQgPSBbWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgWyduYW1lJywgbmFtZV1dXG4gICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmFkZE1lc3NhZ2UobSwgJHNjb3BlLmlwZnMpXG4gICAgICAgICRzY29wZS5uYW1lQWRkZWQgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5hZGRpbmdOYW1lID0gdHJ1ZVxuICAgICAgICBmb2N1cygnYWRkTmFtZUZvY3VzJylcblxuICAgICRzY29wZS5nZXRDb25uZWN0aW9ucyA9IC0+XG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgY29uc29sZS5sb2cgYXR0cnNcbiAgICAgICAgY29ubmVjdGlvbnMgPSBhdHRycyBvciBbXVxuICAgICAgICBpZiBjb25uZWN0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgICAgYyA9IGNvbm5lY3Rpb25zWzBdXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSBjLmNvbmZcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gMVxuICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSBPYmplY3QudmFsdWVzKGNvbm5lY3Rpb25zKS5zb3J0IChhLCBiKSAtPlxuICAgICAgICAgIChiLmNvbmYgLSAyICogYi5yZWYpIC0gKGEuY29uZiAtIDIgKiBhLnJlZilcbiAgICAgICAgZm9yIGNvbm4gaW4gJHNjb3BlLmNvbm5lY3Rpb25zXG4gICAgICAgICAgY29ubi5pc0N1cnJlbnQgPSBjb25uLm5hbWUgPT0gJHNjb3BlLmlkVHlwZSBhbmQgY29ubi52YWwgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICBzd2l0Y2ggY29ubi5uYW1lXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ21haWx0bzonICsgY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tcHJpbWFyeSdcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgY29ubi52YWxcbiAgICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSAndGVsOicgKyBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2tleUlEJ1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICB3aGVuICdjb3ZlclBob3RvJ1xuICAgICAgICAgICAgICBpZiBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGNvbm4udmFsKS50aGVuIChjb3ZlclBob3RvKSAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChkYXRhOmltYWdlO2Jhc2U2NCwnICsgY292ZXJQaG90by50b1N0cmluZygnYmFzZTY0JykgKyAnKScgfVxuICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBpZiBjb25uLnZhbC5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCd0d2l0dGVyLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2xpbmtlZGluLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGNvbm4udmFsIGFuZCBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vaXBmcy5pbycgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGNvbm4uY29uZiArIGNvbm4ucmVmID4gMFxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IGNvbm4uY29uZiAqIDEwMCAvIChjb25uLmNvbmYgKyBjb25uLnJlZilcbiAgICAgICAgICAgIGlmIHBlcmNlbnRhZ2UgPj0gODBcbiAgICAgICAgICAgICAgYWxwaGEgPSBjb25uLmNvbmYgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgICAjIGNvbm4ucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICAgIGVsc2UgaWYgcGVyY2VudGFnZSA+PSA2MFxuICAgICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnZGFuZ2VyJ1xuICAgICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgY29ubi5xdWlja0NvbnRhY3RcbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zTGVuZ3RoID0gT2JqZWN0LmtleXMoJHNjb3BlLmNvbm5lY3Rpb25zKS5sZW5ndGhcblxuXG4gICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzID0gKGlkMSwgaWQyKSAtPlxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucyA9ICRxIChyZXNvbHZlKSAtPlxuICAgICAgICBpZiAhJHNjb3BlLnZlcmlmaWNhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgaWYgJHNjb3BlLnJlY2VpdmVkSW5kZXhcbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4LnNlYXJjaFRleHQoJycsIDEwMDAwLCBmYWxzZSwgdHJ1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICByZXMuZm9yRWFjaCAocm93KSAtPlxuICAgICAgICAgICAgICAgIG1zZyA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tSndzKHJvdy52YWx1ZS5qd3MpXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ10pXG4gICAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLnNpZ25lZERhdGEuYXV0aG9yWzBdXG4gICAgICAgICAgICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5wdXNoIG1zZ1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucy50aGVuIC0+XG4gICAgICAgIG1zZ3MgPSBbXVxuICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgaGFzSWQxID0gaGFzSWQyID0gZmFsc2VcbiAgICAgICAgICBmb3IgaWQgaW4gbXNnLnNpZ25lZERhdGEucmVjaXBpZW50XG4gICAgICAgICAgICByZXR1cm4gbXNncy5wdXNoIG1zZyBpZiBpZFswXcKgPT0gaWQyLm5hbWUgYW5kIGlkWzFdID09IGlkMi52YWxcbiAgICAgICAgcmV0dXJuIG1zZ3NcblxuICAgICRzY29wZS5jb25uZWN0aW9uQ2xpY2tlZCA9IChldmVudCwgaWQpIC0+XG4gICAgICBpZiBpZC5jb25uZWN0aW5nX21zZ3NcbiAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzKFskc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIGlkKS50aGVuIChtc2dzKSAtPlxuICAgICAgICAgIGlkLmNvbm5lY3RpbmdfbXNncyA9IG1zZ3NcbiAgICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuXG4gICAgJHNjb3BlLmdldFNlbnRNc2dzID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUuc2VudC5sb2FkaW5nIG9yIG5vdCAkc2NvcGUuaWRlbnRpdHlcbiAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUuc2VudC5sZW5ndGggdGhlbiAkc2NvcGUuc2VudFskc2NvcGUuc2VudC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0U2VudE1zZ3MoJHNjb3BlLmlkZW50aXR5LCAkc2NvcGUuZmlsdGVycy5saW1pdCwgY3Vyc29yKVxuICAgICAgLnRoZW4gKHNlbnQpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgc2VudCwgeyBhdXRob3JJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnNlbnQsIHNlbnQpXG4gICAgICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgc2VudC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ2Vycm9yIGxvYWRpbmcgc2VudCBtZXNzYWdlcycsIGVycm9yXG4gICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgb3Igbm90ICRzY29wZS5pZGVudGl0eVxuICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUucmVjZWl2ZWQubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0UmVjZWl2ZWRNc2dzKCRzY29wZS5pZGVudGl0eSwgJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChyZWNlaXZlZCkgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyByZWNlaXZlZCwgeyByZWNpcGllbnRJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnJlY2VpdmVkLCByZWNlaXZlZClcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgcmVjZWl2ZWQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgICAgcmVjZWl2ZWQuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgICAgaWYgbXNnLmlzUG9zaXRpdmUoKVxuICAgICAgICAgICAgICBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgICAgIHRodW1ic1VwT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildID0gdHJ1ZVxuICAgICAgICAgICAgICAgICRzY29wZS50aHVtYnNVcC5wdXNoIG1zZ1xuICAgICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgbXNnLmlzTmVnYXRpdmUoKSBhbmQgJHNjb3BlLnRodW1ic0Rvd24ubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNEb3duT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildXG4gICAgICAgICAgICAgIHRodW1ic0Rvd25PYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSB0cnVlXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duLnB1c2ggbXNnXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNEb3duID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ2Vycm9yIGxvYWRpbmcgcmVjZWl2ZWQgbWVzc2FnZXMnLCBlcnJvclxuICAgICAgICAkc2NvcGUucmVjZWl2ZWQuZmluaXNoZWQgPSB0cnVlXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcbiAgICAgICRzY29wZS5zZW50ID0gW11cbiAgICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90byA9IChibG9iLCBpZGVudGl0eSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBmaWxlcywgJHNjb3BlLmlkZW50aXR5XG4gICAgICAgIHJlY2lwaWVudCA9IFtbJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWVdLCBbJ3Byb2ZpbGVQaG90bycsICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aF1dXG4gICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5oaWRlUHJvZmlsZVBob3RvID0gdHJ1ZSAjIFRoZXJlJ3MgYSB3ZWlyZCBidWcgd2hlcmUgdGhlIHByb2ZpbGUgaWRlbnRpY29uIGRvZXNuJ3QgdXBkYXRlXG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtLCAkc2NvcGUuaXBmcykudGhlbiAtPlxuICAgICAgICAgICAgJHNjb3BlLmhpZGVQcm9maWxlUGhvdG8gPSBmYWxzZVxuICAgICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUudXBsb2FkQ292ZXJQaG90byA9IChibG9iLCBpZGVudGl0eSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBmaWxlcywgJHNjb3BlLmlkZW50aXR5XG4gICAgICAgIHJlY2lwaWVudCA9IFtbJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWVdLCBbJ2NvdmVyUGhvdG8nLCAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGhdXVxuICAgICAgICAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5hZGRNZXNzYWdlKG0sICRzY29wZS5pcGZzKVxuICAgICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlblNoYXJlTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLnNoYXJlTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaGFyZS5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbWQnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5zaGFyZU1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLnNoYXJlTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5Qcm9maWxlUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eVxuICAgICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCgkc2NvcGUudXBsb2FkUHJvZmlsZVBob3RvLCAnVXBsb2FkIHByb2ZpbGUgcGhvdG8nLCB0cnVlKVxuXG4gICAgJHNjb3BlLm9wZW5Db3ZlclBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8sICdVcGxvYWQgY292ZXIgcGhvdG8nLCBmYWxzZSlcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgIGlmICR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignLicpID4gLTEgIyBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbG9jYWxob3N0IC8gY2hyb21lIHBsdWdpbiB1cmkgYW5kIEROUyBuYW1lXG4gICAgICAgICRzY29wZS5pZFVybCA9ICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZTogJHNjb3BlLmlkVHlwZSwgdmFsdWU6ICRzY29wZS5pZFZhbHVlfSwge2Fic29sdXRlOiB0cnVlfSlcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmlkVXJsID0gJ2h0dHBzOi8vaWRlbnRpLmZpLycgKyAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGU6ICRzY29wZS5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuaWRWYWx1ZX0pXG4gICAgICAkc2NvcGUuaXNDdXJyZW50VXNlciA9ICRzY29wZS5hdXRoZW50aWNhdGlvbiBhbmRcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgYW5kXG4gICAgICAgICRzY29wZS5pZFR5cGUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlIGFuZFxuICAgICAgICAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoJHNjb3BlLmlkVHlwZSkgPiAtMVxuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlIGlmICRzY29wZS50YWJzXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgJHNjb3BlLmlkZW50aXR5ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5pZFZhbHVlLCAkc2NvcGUuaWRUeXBlKVxuICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5pZGVudGl0eSwgZmFsc2UsIHRydWUpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkZW50aXR5Lmd1blxuICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5vbiAoZGF0YSkgLT5cbiAgICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5LmRhdGEgPSBkYXRhXG4gICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vbiAtPlxuICAgICAgICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMoKVxuICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ3NlbnQnKS5vbiAtPlxuICAgICAgICAgICAgICAkc2NvcGUuZ2V0U2VudE1zZ3MoMClcbiAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdyZWNlaXZlZCcpLm9uIC0+XG4gICAgICAgICAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoMClcbiAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdzY29yZXMnKS5vcGVuIChzY29yZXMpIC0+XG4gICAgICAgICAgICAgICRzY29wZS5zY29yZXMgPSBzY29yZXNcblxuICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgJHNjb3BlLmZpbmRPbmUoKVxuXG4gICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmNyZWF0ZSdcbiAgICAgIGZvY3VzKCdpZE5hbWVGb2N1cycpXG4gICAgICAkc2NvcGUubmV3RW50cnkubmFtZSA9ICRzY29wZS5jYXBpdGFsaXplV29yZHMoJHNjb3BlLnF1ZXJ5LnRlcm0pXG5dXG4iXX0=

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
      url: '',
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
      title: 'Identifi - Global Address Book'
    }).state('identities.create', {
      url: '/identities/create',
      templateUrl: 'app/identities/create.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('identities.show', {
      url: '/identities/:type/:value',
      templateUrl: 'app/identities/show.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('messages', {
      url: '/messages',
      template: "<ui-view/>",
      abstract: true
    }).state('messages.list', {
      url: '',
      templateUrl: 'app/messages/list.html',
      controller: 'MessagesController',
      controllerAs: 'messages',
      title: 'Identifi - Latest messages'
    }).state('messages.show', {
      url: '/:id',
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
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxRQUFBLENBQUMsY0FBRCxFQUFpQixrQkFBakIsQ0FBQTtJQUNOO0lBQ0EsY0FDRSxDQUFDLEtBREgsQ0FDUyxZQURULEVBRUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0FGSixDQUtFLENBQUMsS0FMSCxDQUtTLGlCQUxULEVBTUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO01BSUEsTUFBQSxFQUNFO1FBQUEsTUFBQSxFQUFRO01BQVIsQ0FMRjtNQU1BLEtBQUEsRUFBTztJQU5QLENBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLG9CQUFMO01BQ0EsV0FBQSxFQUFhLDRCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjO0lBSGQsQ0FkSixDQWtCRSxDQUFDLEtBbEJILENBa0JTLGlCQWxCVCxFQW1CSTtNQUFBLEdBQUEsRUFBSywwQkFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsVUF2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0F4QkosQ0EyQkUsQ0FBQyxLQTNCSCxDQTJCUyxlQTNCVCxFQTRCSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQTVCSixDQWlDRSxDQUFDLEtBakNILENBaUNTLGVBakNULEVBa0NJO01BQUEsR0FBQSxFQUFLLE1BQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxVQUFBLEVBQVksb0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQWxDSixDQXNDRSxDQUFDLEtBdENILENBc0NTLE9BdENULEVBdUNJO01BQUEsR0FBQSxFQUFLLFFBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQXZDSixDQTBDRSxDQUFDLEtBMUNILENBMENTLFVBMUNULEVBMkNJO01BQUEsR0FBQSxFQUFLLFdBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQTNDSjtXQStDQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtFQWpETSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dWktdmlldy8+XCJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5saXN0JyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL2xpc3QuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgICBwYXJhbXM6XG4gICAgICAgICAgc2VhcmNoOiAnJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gR2xvYmFsIEFkZHJlc3MgQm9vaydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5jcmVhdGUnLFxuICAgICAgICB1cmw6ICcvaWRlbnRpdGllcy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnL2lkZW50aXRpZXMvOnR5cGUvOnZhbHVlJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3Nob3cuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgLnN0YXRlICdtZXNzYWdlcycsXG4gICAgICAgIHVybDogJy9tZXNzYWdlcydcbiAgICAgICAgdGVtcGxhdGU6IFwiPHVpLXZpZXcvPlwiXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL2xpc3QuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWVzc2FnZXMnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBMYXRlc3QgbWVzc2FnZXMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzLnNob3cnLFxuICAgICAgICB1cmw6ICcvOmlkJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgLnN0YXRlICdhYm91dCcsXG4gICAgICAgIHVybDogJy9hYm91dCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9hYm91dC5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gQWJvdXQnXG4gICAgICAuc3RhdGUgJ3NldHRpbmdzJyxcbiAgICAgICAgdXJsOiAnL3NldHRpbmdzJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3NldHRpbmdzLmh0bWwnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBTZXR0aW5ncydcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJy8nXG4iXX0=

(function() {
  angular.module('identifiAngular').constant('config', {
    defaultFilters: {
      type: null,
      limit: 50,
      max_distance: 0
    },
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account', 'bitcoin', 'gpg_keyid', 'gpg_fingerprint']
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFFSTtJQUFBLGNBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxZQUFBLEVBQWM7SUFGZCxDQURGO0lBSUEsb0JBQUEsRUFBc0IsQ0FDcEIsT0FEb0IsRUFFcEIsS0FGb0IsRUFHcEIsT0FIb0IsRUFJcEIsS0FKb0IsRUFLcEIsT0FMb0IsRUFNcEIsU0FOb0IsRUFPcEIsU0FQb0IsRUFRcEIsV0FSb0IsRUFTcEIsaUJBVG9CO0VBSnRCLENBRko7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKVxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogNTBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuICAgIHVuaXF1ZUF0dHJpYnV0ZVR5cGVzOiBbXG4gICAgICAnZW1haWwnLFxuICAgICAgJ3VybCcsXG4gICAgICAna2V5SUQnLFxuICAgICAgJ3RlbCcsXG4gICAgICAncGhvbmUnLFxuICAgICAgJ2FjY291bnQnLFxuICAgICAgJ2JpdGNvaW4nLFxuICAgICAgJ2dwZ19rZXlpZCcsXG4gICAgICAnZ3BnX2ZpbmdlcnByaW50J1xuICAgIF1cbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxZQUFELENBQUE7SUFDTixXQUFBOztXQUVBLFlBQVksQ0FBQyxZQUFiLENBQTBCLElBQTFCO0VBSE0sQ0FEVjs7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJGxvZ1Byb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuIl19

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label> <input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user && (newEntry.email || newEntry.url || newEntry.phone) && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div ng-if="apiReady && !query.term && authentication.user && !ids.loading && ids.list.length <= 1" class="alert alert-info text-center"><p>Welcome to Identifi! Start by <b><a ui-sref=identities.create>adding entries</a></b> or by asking for your friends\' Identifi profile urls to connect to.</p><p>Alternatively, you can trust this Identifi distribution\'s <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">default address book</a></b> as a starting point.</p></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add entry<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.verified></span> <small ng-if=!(result.mostVerifiedAttributes.name||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs[0].name|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/share.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=240></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small><button class="btn btn-default" ng-click=openShareModal()><span class="glyphicon glyphicon-share"></span></button></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small><button class="btn btn-default" ng-click=openShareModal()><span class="glyphicon glyphicon-share"></span></button> </span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.verified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><span ng-if="identity.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0 && identity.data.trustDistance < 1000" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit m"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && filters.type.indexOf(\'rating\') == 0 && receivedFiltered.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that this account belongs to your already trusted identity.</p><p><button ng-click=copyToClipboard(idUrl) class="btn btn-primary mar-top10">Copy link to this page</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{idUrl}} size=240></qrcode></div></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="connectionsLength || 0"></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon ipfs=ipfs identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on <a href=https://gun.eco>GUN</a> and <a href=https://ipfs.io>IPFS</a> networks. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=https://github.com/identifi/identifi>Source code</a></li><li><a href=https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f>Learning to Trust Strangers</a> - a blog post outlining the concept</li><li><a href=https://cdn.rawgit.com/identifi/identifi-lib/b979abf6/example/browser.html>Technical description of Identifi with live code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a> (<a href="https://github.com/identifi/identifi-angular/blob/master/dist.crx?raw=true">mirror</a>)</li><!-- TODO: add dynamically updated /ipfs url --></ul></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><button class="btn btn-primary" ng-disabled=!newUserName ng-click=createUser(newUserName)>Create user</button></form><br><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button></form></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/settings.html','<div class=container><div class=col-md-8><h3>Settings</h3><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-default"><div class=panel-heading>About</div><div class=panel-body><p><a ui-sref=about>About page</a></p></div></div><p><b>Geeky stuff</b></p><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p><button class="btn btn-danger" ng-click=copyToClipboard(privateKey|json)>Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button></p></div></div><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(url)><input class=form-control type=text placeholder="Peer url" ng-model=url> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length">No IPFS peers</p></div><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(url)><input class=form-control type=text placeholder="Peer url" ng-model=url> <input class="btn btn-primary" type=submit value="Add IPFS peer"></form></td></tr></tbody></table></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.linkTo.name, value: viewpoint.linkTo.val })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.val></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message ng-repeat="msg in msgs.list | filter:msgFilter" ipfs=ipfs msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message ipfs=ipfs show-recipient=true msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.mostVerifiedAttributes.name.attribute.val></span> <small>{{message.signerKeyID}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><!-- <div class="mar-top15 mar-bot10"><button ng-click="messageModal.close()" class="btn btn-default">Close</button></div> --></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon ipfs=$ctrl.ipfs identity="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo) || $ctrl.msgData.author" class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" class=id-link><identicon ng-if=$ctrl.showRecipient ipfs=$ctrl.ipfs identity=$ctrl.msgData.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]"></span> </a>- <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfsUri || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);