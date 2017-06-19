(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule']);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxRQURyRCxFQUMrRCxrQkFEL0QsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsQ0FERjs7RUFLQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxTQUFBO2FBQ25ELFNBQUMsS0FBRDtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEbUQsQ0FBRjtHQUFuRDs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsb0JBQXpDLEVBQStEO0lBQUUsU0FBQTthQUMvRCxTQUFDLEtBQUQ7ZUFDRSxrQkFBQSxDQUFtQixLQUFuQjtNQURGO0lBRCtELENBQUY7R0FBL0Q7O0VBS0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFdBQXpDLEVBQXNELFNBQUMsSUFBRDtXQUNwRCxTQUFDLElBQUQsRUFBTyxNQUFQO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxTQUFBO1dBQ2xELFNBQUMsS0FBRDtBQUNFLFVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXJCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInLCAnYW5ndWxhci1wYXJhbGxheCcsXG4gICdpbmZpbml0ZS1zY3JvbGwnLCAnTG9jYWxTdG9yYWdlTW9kdWxlJywgJ3J6TW9kdWxlJ11cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnZXNjYXBlJywgWyAtPlxuICAoaW5wdXQpIC0+XG4gICAgZW5jb2RlVVJJQ29tcG9uZW50IGVuY29kZVVSSUNvbXBvbmVudChpbnB1dClcbiBdXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlbmNvZGVVUklDb21wb25lbnQnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgaW5wdXRcbiBdXG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2hpZ2hsaWdodCcsICgkc2NlKSAtPlxuICAodGV4dCwgcGhyYXNlKSAtPlxuICAgIGlmIHR5cGVvZiB0ZXh0ID09ICdzdHJpbmcnIGFuZCBwaHJhc2VcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBwaHJhc2UgKyAnKScsICdnaScpLCAnPGI+JDE8L2I+JylcbiAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sIHRleHQudG9TdHJpbmcoKVxuICAgIHJldHVybiB0ZXh0XG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ29yZGluYWwnLCAtPlxuICAoaW5wdXQpIC0+XG4gICAgcyA9IFtcbiAgICAgICd0aCdcbiAgICAgICdzdCdcbiAgICAgICduZCdcbiAgICAgICdyZCdcbiAgICBdXG4gICAgdiA9IGlucHV0ICUgMTAwXG4gICAgaW5wdXQgKyAoc1sodiAtIDIwKSAlIDEwXSBvciBzW3ZdIG9yIHNbMF0pXG4iXX0=

(function() {
  angular.module('identifiAngular').component('message', {
    bindings: {
      msgData: '=',
      pageInfo: '=?'
    },
    templateUrl: 'app/components/message/message.template.html'
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsU0FESCxDQUNhLFNBRGIsRUFFSTtJQUFBLFFBQUEsRUFDRTtNQUFBLE9BQUEsRUFBUyxHQUFUO01BQ0EsUUFBQSxFQUFVLElBRFY7S0FERjtJQUdBLFdBQUEsRUFBYSw4Q0FIYjtHQUZKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29tcG9uZW50ICdtZXNzYWdlJyxcbiAgICBiaW5kaW5nczpcbiAgICAgIG1zZ0RhdGE6ICc9J1xuICAgICAgcGFnZUluZm86ICc9PydcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuIl19

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
  angular.module('identifiAngular').directive('identicon', function() {
    return {
      scope: {
        id: '=',
        border: '=?',
        positiveScore: '=?',
        negativeScore: '=?',
        width: '=?'
      },
      link: function(scope, element, attr) {
        var update;
        update = function() {
          var bgColor, bgImage, boxShadow, transform;
          scope.negativeScore |= 0;
          scope.positiveScore |= 0;
          boxShadow = '0px 0px 0px 0px #82FF84';
          if (scope.positiveScore > scope.negativeScore * 20) {
            boxShadow = '0px 0px ' + scope.border * scope.positiveScore / 50 + 'px 0px #82FF84';
          } else if (scope.positiveScore < scope.negativeScore * 3) {
            boxShadow = '0px 0px ' + scope.border * scope.negativeScore / 10 + 'px 0px #BF0400';
          }
          bgColor = 'rgba(0,0,0,0.2)';
          bgImage = 'none';
          transform = '';
          if (scope.positiveScore + scope.negativeScore > 0) {
            if (scope.positiveScore > scope.negativeScore) {
              transform = 'rotate(' + ((-scope.positiveScore / (scope.positiveScore + scope.negativeScore) * 360 - 180) / 2) + 'deg)';
              bgColor = '#A94442';
              bgImage = 'linear-gradient(' + scope.positiveScore / (scope.positiveScore + scope.negativeScore) * 360 + 'deg, transparent 50%, #3C763D 50%), linear-gradient(0deg, #3C763D 50%, transparent 50%)';
            } else {
              transform = 'rotate(' + ((-scope.negativeScore / (scope.positiveScore + scope.negativeScore) * 360 - 180) / 2) + 180 + 'deg)';
              bgColor = '#3C763D';
              bgImage = 'linear-gradient(' + scope.negativeScore / (scope.positiveScore + scope.negativeScore) * 360 + 'deg, transparent 50%, #A94442 50%), linear-gradient(0deg, #A94442 50%, transparent 50%)';
            }
          }
          element.children().css({
            width: scope.width + 'px',
            height: scope.width + 'px'
          });
          element.children().find('div').css({
            'background-color': bgColor,
            'background-image': bgImage,
            'width': scope.width + 'px',
            'box-shadow': boxShadow,
            'opacity': (scope.positiveScore + scope.negativeScore) / 10 * 0.5 + 0.35,
            'transform': transform
          });
          return element.find('img').css({
            'border-width': scope.border + 'px'
          });
        };
        return scope.$watchGroup(['positiveScore', 'negativeScore', 'id'], update);
      },
      template: "<div class=\"identicon\">\n  <div class=\"pie\">\n  </div>\n  <img alt=\"\"\n    width=\"{{width}}\"\n    src=\"https://www.gravatar.com/avatar/{{id.gravatar}}?d=retro&amp;s={{width*2}}\" />\n</div>"
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsV0FEYixFQUMwQixTQUFBO1dBQ3RCO01BQUEsS0FBQSxFQUNFO1FBQUEsRUFBQSxFQUFJLEdBQUo7UUFDQSxNQUFBLEVBQVEsSUFEUjtRQUVBLGFBQUEsRUFBZSxJQUZmO1FBR0EsYUFBQSxFQUFlLElBSGY7UUFJQSxLQUFBLEVBQU8sSUFKUDtPQURGO01BTUEsSUFBQSxFQUFNLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsSUFBakI7QUFDSixZQUFBO1FBQUEsTUFBQSxHQUFTLFNBQUE7QUFDUCxjQUFBO1VBQUEsS0FBSyxDQUFDLGFBQU4sSUFBdUI7VUFDdkIsS0FBSyxDQUFDLGFBQU4sSUFBdUI7VUFDdkIsU0FBQSxHQUFZO1VBQ1osSUFBSSxLQUFLLENBQUMsYUFBTixHQUFzQixLQUFLLENBQUMsYUFBTixHQUFzQixFQUFoRDtZQUNFLFNBQUEsR0FBWSxVQUFBLEdBQWEsS0FBSyxDQUFDLE1BQU4sR0FBZSxLQUFLLENBQUMsYUFBckIsR0FBcUMsRUFBbEQsR0FBdUQsaUJBRHJFO1dBQUEsTUFFSyxJQUFJLEtBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQUssQ0FBQyxhQUFOLEdBQXNCLENBQWhEO1lBQ0gsU0FBQSxHQUFZLFVBQUEsR0FBYSxLQUFLLENBQUMsTUFBTixHQUFlLEtBQUssQ0FBQyxhQUFyQixHQUFxQyxFQUFsRCxHQUF1RCxpQkFEaEU7O1VBR0wsT0FBQSxHQUFVO1VBQ1YsT0FBQSxHQUFVO1VBQ1YsU0FBQSxHQUFZO1VBQ1osSUFBRyxLQUFLLENBQUMsYUFBTixHQUFzQixLQUFLLENBQUMsYUFBNUIsR0FBNEMsQ0FBL0M7WUFDRSxJQUFHLEtBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQUssQ0FBQyxhQUEvQjtjQUNFLFNBQUEsR0FBWSxTQUFBLEdBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQVAsR0FBdUIsQ0FBQyxLQUFLLENBQUMsYUFBTixHQUFzQixLQUFLLENBQUMsYUFBN0IsQ0FBdkIsR0FBcUUsR0FBckUsR0FBMkUsR0FBNUUsQ0FBQSxHQUFtRixDQUFwRixDQUFaLEdBQXFHO2NBQ2pILE9BQUEsR0FBVTtjQUNWLE9BQUEsR0FBVSxrQkFBQSxHQUFxQixLQUFLLENBQUMsYUFBTixHQUFzQixDQUFDLEtBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQUssQ0FBQyxhQUE3QixDQUF0QixHQUFvRSxHQUF6RixHQUErRiwwRkFIM0c7YUFBQSxNQUFBO2NBS0UsU0FBQSxHQUFZLFNBQUEsR0FBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBUCxHQUF1QixDQUFDLEtBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQUssQ0FBQyxhQUE3QixDQUF2QixHQUFxRSxHQUFyRSxHQUEyRSxHQUE1RSxDQUFBLEdBQW1GLENBQXBGLENBQVosR0FBcUcsR0FBckcsR0FBMkc7Y0FDdkgsT0FBQSxHQUFVO2NBQ1YsT0FBQSxHQUFVLGtCQUFBLEdBQXFCLEtBQUssQ0FBQyxhQUFOLEdBQXNCLENBQUMsS0FBSyxDQUFDLGFBQU4sR0FBc0IsS0FBSyxDQUFDLGFBQTdCLENBQXRCLEdBQW9FLEdBQXpGLEdBQStGLDBGQVAzRzthQURGOztVQVVBLE9BQU8sQ0FBQyxRQUFSLENBQUEsQ0FBa0IsQ0FBQyxHQUFuQixDQUNFO1lBQUEsS0FBQSxFQUFPLEtBQUssQ0FBQyxLQUFOLEdBQWMsSUFBckI7WUFDQSxNQUFBLEVBQVEsS0FBSyxDQUFDLEtBQU4sR0FBYyxJQUR0QjtXQURGO1VBR0EsT0FBTyxDQUFDLFFBQVIsQ0FBQSxDQUFrQixDQUFDLElBQW5CLENBQXdCLEtBQXhCLENBQThCLENBQUMsR0FBL0IsQ0FDRTtZQUFBLGtCQUFBLEVBQW9CLE9BQXBCO1lBQ0Esa0JBQUEsRUFBb0IsT0FEcEI7WUFFQSxPQUFBLEVBQVMsS0FBSyxDQUFDLEtBQU4sR0FBYyxJQUZ2QjtZQUdBLFlBQUEsRUFBYyxTQUhkO1lBSUEsU0FBQSxFQUFZLENBQUMsS0FBSyxDQUFDLGFBQU4sR0FBc0IsS0FBSyxDQUFDLGFBQTdCLENBQUEsR0FBOEMsRUFBOUMsR0FBbUQsR0FBbkQsR0FBeUQsSUFKckU7WUFLQSxXQUFBLEVBQWEsU0FMYjtXQURGO2lCQU9BLE9BQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixDQUFtQixDQUFDLEdBQXBCLENBQ0U7WUFBQSxjQUFBLEVBQWdCLEtBQUssQ0FBQyxNQUFOLEdBQWUsSUFBL0I7V0FERjtRQWhDTztlQWtDVCxLQUFLLENBQUMsV0FBTixDQUFrQixDQUFDLGVBQUQsRUFBa0IsZUFBbEIsRUFBbUMsSUFBbkMsQ0FBbEIsRUFBNEQsTUFBNUQ7TUFuQ0ksQ0FOTjtNQTBDQSxRQUFBLEVBQVUsd01BMUNWOztFQURzQixDQUQxQjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyBjb2ZmZWVsaW50OiBkaXNhYmxlPW1heF9saW5lX2xlbmd0aFxuYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmRpcmVjdGl2ZSAnaWRlbnRpY29uJywgLT5cbiAgICBzY29wZTpcbiAgICAgIGlkOiAnPSdcbiAgICAgIGJvcmRlcjogJz0/J1xuICAgICAgcG9zaXRpdmVTY29yZTogJz0/J1xuICAgICAgbmVnYXRpdmVTY29yZTogJz0/J1xuICAgICAgd2lkdGg6ICc9PydcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIC0+XG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBzY29wZS5uZWdhdGl2ZVNjb3JlIHw9IDBcbiAgICAgICAgc2NvcGUucG9zaXRpdmVTY29yZSB8PSAwXG4gICAgICAgIGJveFNoYWRvdyA9ICcwcHggMHB4IDBweCAwcHggIzgyRkY4NCdcbiAgICAgICAgaWYgKHNjb3BlLnBvc2l0aXZlU2NvcmUgPiBzY29wZS5uZWdhdGl2ZVNjb3JlICogMjApXG4gICAgICAgICAgYm94U2hhZG93ID0gJzBweCAwcHggJyArIHNjb3BlLmJvcmRlciAqIHNjb3BlLnBvc2l0aXZlU2NvcmUgLyA1MCArICdweCAwcHggIzgyRkY4NCdcbiAgICAgICAgZWxzZSBpZiAoc2NvcGUucG9zaXRpdmVTY29yZSA8IHNjb3BlLm5lZ2F0aXZlU2NvcmUgKiAzKVxuICAgICAgICAgIGJveFNoYWRvdyA9ICcwcHggMHB4ICcgKyBzY29wZS5ib3JkZXIgKiBzY29wZS5uZWdhdGl2ZVNjb3JlIC8gMTAgKyAncHggMHB4ICNCRjA0MDAnXG5cbiAgICAgICAgYmdDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMiknXG4gICAgICAgIGJnSW1hZ2UgPSAnbm9uZSdcbiAgICAgICAgdHJhbnNmb3JtID0gJydcbiAgICAgICAgaWYgc2NvcGUucG9zaXRpdmVTY29yZSArIHNjb3BlLm5lZ2F0aXZlU2NvcmUgPiAwXG4gICAgICAgICAgaWYgc2NvcGUucG9zaXRpdmVTY29yZSA+IHNjb3BlLm5lZ2F0aXZlU2NvcmVcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9ICdyb3RhdGUoJyArICgoLXNjb3BlLnBvc2l0aXZlU2NvcmUgLyAoc2NvcGUucG9zaXRpdmVTY29yZSArIHNjb3BlLm5lZ2F0aXZlU2NvcmUpICogMzYwIC0gMTgwKSAvIDIpICsgJ2RlZyknXG4gICAgICAgICAgICBiZ0NvbG9yID0gJyNBOTQ0NDInXG4gICAgICAgICAgICBiZ0ltYWdlID0gJ2xpbmVhci1ncmFkaWVudCgnICsgc2NvcGUucG9zaXRpdmVTY29yZSAvIChzY29wZS5wb3NpdGl2ZVNjb3JlICsgc2NvcGUubmVnYXRpdmVTY29yZSkgKiAzNjAgKyAnZGVnLCB0cmFuc3BhcmVudCA1MCUsICMzQzc2M0QgNTAlKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsICMzQzc2M0QgNTAlLCB0cmFuc3BhcmVudCA1MCUpJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9ICdyb3RhdGUoJyArICgoLXNjb3BlLm5lZ2F0aXZlU2NvcmUgLyAoc2NvcGUucG9zaXRpdmVTY29yZSArIHNjb3BlLm5lZ2F0aXZlU2NvcmUpICogMzYwIC0gMTgwKSAvIDIpICsgMTgwICsgJ2RlZyknXG4gICAgICAgICAgICBiZ0NvbG9yID0gJyMzQzc2M0QnXG4gICAgICAgICAgICBiZ0ltYWdlID0gJ2xpbmVhci1ncmFkaWVudCgnICsgc2NvcGUubmVnYXRpdmVTY29yZSAvIChzY29wZS5wb3NpdGl2ZVNjb3JlICsgc2NvcGUubmVnYXRpdmVTY29yZSkgKiAzNjAgKyAnZGVnLCB0cmFuc3BhcmVudCA1MCUsICNBOTQ0NDIgNTAlKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsICNBOTQ0NDIgNTAlLCB0cmFuc3BhcmVudCA1MCUpJ1xuXG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4oKS5jc3MgIyAuaWRlbnRpY29uXG4gICAgICAgICAgd2lkdGg6IHNjb3BlLndpZHRoICsgJ3B4J1xuICAgICAgICAgIGhlaWdodDogc2NvcGUud2lkdGggKyAncHgnXG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4oKS5maW5kKCdkaXYnKS5jc3MgIyAucGllXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBiZ0NvbG9yXG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBiZ0ltYWdlXG4gICAgICAgICAgJ3dpZHRoJzogc2NvcGUud2lkdGggKyAncHgnXG4gICAgICAgICAgJ2JveC1zaGFkb3cnOiBib3hTaGFkb3dcbiAgICAgICAgICAnb3BhY2l0eSc6ICgoc2NvcGUucG9zaXRpdmVTY29yZSArIHNjb3BlLm5lZ2F0aXZlU2NvcmUpIC8gMTAgKiAwLjUgKyAwLjM1KVxuICAgICAgICAgICd0cmFuc2Zvcm0nOiB0cmFuc2Zvcm1cbiAgICAgICAgZWxlbWVudC5maW5kKCdpbWcnKS5jc3NcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogc2NvcGUuYm9yZGVyICsgJ3B4J1xuICAgICAgc2NvcGUuJHdhdGNoR3JvdXAgWydwb3NpdGl2ZVNjb3JlJywgJ25lZ2F0aXZlU2NvcmUnLCAnaWQnXSwgdXBkYXRlXG4gICAgdGVtcGxhdGU6IFwiXCJcIlxuICAgICAgPGRpdiBjbGFzcz1cImlkZW50aWNvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGllXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGFsdD1cIlwiXG4gICAgICAgICAgd2lkdGg9XCJ7e3dpZHRofX1cIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIve3tpZC5ncmF2YXRhcn19P2Q9cmV0cm8mYW1wO3M9e3t3aWR0aCoyfX1cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgXCJcIlwiXG4iXX0=

(function() {
  angular.module('identifiAngular').factory('Messages', [
    '$resource', '$location', function($resource, $location) {
      var host, path;
      path = $location.absUrl();
      host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi/' : '';
      return $resource(host + 'api/messages/:id');
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsT0FBbEMsQ0FBMEMsVUFBMUMsRUFBc0Q7SUFDcEQsV0FEb0QsRUFFcEQsV0FGb0QsRUFHcEQsU0FBQyxTQUFELEVBQVksU0FBWjtBQUNFLFVBQUE7TUFBQSxJQUFBLEdBQU8sU0FBUyxDQUFDLE1BQVYsQ0FBQTtNQUNQLElBQUEsR0FBVSxJQUFJLENBQUMsS0FBTCxDQUFXLGFBQVgsQ0FBSCxHQUFpQyxvQkFBakMsR0FBMkQ7YUFDbEUsU0FBQSxDQUFVLElBQUEsR0FBTyxrQkFBakI7SUFIRixDQUhvRDtHQUF0RDtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyBNZXNzYWdlcyBzZXJ2aWNlIHVzZWQgdG8gY29tbXVuaWNhdGUgd2l0aCBNZXNzYWdlcyBSRVNUIGVuZHBvaW50c1xuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZhY3RvcnkgJ01lc3NhZ2VzJywgW1xuICAnJHJlc291cmNlJ1xuICAnJGxvY2F0aW9uJ1xuICAoJHJlc291cmNlLCAkbG9jYXRpb24pIC0+XG4gICAgcGF0aCA9ICRsb2NhdGlvbi5hYnNVcmwoKVxuICAgIGhvc3QgPSBpZiBwYXRoLm1hdGNoIC9cXC9pcFtuZl1zXFwvLyB0aGVuICdodHRwczovL2lkZW50aS5maS8nIGVsc2UgJydcbiAgICAkcmVzb3VyY2UgaG9zdCArICdhcGkvbWVzc2FnZXMvOmlkJ1xuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MessagesController', [
    '$scope', '$rootScope', '$window', '$stateParams', '$location', '$http', 'Messages', 'config', '$timeout', 'localStorageService', function($scope, $rootScope, $window, $stateParams, $location, $http, Messages, config, $timeout, localStorageService) {
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.filters.type = 'rating';
      $scope.resetMsgs = function() {
        var msgs;
        msgs = localStorageService.get('localMessages') || {};
        return $scope.msgs = {
          loading: false,
          finished: false,
          list: Object.values(msgs)
        };
      };
      $scope.resetMsgs();
      $scope.iconCount = function(rating) {
        return new Array(Math.max(1, Math.abs(rating)));
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
        var p, searchKey;
        if ($scope.msgs.loading) {
          return;
        }
        $scope.msgs = $scope.msgs || [];
        $scope.msgs.loading = true;
        searchKey = '';
        if ($scope.msgs.list.length) {
          searchKey = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey;
        }
        p = $scope.messageIndex.searchText('', $scope.filters.limit, searchKey, true).then(function(res) {
          var i, len, localMessages, messages, pair, v;
          messages = [];
          localMessages = localStorageService.get('localMessages') || {};
          for (i = 0, len = res.length; i < len; i++) {
            pair = res[i];
            if (pair.value) {
              v = pair.value;
              v.searchKey = pair.key;
              if (localMessages.hasOwnProperty(v.hash)) {
                delete localMessages[v.hash];
                localStorageService.set('localMessages', localMessages);
              } else {
                messages.push(v);
              }
            }
          }
          return messages;
        });
        return p.then(function(messages) {
          $scope.processMessages(messages);
          Array.prototype.push.apply($scope.msgs.list, messages);
          if (messages.length < $scope.filters.limit - 1) {
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
        angular.extend($scope.filters, filters);
        $scope.resetMsgs();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        var getMessageFromApi, hash, processResponse, query;
        if ($stateParams.id) {
          processResponse = function() {
            $scope.processMessages([$scope.message], {}, true);
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail || $scope.message.data.author[0][1]).toString();
            $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail || $scope.message.data.recipient[0][1]).toString();
            $scope.message.hash = hash;
            return $scope.getIdentityProfile({
              type: 'keyID',
              value: $scope.message.signer_keyid
            }, function(profile) {
              return $scope.$apply(function() {
                return $scope.message.verifiedBy = profile;
              });
            });
          };
          getMessageFromApi = function() {
            return $scope.message = Messages.get({
              id: hash,
              viewpoint_name: $scope.filters.viewpoint_name,
              viewpoint_value: $scope.filters.viewpoint_value,
              max_distance: $scope.filters.max_distance
            }, processResponse);
          };
          hash = $stateParams.id;
          query = null;
          return $scope.$watch('apiReady', function(isReady) {
            if (isReady) {
              if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) {
                return $scope.ipfsGet(hash).then(function(res) {
                  $scope.message = {
                    'jws': res
                  };
                  return processResponse();
                })["catch"](function(err) {
                  console.log('failed to get msg from ipfs', err);
                  return getMessageFromApi();
                });
              } else {
                return getMessageFromApi();
              }
            }
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUUsRUFFakUsWUFGaUUsRUFHakUsU0FIaUUsRUFJakUsY0FKaUUsRUFLakUsV0FMaUUsRUFNakUsT0FOaUUsRUFRakUsVUFSaUUsRUFTakUsUUFUaUUsRUFVakUsVUFWaUUsRUFXakUscUJBWGlFLEVBWWpFLFNBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsT0FBckIsRUFBOEIsWUFBOUIsRUFBNEMsU0FBNUMsRUFBdUQsS0FBdkQsRUFBOEQsUUFBOUQsRUFBd0UsTUFBeEUsRUFBZ0YsUUFBaEYsRUFBMEYsbUJBQTFGO01BQ0UsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsWUFBWSxDQUFDO01BQzdCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFlBQVksQ0FBQztNQUU5QixNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0I7TUFFdEIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsU0FBQTtBQUNqQixZQUFBO1FBQUEsSUFBQSxHQUFPLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLENBQUEsSUFBNEM7ZUFDbkQsTUFBTSxDQUFDLElBQVAsR0FDRTtVQUFBLE9BQUEsRUFBUyxLQUFUO1VBQ0EsUUFBQSxFQUFVLEtBRFY7VUFFQSxJQUFBLEVBQU0sTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLENBRk47O01BSGU7TUFNbkIsTUFBTSxDQUFDLFNBQVAsQ0FBQTtNQUVBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxJQUFJLENBQUMsR0FBTCxDQUFTLE1BQVQsQ0FBWixDQUFWO01BRGlCO01BR25CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtBQUNqQixZQUFBO1FBQUEsU0FBQSxHQUFZO1FBQ1osSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNFLFNBQUEsR0FBWSxXQURkO1NBQUEsTUFFSyxJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0gsU0FBQSxHQUFZLFdBRFQ7O2VBRUw7TUFOaUI7TUFRbkIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsU0FBQyxNQUFEO0FBQ2pCLFlBQUE7UUFBQSxTQUFBLEdBQVk7UUFDWixJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0UsU0FBQSxHQUFZLHNCQURkO1NBQUEsTUFFSyxJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0gsU0FBQSxHQUFZLHdCQURUOztlQUVMO01BTmlCO01BUW5CLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCO01BRTlDLE1BQU0sQ0FBQyxJQUFQLEdBQWMsU0FBQTtBQUNaLFlBQUE7UUFBQSxJQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBdEI7QUFBQSxpQkFBQTs7UUFDQSxNQUFNLENBQUMsSUFBUCxHQUFjLE1BQU0sQ0FBQyxJQUFQLElBQWU7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFaLEdBQXNCO1FBRXRCLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBcEI7VUFDRSxTQUFBLEdBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBakIsR0FBMEIsQ0FBMUIsQ0FBNEIsQ0FBQyxVQUQ1RDs7UUFFQSxDQUFBLEdBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFwQixDQUErQixFQUEvQixFQUFtQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWxELEVBQXlELFNBQXpELEVBQW9FLElBQXBFLENBQ0osQ0FBQyxJQURHLENBQ0UsU0FBQyxHQUFEO0FBQ0osY0FBQTtVQUFBLFFBQUEsR0FBVztVQUNYLGFBQUEsR0FBZ0IsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztBQUM1RCxlQUFBLHFDQUFBOztZQUNFLElBQUcsSUFBSSxDQUFDLEtBQVI7Y0FDRSxDQUFBLEdBQUksSUFBSSxDQUFDO2NBQ1QsQ0FBQyxDQUFDLFNBQUYsR0FBYyxJQUFJLENBQUM7Y0FDbkIsSUFBRyxhQUFhLENBQUMsY0FBZCxDQUE2QixDQUFDLENBQUMsSUFBL0IsQ0FBSDtnQkFDRSxPQUFPLGFBQWMsQ0FBQSxDQUFDLENBQUMsSUFBRjtnQkFDckIsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsRUFBeUMsYUFBekMsRUFGRjtlQUFBLE1BQUE7Z0JBSUUsUUFBUSxDQUFDLElBQVQsQ0FBYyxDQUFkLEVBSkY7ZUFIRjs7QUFERjtBQVNBLGlCQUFPO1FBWkgsQ0FERjtlQWNKLENBQUMsQ0FBQyxJQUFGLENBQU8sU0FBQyxRQUFEO1VBQ0wsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsUUFBdkI7VUFDQSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFyQixDQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQXZDLEVBQTZDLFFBQTdDO1VBQ0EsSUFBRyxRQUFRLENBQUMsTUFBVCxHQUFrQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWYsR0FBdUIsQ0FBNUM7WUFDRSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQUE7cUJBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFaLEdBQXVCO1lBQTFCLENBQWQsRUFERjs7aUJBRUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFBO21CQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBWixHQUFzQjtVQUF6QixDQUFkO1FBTEssQ0FBUDtNQXRCWTtNQTZCZCxNQUFNLENBQUMsVUFBUCxHQUFvQixTQUFDLE9BQUQ7UUFDbEIsT0FBTyxDQUFDLE1BQVIsQ0FBZSxNQUFNLENBQUMsT0FBdEIsRUFBK0IsT0FBL0I7UUFDQSxNQUFNLENBQUMsU0FBUCxDQUFBO2VBQ0EsUUFBQSxDQUFTLFNBQUE7aUJBQUcsVUFBVSxDQUFDLFVBQVgsQ0FBc0IsZ0JBQXRCO1FBQUgsQ0FBVDtNQUhrQjtNQU1wQixNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFBO0FBQ2YsWUFBQTtRQUFBLElBQUcsWUFBWSxDQUFDLEVBQWhCO1VBQ0UsZUFBQSxHQUFrQixTQUFBO1lBQ2hCLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQUMsTUFBTSxDQUFDLE9BQVIsQ0FBdkIsRUFBeUMsRUFBekMsRUFBNkMsSUFBN0M7WUFDQSxNQUFNLENBQUMsWUFBUCxDQUFvQixVQUFBLEdBQWEsSUFBakM7WUFDQSxNQUFNLENBQUMsYUFBUCxDQUFxQixNQUFNLENBQUMsT0FBNUI7WUFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWYsR0FBZ0MsUUFBUSxDQUFDLEdBQVQsQ0FBYSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWYsSUFBOEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBekUsQ0FBNEUsQ0FBQyxRQUE3RSxDQUFBO1lBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWYsR0FBbUMsUUFBUSxDQUFDLEdBQVQsQ0FBYSxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWYsSUFBaUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBVSxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBL0UsQ0FBa0YsQ0FBQyxRQUFuRixDQUFBO1lBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixHQUFzQjttQkFDdEIsTUFBTSxDQUFDLGtCQUFQLENBQTBCO2NBQUUsSUFBQSxFQUFNLE9BQVI7Y0FBaUIsS0FBQSxFQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBdkM7YUFBMUIsRUFBaUYsU0FBQyxPQUFEO3FCQUMvRSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQUE7dUJBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFmLEdBQTRCO2NBQS9CLENBQWQ7WUFEK0UsQ0FBakY7VUFQZ0I7VUFVbEIsaUJBQUEsR0FBb0IsU0FBQTttQkFDbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBUSxDQUFDLEdBQVQsQ0FDZjtjQUFBLEVBQUEsRUFBSSxJQUFKO2NBQ0EsY0FBQSxFQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLGNBRC9CO2NBRUEsZUFBQSxFQUFpQixNQUFNLENBQUMsT0FBTyxDQUFDLGVBRmhDO2NBR0EsWUFBQSxFQUFjLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFIN0I7YUFEZSxFQUtmLGVBTGU7VUFEQztVQVFwQixJQUFBLEdBQU8sWUFBWSxDQUFDO1VBQ3BCLEtBQUEsR0FBUTtpQkFDUixNQUFNLENBQUMsTUFBUCxDQUFjLFVBQWQsRUFBMEIsU0FBQyxPQUFEO1lBQ3hCLElBQUcsT0FBSDtjQUNFLElBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyx3QkFBWCxDQUFIO3VCQUNFLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixDQUFvQixDQUFDLElBQXJCLENBQTBCLFNBQUMsR0FBRDtrQkFDeEIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7b0JBQUUsS0FBQSxFQUFPLEdBQVQ7O3lCQUNqQixlQUFBLENBQUE7Z0JBRndCLENBQTFCLENBR0EsRUFBQyxLQUFELEVBSEEsQ0FHTyxTQUFDLEdBQUQ7a0JBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQyxHQUEzQzt5QkFDQSxpQkFBQSxDQUFBO2dCQUZLLENBSFAsRUFERjtlQUFBLE1BQUE7dUJBUUUsaUJBQUEsQ0FBQSxFQVJGO2VBREY7O1VBRHdCLENBQTFCLEVBckJGOztNQURlO0lBdEVuQixDQVppRTtHQUFuRTtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNZXNzYWdlc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ01lc3NhZ2VzJ1xuICAnY29uZmlnJ1xuICAnJHRpbWVvdXQnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsIE1lc3NhZ2VzLCBjb25maWcsICR0aW1lb3V0LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG5cbiAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gJ3JhdGluZydcblxuICAgICRzY29wZS5yZXNldE1zZ3MgPSAtPlxuICAgICAgbXNncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgICRzY29wZS5tc2dzID1cbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgZmluaXNoZWQ6IGZhbHNlXG4gICAgICAgIGxpc3Q6IE9iamVjdC52YWx1ZXMobXNncylcbiAgICAkc2NvcGUucmVzZXRNc2dzKClcblxuICAgICRzY29wZS5pY29uQ291bnQgPSAocmF0aW5nKSAtPlxuICAgICAgbmV3IEFycmF5KE1hdGgubWF4KDEsIE1hdGguYWJzKHJhdGluZykpKVxuXG4gICAgJHNjb3BlLmljb25TdHlsZSA9IChyYXRpbmcpIC0+XG4gICAgICBpY29uU3R5bGUgPSAnbmV1dHJhbCdcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ3Bvc2l0aXZlJ1xuICAgICAgZWxzZSBpZiByYXRpbmcgPCAwXG4gICAgICAgIGljb25TdHlsZSA9ICduZWdhdGl2ZSdcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmljb25DbGFzcyA9IChyYXRpbmcpIC0+XG4gICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24nXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tdGh1bWJzLXVwJ1xuICAgICAgZWxzZSBpZiByYXRpbmcgPCAwXG4gICAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tdGh1bWJzLWRvd24nXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcblxuICAgICRzY29wZS5maW5kID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUubXNncy5sb2FkaW5nXG4gICAgICAkc2NvcGUubXNncyA9ICRzY29wZS5tc2dzIHx8IFtdXG4gICAgICAkc2NvcGUubXNncy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgIyBHZXQgbGF0ZXN0IG1lc3NhZ2VzIGZyb20gaXBmcyBpbmRleFxuICAgICAgc2VhcmNoS2V5ID0gJydcbiAgICAgIGlmICRzY29wZS5tc2dzLmxpc3QubGVuZ3RoXG4gICAgICAgIHNlYXJjaEtleSA9ICRzY29wZS5tc2dzLmxpc3RbJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgIHAgPSAkc2NvcGUubWVzc2FnZUluZGV4LnNlYXJjaFRleHQoJycsICRzY29wZS5maWx0ZXJzLmxpbWl0LCBzZWFyY2hLZXksIHRydWUpXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICBtZXNzYWdlcyA9IFtdXG4gICAgICAgIGxvY2FsTWVzc2FnZXMgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxNZXNzYWdlcycpIG9yIHt9XG4gICAgICAgIGZvciBwYWlyIGluIHJlc1xuICAgICAgICAgIGlmIHBhaXIudmFsdWVcbiAgICAgICAgICAgIHYgPSBwYWlyLnZhbHVlXG4gICAgICAgICAgICB2LnNlYXJjaEtleSA9IHBhaXIua2V5XG4gICAgICAgICAgICBpZiBsb2NhbE1lc3NhZ2VzLmhhc093blByb3BlcnR5KHYuaGFzaClcbiAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsTWVzc2FnZXNbdi5oYXNoXVxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxNZXNzYWdlcycsIGxvY2FsTWVzc2FnZXMpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2godilcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VzXG4gICAgICBwLnRoZW4gKG1lc3NhZ2VzKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIG1lc3NhZ2VzXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5tc2dzLmxpc3QsIG1lc3NhZ2VzKVxuICAgICAgICBpZiBtZXNzYWdlcy5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDEgIyBidWdcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmxvYWRpbmcgPSBmYWxzZVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUucmVzZXRNc2dzKClcbiAgICAgICR0aW1lb3V0IC0+ICRyb290U2NvcGUuJGJyb2FkY2FzdCAnbXNnU2Nyb2xsQ2hlY2snXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBwcm9jZXNzUmVzcG9uc2UgPSAtPlxuICAgICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoWyRzY29wZS5tZXNzYWdlXSwge30sIHRydWUpXG4gICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAnTWVzc2FnZSAnICsgaGFzaFxuICAgICAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKCRzY29wZS5tZXNzYWdlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLmF1dGhvckdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KCRzY29wZS5tZXNzYWdlLmF1dGhvckVtYWlsIG9yICRzY29wZS5tZXNzYWdlLmRhdGEuYXV0aG9yWzBdWzFdKS50b1N0cmluZygpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50R3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50RW1haWwgb3IgJHNjb3BlLm1lc3NhZ2UuZGF0YS5yZWNpcGllbnRbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5oYXNoID0gaGFzaFxuICAgICAgICAgICRzY29wZS5nZXRJZGVudGl0eVByb2ZpbGUgeyB0eXBlOiAna2V5SUQnLCB2YWx1ZTogJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyX2tleWlkIH0sIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuXG4gICAgICAgIGdldE1lc3NhZ2VGcm9tQXBpID0gLT5cbiAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IE1lc3NhZ2VzLmdldFxuICAgICAgICAgICAgaWQ6IGhhc2hcbiAgICAgICAgICAgIHZpZXdwb2ludF9uYW1lOiAkc2NvcGUuZmlsdGVycy52aWV3cG9pbnRfbmFtZVxuICAgICAgICAgICAgdmlld3BvaW50X3ZhbHVlOiAkc2NvcGUuZmlsdGVycy52aWV3cG9pbnRfdmFsdWVcbiAgICAgICAgICAgIG1heF9kaXN0YW5jZTogJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgLCBwcm9jZXNzUmVzcG9uc2VcblxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHF1ZXJ5ID0gbnVsbFxuICAgICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICAgIGlmIGlzUmVhZHlcbiAgICAgICAgICAgIGlmIGhhc2gubWF0Y2ggL15RbVsxLTlBLVphLXpdezQwLDUwfSQvICMgbG9va3MgbGlrZSBhbiBpcGZzIGFkZHJlc3NcbiAgICAgICAgICAgICAgJHNjb3BlLmlwZnNHZXQoaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlID0geyAnandzJzogcmVzIH0gIyBzYW1lIGZvcm1hdCBhcyB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IE1lc3NhZ2VzLmdldFxuICAgICAgICAgICAgICAgIHByb2Nlc3NSZXNwb25zZSgpXG4gICAgICAgICAgICAgIC5jYXRjaCAoZXJyKSAtPiAjIGZhbGxiYWNrIGdvIGxvY2FsIGlmIGlwZnMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICdmYWlsZWQgdG8gZ2V0IG1zZyBmcm9tIGlwZnMnLCBlcnJcbiAgICAgICAgICAgICAgICBnZXRNZXNzYWdlRnJvbUFwaSgpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGdldE1lc3NhZ2VGcm9tQXBpKClcblxuICAgIHJldHVyblxuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope', '$rootScope', '$location', '$http', '$state', 'config', 'localStorageService', '$uibModal', '$window', '$q', function($scope, $rootScope, $location, $http, $state, config, localStorageService, $uibModal, $window, $q) {

      /*
      Persona.watch
        loggedInUser: Authentication.user.email
        onlogin: (assertion) ->
          $http.post('/auth/persona', assertion: assertion).then ->
            location.reload()
             * FIXME
                          onlogout: ->
       */
      var jws, previousState, previousStateParams, privateKey, scrollTo, token;
      $scope.authentication = {};
      $scope.localMessages = localStorageService.get('localMessages') || {};
      localStorageService.set('localMessages', $scope.localMessages);
      $scope.nodeInfo = {
        keyID: null
      };
      $scope.ipfsStorage = {};
      $scope.getIdKey = function(id) {
        if (Array.isArray(id)) {
          return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1]);
        } else {
          return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val);
        }
      };
      $scope.loginWithKey = function(privateKeyPEM) {
        var publicKeyHash, publicKeyHex;
        $scope.privateKey = KEYUTIL.getKeyFromPlainPrivatePKCS8PEM(privateKeyPEM);
        $scope.publicKey = new KJUR.crypto.ECDSA({
          'curve': 'secp256k1',
          'pub': $scope.privateKey.pubKeyHex
        });
        localStorageService.set('privateKeyPEM', privateKeyPEM);
        publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey));
        publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex));
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: publicKeyHash
        };
        if ($scope.loginModal) {
          return $scope.loginModal.close();
        }
      };
      privateKey = localStorageService.get('privateKeyPEM');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      }
      token = $location.search().token;
      if (token) {
        jws = KJUR.jws.JWS.parse(token).payloadObj;
        $scope.authentication.token = token;
        $scope.authentication.user = jws.user;
        localStorageService.set('token', token);
        previousState = localStorageService.get('state') || 'identities.list';
        previousStateParams = localStorageService.get('stateParams') || {};
        $state.go(previousState, previousStateParams);
      } else {
        token = localStorageService.get('token');
        if (token) {
          jws = KJUR.jws.JWS.parse(token).payloadObj;
          $scope.authentication.token = token;
          $scope.authentication.user = jws.user;
        }
      }
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
        list: []
      };
      $scope.phoneRegex = /^\+?\d+$/;
      $scope.ipfs = new Ipfs({
        init: true,
        EXPERIMENTAL: {
          pubsub: true
        },
        start: true,
        repo: 'ipfs-testing',
        config: {
          Bootstrap: ['/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd', '/dns4/sfo-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx', '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3', '/dns4/sfo-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z', '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM', '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu', '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm', '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64']
        }
      });
      $http.get('/api', {
        timeout: 2000
      }).then(function(res) {
        return $scope.nodeInfo = angular.extend($scope.nodeInfo, res.data);
      }, function(err) {
        return $scope.nodeInfo = {
          loginOptions: [true],
          keyID: null
        };
      });
      $scope.ipfs.on('ready', function() {
        console.log($scope.ipfs);
        $window.ipfs = $scope.ipfs;
        return $scope.ipfs.pubsub.subscribe('identifi', function(msg) {
          var hash, localMessages;
          msg = {
            jws: $scope.ipfs.types.Buffer(msg.data).toString()
          };
          hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(msg.jws));
          console.log('identifi message received', msg, hash);
          localMessages = localStorageService.get('localMessages');
          $scope.processMessages([msg]);
          localMessages[hash] = msg;
          return localStorageService.set('localMessages', localMessages);
        });
      });
      $scope.initIpfsIndexes = function() {
        var indexRoot;
        indexRoot = '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs';
        console.log('Loading index from https://identi.fi:', indexRoot);
        $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage('https://identi.fi');
        $q.all([$window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_distance', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_searchkey', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/messages_by_timestamp', $scope.ipfsStorage)])["catch"](function(e) {
          console.log('Loading index from https://identi.fi failed', e);
          console.log('Loading index from ipfs.io');
          $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage('https://ipfs.io');
          return $q.all([$window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_distance', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_searchkey', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/messages_by_timestamp', $scope.ipfsStorage)]);
        }).then(function(results) {
          console.log('Got index', results);
          $scope.identitiesByDistance = results[0];
          $scope.identitiesBySearchKey = results[1];
          $scope.messageIndex = results[2];
          return $scope.apiReady = true;
        });
        return $http.get('https://identi.fi' + indexRoot + '/info')["catch"](function(err) {
          return $http.get('https://ipfs.io' + indexRoot + '/info');
        }).then(function(res) {
          return $scope.nodeInfo.profile = $scope.profileFromData(res.data, ['keyID', res.data.keyID]);
        })["catch"](function(e) {
          return console.log('initialization failed:', e);
        });
      };
      $scope.initIpfsIndexes();
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri, getJson) {
        var jsIpfsGet;
        jsIpfsGet = function() {
          console.log('Getting from js-ipfs', uri);
          return $scope.ipfs.files.cat(uri).then(function(stream) {
            return new Promise(function(resolve, reject) {
              stream.on('data', function(file) {
                file = $scope.ipfs.types.Buffer(file).toString();
                if (getJson) {
                  file = JSON.parse(file);
                }
                return resolve(file);
              });
              return stream.on('error', function(error) {
                return reject(error);
              });
            });
          });
        };
        if ($scope.ipfsStorage.apiRoot) {
          return $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + uri).then(function(res) {
            return res.data;
          })["catch"](function() {
            return jsIpfsGet();
          });
        } else {
          return jsIpfsGet();
        }
      };
      $scope.newMessage = {
        rating: 1,
        comment: ''
      };
      $scope.newVerification = {
        type: '',
        value: ''
      };
      $scope.createMessage = function(event, params, id) {
        var hash, header, message, options, payload, publicKeyHash, publicKeyHex;
        if (event) {
          event.stopPropagation();
        }
        message = {
          context: 'identifi'
        };
        if (params.type === 'rating') {
          angular.extend(message, {
            maxRating: 3,
            minRating: -3
          });
        }
        angular.extend(message, params);
        options = {};
        if ($scope.privateKey) {
          publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey));
          publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex));
          message.author = [['keyID', publicKeyHash]];
          message.timestamp = new Date().toISOString();
          header = JSON.stringify({
            alg: 'ES256',
            kid: publicKeyHex
          });
          payload = JSON.stringify(message);
          jws = KJUR.jws.JWS.sign("ES256", header, payload, $scope.privateKey);
          hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(jws));
          message = {
            jws: jws,
            hash: hash
          };
          $scope.ipfs.files.add(new $scope.ipfs.types.Buffer(jws)).then(function(i) {
            return $scope.ipfs.pubsub.publish('identifi', new $scope.ipfs.types.Buffer(jws));
          });
        } else {
          options = {
            headers: {
              'Authorization': 'Bearer ' + $scope.authentication.token
            }
          };
        }
        return $http.post('/api/messages', message, options)["catch"](function() {
          return $http.post('https://identi.fi/api/messages', message, options);
        }).then((function(response) {
          console.log(response);
          $scope.newMessage.comment = '';
          $scope.newMessage.rating = 1;
          $scope.newVerification.type = '';
          $scope.newVerification.value = '';
          $scope.$root.$broadcast('MessageAdded', {
            message: response.data,
            id: id
          });
          if (response.data.ipfsIndexRoot) {
            $scope.getIpfsIndexes($scope.ipfsStorage.apiRoot + '/ipfs/' + response.data.ipfsIndexRoot);
          }
        }), function(errorResponse) {
          $scope.error = errorResponse.data || JSON.stringify(errorResponse);
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.max_distance = -1;
      };
      $scope.openLoginModal = function() {
        $scope.loginModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/main/login.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.loginModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart', function() {
          return $scope.loginModal.close();
        });
      };
      $scope.generateKey = function() {
        var keypair;
        keypair = KEYUTIL.generateKeypair('EC', 'secp256k1');
        $scope.privateKey = keypair.prvKeyObj;
        $scope.publicKey = keypair.pubKeyObj;
        return $scope.privateKeyPEM = KEYUTIL.getPEM($scope.privateKey, 'PKCS8PRV');
      };
      $scope.downloadKey = function() {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI($scope.privateKeyPEM);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'identifi_private_key.txt';
        return hiddenElement.click();
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
        $scope.privateKeyPEM = '';
        $scope.authentication = {};
        localStorageService.clearAll();
        $state.go('identities.list');
        $scope.privateKey = null;
        return $scope.publicKey = null;
      };
      $scope.msgFilter = function(value, index, array) {
        var data, neutralRating;
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
          if ($scope.filters.max_distance === 0 && typeof value.distance !== 'number') {
            return false;
          } else if ($scope.filters.max_distance > 0 && value.distance > $scope.filters.max_distance) {
            return false;
          }
        }
        return true;
      };
      $scope.removeFocus = function(event) {
        return event.currentTarget.blur();
      };
      $scope.logoClicked = function() {
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
        return msg.strData = JSON.stringify(showRawData, void 0, 2);
      };
      $scope.profileFromData = function(data, fallbackId) {
        var k, ref, v;
        if (data.attrs && data.attrs.length) {
          data.dist = data.attrs[0].dist + 0;
          data.pos = data.attrs[0].pos;
          data.neg = data.attrs[0].neg;
          ref = data.attrs;
          for (k in ref) {
            v = ref[k];
            switch (v.name) {
              case 'name':
                if (!data.name) {
                  data.name = v.val;
                }
                break;
              case 'nickname':
                if (!data.nickname) {
                  data.nickname = v.val;
                }
                break;
              case 'email':
                data.gravatar = CryptoJS.MD5(v.val).toString();
            }
          }
        }
        if (data.nickname && !data.name) {
          data.name = data.nickname;
        }
        if (!data.name) {
          data.name = fallbackId.value;
        }
        if (!data.gravatar) {
          data.gravatar = CryptoJS.MD5(fallbackId.value).toString();
        }
        return data;
      };
      $scope.getIdentityProfile = function(id, callback) {
        return $scope.identitiesBySearchKey.searchText(encodeURIComponent(id.value) + ':' + encodeURIComponent(id.type), 1).then(function(res) {
          if (res.length) {
            return $scope.ipfsGet(res[0].value, true).then(function(res) {
              return {
                data: res
              };
            });
          } else {
            return {
              data: {}
            };
          }
        }).then(function(res) {
          var profile;
          profile = $scope.profileFromData(res.data, id);
          if (callback) {
            return callback(profile);
          } else {
            return profile;
          }
        });
      };
      $scope.openMessage = function(event, message, size) {
        var modalInstance, t;
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        if (!$scope.hasValidSignature(message)) {
          return;
        }
        $scope.getIdentityProfile({
          type: 'keyID',
          value: $scope.message.signer_keyid
        }, function(profile) {
          return $scope.$apply(function() {
            return $scope.message.verifiedBy = profile;
          });
        });
        modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/messages/show.modal.html',
          size: size,
          scope: $scope
        });
        modalInstance.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart', function() {
          return modalInstance.close();
        });
      };
      $scope.filters = $scope.filters || config.defaultFilters;

      /*
      $scope.authentication = Authentication
      if Authentication.user
        if Authentication.user.provider == 'persona'
          Authentication.user.idType = 'email'
        else
          Authentication.user.idType = 'url'
        switch Authentication.user.provider
          when 'persona'
            Authentication.user.idValue = Authentication.user.email
          when 'twitter'
            Authentication.user.idValue = 'https://twitter.com/' + Authentication.user.username
          else
            Authentication.user.idValue = Authentication.user.providerData.link
            break
       */
      $scope.isCollapsed = false;
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.hasValidSignature = function(msg, parsedJws) {
        var isValid, pem, pubKey;
        parsedJws = parsedJws || KJUR.jws.JWS.parse(msg.jws);
        pem = KJUR.asn1.ASN1Util.getPEMStringFromHex(parsedJws.headerObj.kid, "PUBLIC KEY");
        pubKey = KEYUTIL.getKey(pem);
        isValid = KJUR.jws.JWS.verify(msg.jws, pubKey, ['ES256']);
        if (isValid) {
          console.log('valid signature');
        } else {
          console.error('invalid signature');
        }
        return isValid;
      };
      $scope.processMessages = function(messages, msgOptions, verifySignature) {
        var processMessage;
        processMessage = function(msg) {
          var alpha, i, index, keyHash, maxRatingDiff, minRatingDiff, neutralRating, parsedJws, rating, ref, ref1, signedData, smallestIndex;
          parsedJws = KJUR.jws.JWS.parse(msg.jws);
          msg.data = parsedJws.payloadObj;
          if (!msg.signer_keyid) {
            keyHash = CryptoJS.SHA256(parsedJws.headerObj.kid);
            msg.signer_keyid = CryptoJS.enc.Base64.stringify(keyHash);
          }
          if (verifySignature && !$scope.hasValidSignature(msg, parsedJws)) {
            return;
          }
          msg.gravatar = CryptoJS.MD5(msg.author_email || msg.data.author[0][1]).toString();
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
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              return msg.hasSuccess = 'has-success';
            case 'connection':
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              return msg.hasSuccess = 'has-success';
            case 'unverify_identity':
              msg.iconStyle = 'glyphicon glyphicon-remove negative';
              msg.hasSuccess = 'has-error';
              return msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
            case 'rating':
              rating = signedData.rating;
              neutralRating = (signedData.minRating + signedData.maxRating) / 2;
              maxRatingDiff = signedData.maxRating - neutralRating;
              minRatingDiff = signedData.minRating - neutralRating;
              if (rating > neutralRating) {
                msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive';
                msg.iconCount = maxRatingDiff < 2 ? msg.iconCount : new Array(Math.ceil(3 * rating / maxRatingDiff));
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
        };
        return angular.forEach(messages, function(msg, key) {
          var k, v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          if (msg.ipfs_hash && !msg.jws) {
            return $scope.ipfsGet(msg.ipfs_hash).then(function(res) {
              msg.jws = res;
              return processMessage(msg);
            });
          } else {
            return processMessage(msg);
          }
        });
      };
      $scope.$on('$stateChangeSuccess', function() {
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
            $window.scrollTo(0, pos.top - 60);
          } else if (pos.bottom > $window.pageYOffset + ($window.innerHeight || document.documentElement.clientHeight)) {
            $window.scrollTo(0, pos.bottom - ($window.innerHeight || document.documentElement.clientHeight) + 15);
          }
        }
      };
      $scope.searchRequest = null;
      $scope.search = function(query, limit) {
        var cursor, searchKey;
        $scope.ids.loading = true;
        $scope.identitiesByHash = {};
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        if (searchKey !== $scope.previousSearchKey) {
          $scope.ids.list = [];
          $scope.ids.finished = false;
          $scope.identitiesByHash = {};
        }
        $scope.previousSearchKey = searchKey;
        limit = limit || 50;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].searchKey;
        }
        if (searchKey.length) {
          $scope.searchRequest = $scope.identitiesBySearchKey.searchText(searchKey, limit, cursor);
        } else {
          $scope.searchRequest = $scope.identitiesByDistance.searchText(searchKey, limit, cursor);
        }
        $scope.searchRequest = $scope.searchRequest.then(function(identities) {
          var queries;
          searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
          if (searchKey !== $scope.previousSearchKey) {
            return;
          }
          $scope.ids.list = $scope.ids.list || [];
          queries = [];
          angular.forEach(identities, function(row) {
            var p;
            if (!(row.value && row.value.length && !$scope.identitiesByHash[row.value])) {
              return;
            }
            $scope.identitiesByHash[row.value] = true;
            searchKey = row.key;
            p = $scope.ipfsGet(row.value, true).then(function(row) {
              var identity, smallestIndex;
              identity = {
                searchKey: searchKey
              };
              smallestIndex = 1000;
              angular.forEach(row.attrs, function(attr) {
                var dist, index;
                dist = parseInt(attr.dist);
                if (!isNaN(dist) && (identity.distance === void 0 || ((0 <= dist && dist < identity.distance)))) {
                  identity.distance = dist;
                }
                if (identity.pos === void 0 && parseInt(attr.pos) > 0) {
                  identity.pos = attr.pos;
                }
                if (identity.neg === void 0 && parseInt(attr.neg) > 0) {
                  identity.neg = attr.neg;
                }
                switch (attr.name) {
                  case 'email':
                    identity.email = attr.val;
                    identity.gravatar = CryptoJS.MD5(attr.val).toString();
                    break;
                  case 'name':
                    identity.name = attr.val;
                    break;
                  case 'nickname':
                    identity.nickname = attr.val;
                    if (!identity.name) {
                      identity.name = attr.val;
                    }
                    break;
                  case 'bitcoin':
                  case 'bitcoin_address':
                    identity.bitcoin = attr.val;
                    break;
                  case 'url':
                    if (attr.val.indexOf('twitter.com/') > -1) {
                      identity.twitter = attr.val.split('twitter.com/')[1];
                    }
                    if (attr.val.indexOf('facebook.com/') > -1) {
                      identity.facebook = attr.val.split('facebook.com/')[1];
                    }
                    if (attr.val.indexOf('plus.google.com/') > -1) {
                      identity.googlePlus = attr.val.split('plus.google.com/')[1];
                    }
                }
                index = config.uniqueAttributeTypes.indexOf(attr.name);
                if (!identity.linkTo) {
                  identity.linkTo = {
                    type: attr.name,
                    value: attr.val
                  };
                }
                if (index > -1 && index < smallestIndex) {
                  identity.linkTo = {
                    type: attr.name,
                    value: attr.val
                  };
                  smallestIndex = index;
                }
                if (!identity.gravatar) {
                  return identity.gravatar = CryptoJS.MD5(attr.val).toString();
                }
              });
              if (!identity.name) {
                identity.name = row.attrs[0].val;
              }
              $scope.ids.list.push(identity);
              return $scope.ids.list[0].active = true;
            });
            return queries.push(p);
          });
          if (identities.length > 0) {
            $scope.ids.activeKey = 0;
          }
          if (identities.length < limit) {
            $scope.ids.finished = true;
          }
          return $q.all(queries);
        });
        return $scope.searchRequest.then(function() {
          $scope.$apply(function() {
            return $scope.ids.loading = false;
          });
          return $scope.ids.list;
        });
      };
      $scope.searchKeydown = function(event) {
        var el, id, wait;
        switch ((event ? event.which : -1)) {
          case 38:
            event.preventDefault();
            if ($scope.ids.activeKey > 0) {
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.list[$scope.ids.activeKey - 1].active = true;
              $scope.ids.activeKey--;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 40:
            event.preventDefault();
            if ($scope.ids.activeKey < ($scope.ids.list.length || 0) - 1) {
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.list[$scope.ids.activeKey + 1].active = true;
              $scope.ids.activeKey++;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 13:
            event.preventDefault();
            id = $scope.ids.list[$scope.ids.activeKey];
            return $state.go('identities.show', {
              type: id.linkTo.type,
              value: id.linkTo.value
            });
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
            }), 300);
            $scope.timer = wait;
            break;
        }
      };
      return $scope.dropdownSearchSelect = function(item) {
        $state.go('identities.show', {
          type: item.linkTo.type,
          value: item.linkTo.value
        });
        return $scope.query.term = '';
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFlN0QsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixTQUFyQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyxNQUEvQyxFQUNBLG1CQURBLEVBQ3FCLFNBRHJCLEVBQ2dDLE9BRGhDLEVBQ3lDLEVBRHpDOztBQUVFOzs7Ozs7Ozs7QUFBQSxVQUFBO01BV0EsTUFBTSxDQUFDLGNBQVAsR0FBd0I7TUFDeEIsTUFBTSxDQUFDLGFBQVAsR0FBdUIsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztNQUNuRSxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxNQUFNLENBQUMsYUFBaEQ7TUFFQSxNQUFNLENBQUMsUUFBUCxHQUFrQjtRQUFFLEtBQUEsRUFBTyxJQUFUOztNQUNsQixNQUFNLENBQUMsV0FBUCxHQUFxQjtNQUVyQixNQUFNLENBQUMsUUFBUCxHQUFrQixTQUFDLEVBQUQ7UUFDaEIsSUFBRyxLQUFLLENBQUMsT0FBTixDQUFjLEVBQWQsQ0FBSDtBQUNFLGlCQUFPLGtCQUFBLENBQW1CLEVBQUcsQ0FBQSxDQUFBLENBQXRCLENBQUEsR0FBNEIsR0FBNUIsR0FBa0Msa0JBQUEsQ0FBbUIsRUFBRyxDQUFBLENBQUEsQ0FBdEIsRUFEM0M7U0FBQSxNQUFBO0FBR0UsaUJBQU8sa0JBQUEsQ0FBbUIsRUFB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R0FBb0I7TUFGUTtJQWxsQmhDLENBZjZEO0dBQS9EO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRxJ1xuXG4gICMnQXV0aGVudGljYXRpb24nXG4gICMnTWVudXMnXG4gICMnUGVyc29uYSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsICR1aWJNb2RhbCwgJHdpbmRvdywgJHEpIC0+ICMgQXV0aGVudGljYXRpb24sIE1lbnVzLCBQZXJzb25hXG4gICAgIyMjXG4gICAgUGVyc29uYS53YXRjaFxuICAgICAgbG9nZ2VkSW5Vc2VyOiBBdXRoZW50aWNhdGlvbi51c2VyLmVtYWlsXG4gICAgICBvbmxvZ2luOiAoYXNzZXJ0aW9uKSAtPlxuICAgICAgICAkaHR0cC5wb3N0KCcvYXV0aC9wZXJzb25hJywgYXNzZXJ0aW9uOiBhc3NlcnRpb24pLnRoZW4gLT5cbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICMgRklYTUVcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubG9nb3V0OiAtPlxuICAgICMjI1xuXG4gICAgIyBzZXQgYXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fSAjIEF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmxvY2FsTWVzc2FnZXMgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxNZXNzYWdlcycpIG9yIHt9XG4gICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCAkc2NvcGUubG9jYWxNZXNzYWdlcylcblxuICAgICRzY29wZS5ub2RlSW5mbyA9IHsga2V5SUQ6IG51bGwgfVxuICAgICRzY29wZS5pcGZzU3RvcmFnZSA9IHt9XG5cbiAgICAkc2NvcGUuZ2V0SWRLZXkgPSAoaWQpIC0+XG4gICAgICBpZiBBcnJheS5pc0FycmF5KGlkKVxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkWzBdKSArICc6JyArIGVuY29kZVVSSUNvbXBvbmVudChpZFsxXSlcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZC5uYW1lKSArICc6JyArIGVuY29kZVVSSUNvbXBvbmVudChpZC52YWwpXG5cbiAgICAkc2NvcGUubG9naW5XaXRoS2V5ID0gKHByaXZhdGVLZXlQRU0pIC0+XG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IEtFWVVUSUwuZ2V0S2V5RnJvbVBsYWluUHJpdmF0ZVBLQ1M4UEVNKHByaXZhdGVLZXlQRU0pXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbmV3IEtKVVIuY3J5cHRvLkVDRFNBKHsnY3VydmUnOiAnc2VjcDI1NmsxJywgJ3B1Yic6ICRzY29wZS5wcml2YXRlS2V5LnB1YktleUhleH0pXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgncHJpdmF0ZUtleVBFTScsIHByaXZhdGVLZXlQRU0pXG4gICAgICBwdWJsaWNLZXlIZXggPSBLRVlVVElMLmdldEhleEZyb21QRU0oS0VZVVRJTC5nZXRQRU0oJHNjb3BlLnB1YmxpY0tleSkpXG4gICAgICBwdWJsaWNLZXlIYXNoID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoQ3J5cHRvSlMuU0hBMjU2KHB1YmxpY0tleUhleCkpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9XG4gICAgICAgIGlkVHlwZTogJ2tleUlEJ1xuICAgICAgICBpZFZhbHVlOiBwdWJsaWNLZXlIYXNoXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpIGlmICRzY29wZS5sb2dpbk1vZGFsXG5cbiAgICBwcml2YXRlS2V5ID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3ByaXZhdGVLZXlQRU0nKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcbiAgICB0b2tlbiA9ICRsb2NhdGlvbi5zZWFyY2goKS50b2tlblxuICAgIGlmIHRva2VuXG4gICAgICBqd3MgPSBLSlVSLmp3cy5KV1MucGFyc2UodG9rZW4pLnBheWxvYWRPYmpcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi50b2tlbiA9IHRva2VuXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9IGp3cy51c2VyXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgIHByZXZpb3VzU3RhdGUgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnc3RhdGUnKSB8fCAnaWRlbnRpdGllcy5saXN0J1xuICAgICAgcHJldmlvdXNTdGF0ZVBhcmFtcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdzdGF0ZVBhcmFtcycpIHx8IHt9XG4gICAgICAkc3RhdGUuZ28ocHJldmlvdXNTdGF0ZSwgcHJldmlvdXNTdGF0ZVBhcmFtcylcbiAgICBlbHNlXG4gICAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicpXG4gICAgICBpZiB0b2tlblxuICAgICAgICBqd3MgPSBLSlVSLmp3cy5KV1MucGFyc2UodG9rZW4pLnBheWxvYWRPYmpcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnRva2VuID0gdG9rZW5cbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPSBqd3MudXNlclxuXG4gICAgJHNjb3BlLnF1ZXJ5ID0ge31cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gJydcbiAgICAkc2NvcGUuaWRzID0geyBsaXN0OiBbXSB9XG4gICAgJHNjb3BlLnBob25lUmVnZXggPSAvXlxcKz9cXGQrJC9cblxuICAgICRzY29wZS5pcGZzID0gbmV3IElwZnMoXG4gICAgICBpbml0OiB0cnVlXG4gICAgICBFWFBFUklNRU5UQUw6IHtcbiAgICAgICAgcHVic3ViOiB0cnVlXG4gICAgICB9LFxuICAgICAgc3RhcnQ6IHRydWVcbiAgICAgIHJlcG86ICdpcGZzLXRlc3RpbmcnXG4gICAgICBjb25maWc6IEJvb3RzdHJhcDogW1xuICAgICAgICAnL2RuczQvYW1zLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MZXIyNjVOUmdTcDJMQTNkUGFleWtpUzFKNkRpZlRDODhmNXVWUUtOQWQnXG4gICAgICAgICcvZG5zNC9zZm8tMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xqdTZtN3hUaDNEdW9rdlQzODg2UVJZcXhBemIxa1NoYWFuSmdXMzZ5eCdcbiAgICAgICAgJy9kbnM0L2xvbi0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTE1lV3FCN1lHVkxKTjNwTkxRcG1tRWszNXY2d1l0c01HTHpTcjVRQlUzJ1xuICAgICAgICAnL2RuczQvc2ZvLTIuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MblNHY2NGdVpRSnpSYWRIbjk1VzJDclNGbVp1VGREV1A4SFhhSGNhOXonXG4gICAgICAgICcvZG5zNC9zZm8tMy5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xQcHB1QnRRU0d3S0RaVDJNNzNVTHBqdmZkM2FaNmhhNG9GR0wxS3JHTSdcbiAgICAgICAgJy9kbnM0L3NncC0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTFNhZlRNQnNQS2FkVEVnYVhjdERRVmNxTjg4Q05MSFhNa1ROd01LUG51J1xuICAgICAgICAnL2RuczQvbnljLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MdWVSNHhCZVViWTlXWjl4R1VVeHVuYktXY3JORlREQWFkUUptb2NuV20nXG4gICAgICAgICcvZG5zNC9ueWMtMi5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xWNEJibTUxak05QzRnRFlaUTlDeTNVNmFYTUpEQWJ6Z3UyZnphRHM2NCdcbiAgICAgIF0pXG5cbiAgICAjIEdldCBwb3NzaWJsZSBsb2dpbiBvcHRpb25zXG4gICAgJGh0dHAuZ2V0KCcvYXBpJywgeyB0aW1lb3V0OiAyMDAwIH0pXG4gICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICRzY29wZS5ub2RlSW5mbyA9IGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5ub2RlSW5mbywgcmVzLmRhdGFcbiAgICAsIChlcnIpIC0+XG4gICAgICAkc2NvcGUubm9kZUluZm8gPSB7IGxvZ2luT3B0aW9uczogW3RydWVdLCBrZXlJRDogbnVsbCB9XG5cbiAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgY29uc29sZS5sb2cgJHNjb3BlLmlwZnNcbiAgICAgICR3aW5kb3cuaXBmcyA9ICRzY29wZS5pcGZzXG4gICAgICAkc2NvcGUuaXBmcy5wdWJzdWIuc3Vic2NyaWJlICdpZGVudGlmaScsIChtc2cpIC0+XG4gICAgICAgIG1zZyA9IHsgandzOiAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIobXNnLmRhdGEpLnRvU3RyaW5nKCkgfVxuICAgICAgICBoYXNoID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoQ3J5cHRvSlMuU0hBMjU2KG1zZy5qd3MpKVxuICAgICAgICBjb25zb2xlLmxvZyAnaWRlbnRpZmkgbWVzc2FnZSByZWNlaXZlZCcsIG1zZywgaGFzaFxuICAgICAgICBsb2NhbE1lc3NhZ2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFttc2ddKVxuICAgICAgICBsb2NhbE1lc3NhZ2VzW2hhc2hdwqA9IG1zZ1xuICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxNZXNzYWdlcycsIGxvY2FsTWVzc2FnZXMpXG4gICAgICAjJHNjb3BlLmluaXRJcGZzSW5kZXhlcygpXG5cbiAgICAkc2NvcGUuaW5pdElwZnNJbmRleGVzID0gLT5cbiAgICAgIGluZGV4Um9vdCA9ICcvaXBucy9RbWJiMURSd2Q3NXJaazVUb3RUWEpZekRTSkw2QmFOVDFEQVE2VmJLY0tMaGJzJ1xuICAgICAgY29uc29sZS5sb2cgJ0xvYWRpbmcgaW5kZXggZnJvbSBodHRwczovL2lkZW50aS5maTonLCBpbmRleFJvb3RcbiAgICAgICRzY29wZS5pcGZzU3RvcmFnZSA9IG5ldyAkd2luZG93Lm1lcmtsZUJ0cmVlLklQRlNHYXRld2F5U3RvcmFnZSgnaHR0cHM6Ly9pZGVudGkuZmknKVxuICAgICAgJHEuYWxsKFtcbiAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2goaW5kZXhSb290ICsgJy9pZGVudGl0aWVzX2J5X2Rpc3RhbmNlJywgJHNjb3BlLmlwZnNTdG9yYWdlKSxcbiAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2goaW5kZXhSb290ICsgJy9pZGVudGl0aWVzX2J5X3NlYXJjaGtleScsICRzY29wZS5pcGZzU3RvcmFnZSksXG4gICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKGluZGV4Um9vdCArICcvbWVzc2FnZXNfYnlfdGltZXN0YW1wJywgJHNjb3BlLmlwZnNTdG9yYWdlKSxcbiAgICAgIF0pXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdMb2FkaW5nIGluZGV4IGZyb20gaHR0cHM6Ly9pZGVudGkuZmkgZmFpbGVkJywgZVxuICAgICAgICBjb25zb2xlLmxvZyAnTG9hZGluZyBpbmRleCBmcm9tIGlwZnMuaW8nXG4gICAgICAgICRzY29wZS5pcGZzU3RvcmFnZSA9IG5ldyAkd2luZG93Lm1lcmtsZUJ0cmVlLklQRlNHYXRld2F5U3RvcmFnZSgnaHR0cHM6Ly9pcGZzLmlvJylcbiAgICAgICAgJHEuYWxsKFtcbiAgICAgICAgICAkd2luZG93Lm1lcmtsZUJ0cmVlLk1lcmtsZUJUcmVlLmdldEJ5SGFzaChpbmRleFJvb3QgKyAnL2lkZW50aXRpZXNfYnlfZGlzdGFuY2UnLCAkc2NvcGUuaXBmc1N0b3JhZ2UpLFxuICAgICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKGluZGV4Um9vdCArICcvaWRlbnRpdGllc19ieV9zZWFyY2hrZXknLCAkc2NvcGUuaXBmc1N0b3JhZ2UpLFxuICAgICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKGluZGV4Um9vdCArICcvbWVzc2FnZXNfYnlfdGltZXN0YW1wJywgJHNjb3BlLmlwZnNTdG9yYWdlKSxcbiAgICAgICAgXSlcbiAgICAgIC50aGVuIChyZXN1bHRzKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnR290IGluZGV4JywgcmVzdWx0c1xuICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5RGlzdGFuY2UgPSByZXN1bHRzWzBdXG4gICAgICAgICRzY29wZS5pZGVudGl0aWVzQnlTZWFyY2hLZXkgPSByZXN1bHRzWzFdXG4gICAgICAgICRzY29wZS5tZXNzYWdlSW5kZXggPSByZXN1bHRzWzJdXG4gICAgICAgICRzY29wZS5hcGlSZWFkeSA9IHRydWVcblxuICAgICAgJGh0dHAuZ2V0ICdodHRwczovL2lkZW50aS5maScgKyBpbmRleFJvb3QgKyAnL2luZm8nXG4gICAgICAuY2F0Y2ggKGVycikgLT5cbiAgICAgICAgJGh0dHAuZ2V0ICdodHRwczovL2lwZnMuaW8nICsgaW5kZXhSb290ICsgJy9pbmZvJ1xuICAgICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICAgJHNjb3BlLm5vZGVJbmZvLnByb2ZpbGUgPSAkc2NvcGUucHJvZmlsZUZyb21EYXRhKHJlcy5kYXRhLCBbJ2tleUlEJywgcmVzLmRhdGEua2V5SURdKVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnaW5pdGlhbGl6YXRpb24gZmFpbGVkOicsIGVcblxuICAgICRzY29wZS5pbml0SXBmc0luZGV4ZXMoKVxuXG4gICAgJHNjb3BlLnNldFBhZ2VUaXRsZSA9ICh0aXRsZSkgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJ0lkZW50aWZpJ1xuICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSArPSAnIC0gJyArIHRpdGxlXG5cbiAgICAkc2NvcGUuaXBmc0dldCA9ICh1cmksIGdldEpzb24pIC0+XG4gICAgICBqc0lwZnNHZXQgPSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnR2V0dGluZyBmcm9tIGpzLWlwZnMnLCB1cmlcbiAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuY2F0KHVyaSkudGhlbiAoc3RyZWFtKSAtPlxuICAgICAgICAgIG5ldyBQcm9taXNlIChyZXNvbHZlLCByZWplY3QpIC0+XG4gICAgICAgICAgICBzdHJlYW0ub24gJ2RhdGEnLCAoZmlsZSkgLT5cbiAgICAgICAgICAgICAgZmlsZSA9ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihmaWxlKS50b1N0cmluZygpXG4gICAgICAgICAgICAgIGZpbGUgPSBKU09OLnBhcnNlKGZpbGUpIGlmIGdldEpzb25cbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlKVxuICAgICAgICAgICAgc3RyZWFtLm9uICdlcnJvcicsIChlcnJvcikgLT5cbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuXG4gICAgICBpZiAkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdFxuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290ICsgJy9pcGZzLycgKyB1cmkpXG4gICAgICAgIC50aGVuIChyZXMpIC0+IHJlcy5kYXRhXG4gICAgICAgIC5jYXRjaCAtPiBqc0lwZnNHZXQoKVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4ganNJcGZzR2V0KClcblxuICAgICRzY29wZS5uZXdNZXNzYWdlID1cbiAgICAgIHJhdGluZzogMVxuICAgICAgY29tbWVudDogJydcbiAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJydcbiAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZVxuICAgICRzY29wZS5jcmVhdGVNZXNzYWdlID0gKGV2ZW50LCBwYXJhbXMsIGlkKSAtPlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlIG9iamVjdFxuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGNvbnRleHQ6ICdpZGVudGlmaSdcblxuICAgICAgaWYgcGFyYW1zLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgYW5ndWxhci5leHRlbmQgbWVzc2FnZSxcbiAgICAgICAgICBtYXhSYXRpbmc6IDNcbiAgICAgICAgICBtaW5SYXRpbmc6IC0zXG4gICAgICBhbmd1bGFyLmV4dGVuZCBtZXNzYWdlLCBwYXJhbXNcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgaWYgJHNjb3BlLnByaXZhdGVLZXlcbiAgICAgICAgcHVibGljS2V5SGV4ID0gS0VZVVRJTC5nZXRIZXhGcm9tUEVNKEtFWVVUSUwuZ2V0UEVNKCRzY29wZS5wdWJsaWNLZXkpKVxuICAgICAgICBwdWJsaWNLZXlIYXNoID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoQ3J5cHRvSlMuU0hBMjU2KHB1YmxpY0tleUhleCkpXG4gICAgICAgIG1lc3NhZ2UuYXV0aG9yID0gW1sna2V5SUQnLCBwdWJsaWNLZXlIYXNoXV1cbiAgICAgICAgbWVzc2FnZS50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgaGVhZGVyID0gSlNPTi5zdHJpbmdpZnkoeyBhbGc6ICdFUzI1NicsIGtpZDogcHVibGljS2V5SGV4IH0pXG4gICAgICAgIHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKVxuICAgICAgICBqd3MgPSBLSlVSLmp3cy5KV1Muc2lnbihcIkVTMjU2XCIsIGhlYWRlciwgcGF5bG9hZCwgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIGhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYoandzKSlcbiAgICAgICAgbWVzc2FnZSA9IHsgandzOiBqd3MsIGhhc2g6IGhhc2ggfVxuICAgICAgICAkc2NvcGUuaXBmcy5maWxlcy5hZGQobmV3ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihqd3MpKS50aGVuIChpKSAtPlxuICAgICAgICAgICRzY29wZS5pcGZzLnB1YnN1Yi5wdWJsaXNoKCdpZGVudGlmaScsIG5ldyAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoandzKSlcbiAgICAgIGVsc2VcbiAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgaGVhZGVyczpcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnRva2VuXG5cbiAgICAgICRodHRwLnBvc3QoJy9hcGkvbWVzc2FnZXMnLCBtZXNzYWdlLCBvcHRpb25zKVxuICAgICAgLmNhdGNoIC0+XG4gICAgICAgICRodHRwLnBvc3QoJ2h0dHBzOi8vaWRlbnRpLmZpL2FwaS9tZXNzYWdlcycsIG1lc3NhZ2UsIG9wdGlvbnMpXG4gICAgICAudGhlbiAoKHJlc3BvbnNlKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyByZXNwb25zZVxuICAgICAgICAjIENsZWFyIGZvcm0gZmllbGRzXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLmNvbW1lbnQgPSAnJ1xuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5yYXRpbmcgPSAxXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUgPSAnJ1xuICAgICAgICAkc2NvcGUuJHJvb3QuJGJyb2FkY2FzdCAnTWVzc2FnZUFkZGVkJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhXG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgICRzY29wZS5nZXRJcGZzSW5kZXhlcyAkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdCArICcvaXBmcy8nICsgcmVzcG9uc2UuZGF0YS5pcGZzSW5kZXhSb290IGlmIHJlc3BvbnNlLmRhdGEuaXBmc0luZGV4Um9vdFxuICAgICAgICByZXR1cm5cbiAgICAgICksIChlcnJvclJlc3BvbnNlKSAtPlxuICAgICAgICAkc2NvcGUuZXJyb3IgPSBlcnJvclJlc3BvbnNlLmRhdGEgfHwgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXNwb25zZSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuYWRkQXR0cmlidXRlID0gLT5cbiAgICAgICRsb2NhdGlvbi5wYXRoICcjL2lkZW50aXRpZXMvY3JlYXRlLycgKyAkc2NvcGUucXVlcnkudGVybVxuXG4gICAgJHNjb3BlLmxvZ2luID0gLT5cbiAgICAgICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9IC0xICMgYmVjYXVzZSB0aGUgdXNlciBkb2Vzbid0IGhhdmUgYSB0cnVzdCBpbmRleCB5ZXRcblxuICAgICRzY29wZS5vcGVuTG9naW5Nb2RhbCA9IC0+XG4gICAgICAkc2NvcGUubG9naW5Nb2RhbCA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2xvZ2luLm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6ICdsZydcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUuZ2VuZXJhdGVLZXkgPSAtPlxuICAgICAga2V5cGFpciA9IEtFWVVUSUwuZ2VuZXJhdGVLZXlwYWlyKCdFQycsICdzZWNwMjU2azEnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBrZXlwYWlyLnBydktleU9ialxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IGtleXBhaXIucHViS2V5T2JqXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVBFTSA9IEtFWVVUSUwuZ2V0UEVNKCRzY29wZS5wcml2YXRlS2V5LCAnUEtDUzhQUlYnKVxuXG4gICAgJHNjb3BlLmRvd25sb2FkS2V5ID0gLT5cbiAgICAgIGhpZGRlbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGhpZGRlbkVsZW1lbnQuaHJlZiA9ICdkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSSgkc2NvcGUucHJpdmF0ZUtleVBFTSlcbiAgICAgIGhpZGRlbkVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuaydcbiAgICAgIGhpZGRlbkVsZW1lbnQuZG93bmxvYWQgPSAnaWRlbnRpZmlfcHJpdmF0ZV9rZXkudHh0J1xuICAgICAgaGlkZGVuRWxlbWVudC5jbGljaygpXG5cbiAgICAkc2NvcGUubG9nb3V0ID0gLT5cbiAgICAgICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9IDBcbiAgICAgICRzY29wZS5wcml2YXRlS2V5UEVNID0gJydcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9XG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyQWxsKClcbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5saXN0JylcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IG51bGxcblxuICAgICRzY29wZS5tc2dGaWx0ZXIgPSAodmFsdWUsIGluZGV4LCBhcnJheSkgLT5cbiAgICAgIGRhdGEgPSB2YWx1ZS5kYXRhIG9yIHZhbHVlLnNpZ25lZERhdGFcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZS5tYXRjaCAvXnJhdGluZy9cbiAgICAgICAgICBpZiBkYXRhLnR5cGUgIT0gJ3JhdGluZydcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAoZGF0YS5tYXhSYXRpbmcgKyBkYXRhLm1pblJhdGluZykgLyAyXG4gICAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOnBvc2l0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPD0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmVnYXRpdmUnIGFuZCBkYXRhLnJhdGluZyA+PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZXV0cmFsJyBhbmQgZGF0YS5yYXRpbmcgIT0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgaWYgZGF0YS50eXBlICE9ICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPT0gMCBhbmQgdHlwZW9mIHZhbHVlLmRpc3RhbmNlICE9ICdudW1iZXInXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID4gMCBhbmQgdmFsdWUuZGlzdGFuY2UgPiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUucmVtb3ZlRm9jdXMgPSAoZXZlbnQpIC0+XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmJsdXIoKVxuXG4gICAgJHNjb3BlLmxvZ29DbGlja2VkID0gLT5cbiAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5saXN0J1xuICAgICAgICBpZiAkc2NvcGUucXVlcnkudGVybSAhPSAnJ1xuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gZmFsc2VcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnXG5cbiAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSA9IChtc2cpIC0+XG4gICAgICBzaG93UmF3RGF0YSA9XG4gICAgICAgIGhhc2g6IG1zZy5oYXNoXG4gICAgICAgIGRhdGE6IG1zZy5kYXRhXG4gICAgICAgIHByaW9yaXR5OiBtc2cucHJpb3JpdHlcbiAgICAgICAgandzOiBtc2cuandzXG4gICAgICBtc2cuc3RyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNob3dSYXdEYXRhLCB1bmRlZmluZWQsIDIpXG5cbiAgICAkc2NvcGUucHJvZmlsZUZyb21EYXRhID0gKGRhdGEsIGZhbGxiYWNrSWQpIC0+XG4gICAgICBpZiBkYXRhLmF0dHJzIGFuZCBkYXRhLmF0dHJzLmxlbmd0aFxuICAgICAgICBkYXRhLmRpc3QgPSBkYXRhLmF0dHJzWzBdLmRpc3QgKyAwXG4gICAgICAgIGRhdGEucG9zID0gZGF0YS5hdHRyc1swXS5wb3NcbiAgICAgICAgZGF0YS5uZWcgPSBkYXRhLmF0dHJzWzBdLm5lZ1xuICAgICAgICBmb3IgaywgdiBvZiBkYXRhLmF0dHJzXG4gICAgICAgICAgc3dpdGNoIHYubmFtZVxuICAgICAgICAgICAgd2hlbiAnbmFtZSdcbiAgICAgICAgICAgICAgZGF0YS5uYW1lID0gdi52YWwgdW5sZXNzIGRhdGEubmFtZVxuICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgIGRhdGEubmlja25hbWUgPSB2LnZhbCB1bmxlc3MgZGF0YS5uaWNrbmFtZVxuICAgICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICAgIGRhdGEuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUodi52YWwpLnRvU3RyaW5nKClcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmlja25hbWUgaWYgZGF0YS5uaWNrbmFtZSBhbmQgbm90IGRhdGEubmFtZVxuICAgICAgZGF0YS5uYW1lID0gZmFsbGJhY2tJZC52YWx1ZSB1bmxlc3MgZGF0YS5uYW1lXG4gICAgICBkYXRhLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KGZhbGxiYWNrSWQudmFsdWUpLnRvU3RyaW5nKCkgdW5sZXNzIGRhdGEuZ3JhdmF0YXJcbiAgICAgIHJldHVybiBkYXRhXG5cbiAgICAkc2NvcGUuZ2V0SWRlbnRpdHlQcm9maWxlID0gKGlkLCBjYWxsYmFjaykgLT5cbiAgICAgICRzY29wZS5pZGVudGl0aWVzQnlTZWFyY2hLZXkuc2VhcmNoVGV4dChlbmNvZGVVUklDb21wb25lbnQoaWQudmFsdWUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnR5cGUpLCAxKVxuICAgICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICAgaWYgcmVzLmxlbmd0aFxuICAgICAgICAgIHJldHVybiAkc2NvcGUuaXBmc0dldChyZXNbMF0udmFsdWUsIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHJlcyB9XG4gICAgICAgICAgIyByZXR1cm4gJGh0dHAuZ2V0KCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290ICsgJy9pcGZzLycgKyByZXNbMF0udmFsdWUpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4geyBkYXRhOiB7fSB9XG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICBwcm9maWxlID0gJHNjb3BlLnByb2ZpbGVGcm9tRGF0YShyZXMuZGF0YSwgaWQpXG4gICAgICAgIGlmIGNhbGxiYWNrXG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHByb2ZpbGUpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gcHJvZmlsZVxuXG4gICAgJHNjb3BlLm9wZW5NZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlLCBzaXplKSAtPlxuICAgICAgdCA9IGV2ZW50LnRhcmdldFxuICAgICAgcmV0dXJuIGlmIGFuZ3VsYXIuZWxlbWVudCh0KS5jbG9zZXN0KCdhJykubGVuZ3RoXG4gICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YShtZXNzYWdlKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5oYXNWYWxpZFNpZ25hdHVyZShtZXNzYWdlKVxuICAgICAgJHNjb3BlLmdldElkZW50aXR5UHJvZmlsZSB7IHR5cGU6ICdrZXlJRCcsIHZhbHVlOiAkc2NvcGUubWVzc2FnZS5zaWduZXJfa2V5aWQgfSwgKHByb2ZpbGUpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9IHByb2ZpbGVcbiAgICAgIG1vZGFsSW5zdGFuY2UgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgIG1vZGFsSW5zdGFuY2UucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICBtb2RhbEluc3RhbmNlLmNsb3NlKClcblxuICAgICRzY29wZS5maWx0ZXJzID0gJHNjb3BlLmZpbHRlcnMgb3IgY29uZmlnLmRlZmF1bHRGaWx0ZXJzXG5cbiAgICAjIyNcbiAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSBBdXRoZW50aWNhdGlvblxuICAgIGlmIEF1dGhlbnRpY2F0aW9uLnVzZXJcbiAgICAgIGlmIEF1dGhlbnRpY2F0aW9uLnVzZXIucHJvdmlkZXIgPT0gJ3BlcnNvbmEnXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlID0gJ2VtYWlsJ1xuICAgICAgZWxzZVxuICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSA9ICd1cmwnXG4gICAgICBzd2l0Y2ggQXV0aGVudGljYXRpb24udXNlci5wcm92aWRlclxuICAgICAgICB3aGVuICdwZXJzb25hJ1xuICAgICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSA9IEF1dGhlbnRpY2F0aW9uLnVzZXIuZW1haWxcbiAgICAgICAgd2hlbiAndHdpdHRlcidcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgQXV0aGVudGljYXRpb24udXNlci51c2VybmFtZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlID0gQXV0aGVudGljYXRpb24udXNlci5wcm92aWRlckRhdGEubGlua1xuICAgICAgICAgIGJyZWFrXG4gICAgIyMjXG5cbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuICAgICMgJHNjb3BlLm1lbnUgPSBNZW51cy5nZXRNZW51KCd0b3BiYXInKVxuXG4gICAgJHNjb3BlLnRvZ2dsZUNvbGxhcHNpYmxlTWVudSA9IC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSAhJHNjb3BlLmlzQ29sbGFwc2VkXG5cbiAgICAkc2NvcGUuaGFzVmFsaWRTaWduYXR1cmUgPSAobXNnLCBwYXJzZWRKd3MpIC0+XG4gICAgICBwYXJzZWRKd3MgPSBwYXJzZWRKd3Mgb3IgS0pVUi5qd3MuSldTLnBhcnNlKG1zZy5qd3MpXG4gICAgICBwZW0gPSBLSlVSLmFzbjEuQVNOMVV0aWwuZ2V0UEVNU3RyaW5nRnJvbUhleChwYXJzZWRKd3MuaGVhZGVyT2JqLmtpZCwgXCJQVUJMSUMgS0VZXCIpXG4gICAgICBwdWJLZXkgPSBLRVlVVElMLmdldEtleShwZW0pXG4gICAgICBpc1ZhbGlkID0gS0pVUi5qd3MuSldTLnZlcmlmeShtc2cuandzLCBwdWJLZXksIFsnRVMyNTYnXSlcbiAgICAgIGlmIGlzVmFsaWQgdGhlbiBjb25zb2xlLmxvZyAndmFsaWQgc2lnbmF0dXJlJyBlbHNlIGNvbnNvbGUuZXJyb3IgJ2ludmFsaWQgc2lnbmF0dXJlJ1xuICAgICAgcmV0dXJuIGlzVmFsaWRcblxuICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgPSAobWVzc2FnZXMsIG1zZ09wdGlvbnMsIHZlcmlmeVNpZ25hdHVyZSkgLT5cbiAgICAgIHByb2Nlc3NNZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgcGFyc2VkSndzID0gS0pVUi5qd3MuSldTLnBhcnNlKG1zZy5qd3MpXG4gICAgICAgIG1zZy5kYXRhID0gcGFyc2VkSndzLnBheWxvYWRPYmpcbiAgICAgICAgdW5sZXNzIG1zZy5zaWduZXJfa2V5aWRcbiAgICAgICAgICBrZXlIYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHBhcnNlZEp3cy5oZWFkZXJPYmoua2lkKVxuICAgICAgICAgIG1zZy5zaWduZXJfa2V5aWQgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShrZXlIYXNoKVxuXG4gICAgICAgIHJldHVybiBpZiB2ZXJpZnlTaWduYXR1cmUgYW5kIG5vdCAkc2NvcGUuaGFzVmFsaWRTaWduYXR1cmUobXNnLCBwYXJzZWRKd3MpICMgVE9ETzogc2hvdWxkIGRpc3BsYXkgd2FybmluZyBvciBoaWRlIG1zZyBvciBzdGhcblxuICAgICAgICBtc2cuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUobXNnLmF1dGhvcl9lbWFpbCB8fCBtc2cuZGF0YS5hdXRob3JbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5kYXRhLmF1dGhvclswXVxuICAgICAgICBpID0gdW5kZWZpbmVkXG4gICAgICAgIGkgPSAwXG4gICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgIHdoaWxlIGkgPCBtc2cuZGF0YS5hdXRob3IubGVuZ3RoXG4gICAgICAgICAgaW5kZXggPSBjb25maWcudW5pcXVlQXR0cmlidXRlVHlwZXMuaW5kZXhPZihtc2cuZGF0YS5hdXRob3JbaV1bMF0pXG4gICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuZGF0YS5hdXRob3JbaV1cbiAgICAgICAgICBlbHNlIGlmICFtc2cuYXV0aG9yX25hbWUgYW5kIG1zZy5kYXRhLmF1dGhvcltpXVswXSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gbXNnLmRhdGEuYXV0aG9yW2ldWzFdXG4gICAgICAgICAgaSsrXG4gICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBtc2cuZGF0YS5yZWNpcGllbnRbMF1cbiAgICAgICAgaSA9IDBcbiAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLnJlY2lwaWVudC5sZW5ndGhcbiAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLnJlY2lwaWVudFtpXVswXSlcbiAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVxuICAgICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgbXNnLmRhdGEucmVjaXBpZW50W2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50X25hbWUgPSBtc2cuZGF0YS5yZWNpcGllbnRbaV1bMV1cbiAgICAgICAgICBpKytcbiAgICAgICAgc2lnbmVkRGF0YSA9IG1zZy5kYXRhXG4gICAgICAgIGFscGhhID0gdW5kZWZpbmVkXG4gICAgICAgIG1zZy5pY29uU3R5bGUgPSAnJ1xuICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICcnXG4gICAgICAgIG1zZy5iZ0NvbG9yID0gJydcbiAgICAgICAgbXNnLmljb25Db3VudCA9IG5ldyBBcnJheSgxKVxuICAgICAgICBzd2l0Y2ggc2lnbmVkRGF0YS50eXBlXG4gICAgICAgICAgd2hlbiAndmVyaWZ5X2lkZW50aXR5J1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rIHBvc2l0aXZlJ1xuICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLXN1Y2Nlc3MnXG4gICAgICAgICAgd2hlbiAnY29ubmVjdGlvbidcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vayBwb3NpdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgIHdoZW4gJ3VudmVyaWZ5X2lkZW50aXR5J1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBuZWdhdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1lcnJvcidcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgIHdoZW4gJ3JhdGluZydcbiAgICAgICAgICAgIHJhdGluZyA9IHNpZ25lZERhdGEucmF0aW5nXG4gICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKHNpZ25lZERhdGEubWluUmF0aW5nICsgc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgICAgbWF4UmF0aW5nRGlmZiA9IHNpZ25lZERhdGEubWF4UmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgbWluUmF0aW5nRGlmZiA9IHNpZ25lZERhdGEubWluUmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgaWYgcmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWF4UmF0aW5nRGlmZiA8IDIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWF4UmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICBlbHNlIGlmIHJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWluUmF0aW5nRGlmZiA+IC0yIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1pblJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nICsgMC41KSAvIG1pblJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7J1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIGlmIG1zZy5pcGZzX2hhc2ggYW5kIG5vdCBtc2cuandzXG4gICAgICAgICAgJHNjb3BlLmlwZnNHZXQobXNnLmlwZnNfaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgbXNnLmp3cyA9IHJlc1xuICAgICAgICAgICAgcHJvY2Vzc01lc3NhZ2UobXNnKVxuICAgICAgICBlbHNlIHByb2Nlc3NNZXNzYWdlKG1zZylcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9IG51bGxcbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgICRzY29wZS5pZHMubG9hZGluZyA9IHRydWVcbiAgICAgICRzY29wZS5pZGVudGl0aWVzQnlIYXNoID0ge31cbiAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5XG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaCA9IHt9XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgNTBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uc2VhcmNoS2V5XG4gICAgICBpZiBzZWFyY2hLZXkubGVuZ3RoXG4gICAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLmlkZW50aXRpZXNCeVNlYXJjaEtleS5zZWFyY2hUZXh0KHNlYXJjaEtleSwgbGltaXQsIGN1cnNvcilcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSAkc2NvcGUuaWRlbnRpdGllc0J5RGlzdGFuY2Uuc2VhcmNoVGV4dChzZWFyY2hLZXksIGxpbWl0LCBjdXJzb3IpXG4gICAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9ICRzY29wZS5zZWFyY2hSZXF1ZXN0LnRoZW4gKGlkZW50aXRpZXMpIC0+XG4gICAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgICByZXR1cm4gIyBzZWFyY2gga2V5IGNoYW5nZWRcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gJHNjb3BlLmlkcy5saXN0IG9yIFtdXG4gICAgICAgIHF1ZXJpZXMgPSBbXVxuICAgICAgICBhbmd1bGFyLmZvckVhY2ggaWRlbnRpdGllcywgKHJvdykgLT5cbiAgICAgICAgICByZXR1cm4gdW5sZXNzIHJvdy52YWx1ZSBhbmQgcm93LnZhbHVlLmxlbmd0aCBhbmQgISRzY29wZS5pZGVudGl0aWVzQnlIYXNoW3Jvdy52YWx1ZV1cbiAgICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaFtyb3cudmFsdWVdID0gdHJ1ZVxuICAgICAgICAgIHNlYXJjaEtleSA9IHJvdy5rZXlcbiAgICAgICAgICAjIHAgPSAkaHR0cC5nZXQoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3QgKyAnL2lwZnMvJyArIHJvdy52YWx1ZSlcbiAgICAgICAgICBwID0gJHNjb3BlLmlwZnNHZXQocm93LnZhbHVlLCB0cnVlKVxuICAgICAgICAgIC50aGVuIChyb3cpIC0+XG4gICAgICAgICAgICBpZGVudGl0eSA9IHsgc2VhcmNoS2V5OiBzZWFyY2hLZXkgfVxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCByb3cuYXR0cnMsIChhdHRyKSAtPlxuICAgICAgICAgICAgICBkaXN0ID0gcGFyc2VJbnQoYXR0ci5kaXN0KVxuICAgICAgICAgICAgICBpZiAhaXNOYU4oZGlzdCkgYW5kIChpZGVudGl0eS5kaXN0YW5jZSA9PSB1bmRlZmluZWQgb3IgKDAgPD0gZGlzdCA8IGlkZW50aXR5LmRpc3RhbmNlKSlcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5kaXN0YW5jZSA9IGRpc3RcbiAgICAgICAgICAgICAgaWYgaWRlbnRpdHkucG9zID09IHVuZGVmaW5lZCBhbmQgcGFyc2VJbnQoYXR0ci5wb3MpID4gMFxuICAgICAgICAgICAgICAgIGlkZW50aXR5LnBvcyA9IGF0dHIucG9zXG4gICAgICAgICAgICAgIGlmIGlkZW50aXR5Lm5lZyA9PSB1bmRlZmluZWQgYW5kIHBhcnNlSW50KGF0dHIubmVnKSA+IDBcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5uZWcgPSBhdHRyLm5lZ1xuICAgICAgICAgICAgICBzd2l0Y2ggYXR0ci5uYW1lXG4gICAgICAgICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5lbWFpbCA9IGF0dHIudmFsXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShhdHRyLnZhbCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5uYW1lID0gYXR0ci52YWxcbiAgICAgICAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lm5pY2tuYW1lID0gYXR0ci52YWxcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lm5hbWUgPSBhdHRyLnZhbCBpZiAhaWRlbnRpdHkubmFtZVxuICAgICAgICAgICAgICAgIHdoZW4gJ2JpdGNvaW4nLCAnYml0Y29pbl9hZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgaWRlbnRpdHkuYml0Y29pbiA9IGF0dHIudmFsXG4gICAgICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICAgICAgaWYgYXR0ci52YWwuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS50d2l0dGVyID0gYXR0ci52YWwuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgICBpZiBhdHRyLnZhbC5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS5mYWNlYm9vayA9IGF0dHIudmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICAgIGlmIGF0dHIudmFsLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lmdvb2dsZVBsdXMgPSBhdHRyLnZhbC5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoYXR0ci5uYW1lKVxuICAgICAgICAgICAgICBpZiAhaWRlbnRpdHkubGlua1RvXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkubGlua1RvID0geyB0eXBlOiBhdHRyLm5hbWUsIHZhbHVlOiBhdHRyLnZhbCB9XG4gICAgICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgICAgIGlkZW50aXR5LmxpbmtUbyA9IHsgdHlwZTogYXR0ci5uYW1lLCB2YWx1ZTogYXR0ci52YWwgfVxuICAgICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICBpZiAhaWRlbnRpdHkuZ3JhdmF0YXJcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShhdHRyLnZhbCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgaWYgIWlkZW50aXR5Lm5hbWVcbiAgICAgICAgICAgICAgaWRlbnRpdHkubmFtZSA9IHJvdy5hdHRyc1swXS52YWxcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdC5wdXNoKGlkZW50aXR5KVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WzBdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICBxdWVyaWVzLnB1c2ggcFxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IDBcbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPCBsaW1pdFxuICAgICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiAkcS5hbGwocXVlcmllcylcbiAgICAgIHJldHVybiAkc2NvcGUuc2VhcmNoUmVxdWVzdC50aGVuIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLmlkcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0XG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gMFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5IC0gMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gNDBcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCB8fCAwKSAtIDFcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSArIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlkID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XVxuICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpZC5saW5rVG8udHlwZSwgdmFsdWU6IGlkLmxpbmtUby52YWx1ZSB9XG4gICAgICAgIHdoZW4gLTFcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICB3aGVuIDMzLCAzNCwgMzUsIDM2LCAzNywgMzlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsID0gYW5ndWxhci5lbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgIHdhaXQgPSBzZXRUaW1lb3V0KCgtPlxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSBlbC52YWwoKVxuICAgICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICApLCAzMDApXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gd2FpdFxuICAgICAgICAgIGJyZWFrXG5cbiAgICAkc2NvcGUuZHJvcGRvd25TZWFyY2hTZWxlY3QgPSAoaXRlbSkgLT5cbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpdGVtLmxpbmtUby50eXBlLCB2YWx1ZTogaXRlbS5saW5rVG8udmFsdWUgfSlcbiAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbl1cbiJdfQ==

(function() {
  'use strict';
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope', '$state', '$rootScope', '$window', '$stateParams', '$location', '$http', '$q', '$timeout', 'config', 'localStorageService', function($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, config, localStorageService) {
      var addLocalMessages, messagesAdded;
      $scope.activeTab = 0;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.info = {};
      $scope.stats = {};
      $scope.sent = [];
      $scope.received = [];
      $scope.connections = {};
      $scope.thumbsUp = [];
      $scope.thumbsDown = [];
      $scope.verifications = [];
      $scope.distance = null;
      if ($stateParams.search) {
        $scope.query.term = $stateParams.search;
      }
      $scope.newAttribute = {
        type: '',
        value: $stateParams.value
      };
      $scope.filters.type = null;
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
      messagesAdded = false;
      $scope.$on('MessageAdded', function(event, args) {
        var ref;
        $scope.localMessages[args.message.hash] = args.message;
        $scope.localMessages[args.message.hash].local = true;
        localStorageService.set('localMessages', $scope.localMessages);
        messagesAdded = true;
        if (!$state.is('identities.show')) {
          return;
        }
        if (((ref = args.message.signedData.type) === 'verify_identity' || ref === 'unverify_identity') && !args.id.confirmed) {
          return $scope.getConnections();
        } else if (args.message.signedData.type === 'rating') {
          if (messagesAdded) {
            $scope.received.shift();
          }
          $scope.processMessages([args.message]);
          return $scope.received.unshift(args.message);
        }
      });
      $scope.addEntry = function(event, entry) {
        var params, recipient;
        recipient = [];
        if (entry.name) {
          recipient.push(['name', entry.name]);
        }
        if (entry.email) {
          recipient.push(['email', entry.email]);
        }
        if (entry.url) {
          recipient.push(['url', entry.url]);
        }
        if (entry.phone) {
          recipient.push(['phone', entry.phone]);
        }
        params = {
          type: 'verify_identity',
          recipient: recipient
        };
        return $scope.createMessage(event, params).then(function(success) {
          return $state.go('messages.show', {
            id: success.data.hash
          });
        }, function(error) {
          return console.log("error", error);
        });
      };
      $scope.getConnections = function() {
        var alpha, c, conn, connections, has, i, idKey, j, k, key, l, len, len1, len2, mostConfirmations, msg, percentage, r, ref, ref1, ref2, ref3, ref4, v;
        $scope.connections = {};
        connections = $scope.identityProfile.attrs || [];
        if (connections.length > 0) {
          c = connections[0];
          mostConfirmations = c.conf;
          $scope.stats = {
            received_positive: c.pos,
            received_negative: c.neg,
            received_neutral: c.neut
          };
          $scope.distance = c.dist;
        } else {
          mostConfirmations = 1;
        }
        for (k in connections) {
          v = connections[k];
          $scope.connections[$scope.getIdKey(v)] = Object.assign({}, v);
        }
        ref = Object.values($scope.localMessages);
        for (i = 0, len = ref.length; i < len; i++) {
          msg = ref[i];
          msg.data = msg.data || msg.signedData;
          if ((ref1 = msg.data.type) === 'verify_identity' || ref1 === 'unverify_identity') {
            has = false;
            ref2 = msg.data.recipient;
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              r = ref2[j];
              if (r[0] === $scope.idType && r[1] === $scope.idValue) {
                has = true;
                break;
              }
            }
            if (!has) {
              continue;
            }
            ref3 = msg.data.recipient;
            for (l = 0, len2 = ref3.length; l < len2; l++) {
              r = ref3[l];
              if (!(r[0] === $scope.idType && r[1] === $scope.idValue)) {
                idKey = $scope.getIdKey(r);
                if ($scope.connections.hasOwnProperty(idKey)) {
                  if (msg.data.type === 'verify_identity') {
                    $scope.connections[idKey].conf += 1;
                  }
                  if (msg.data.type === 'unverify_identity') {
                    $scope.connections[idKey].ref += 1;
                  }
                } else {
                  $scope.connections[idKey] = {
                    name: msg.data.recipient[1][0],
                    val: msg.data.recipient[1][1],
                    conf: msg.data.type === 'verify_identity' ? 1 : 0,
                    ref: msg.data.type === 'unverify_identity' ? 1 : 0
                  };
                }
                break;
              }
            }
          }
        }
        ref4 = $scope.connections;
        for (key in ref4) {
          conn = ref4[key];
          conn.isCurrent = conn.name === $scope.idType && conn.val === $scope.idValue;
          switch (conn.name) {
            case 'email':
              conn.iconStyle = 'glyphicon glyphicon-envelope';
              conn.btnStyle = 'btn-success';
              conn.link = 'mailto:' + conn.val;
              conn.quickContact = true;
              $scope.info.email = $scope.info.email || conn.val;
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
              $scope.info.nickname = $scope.info.nickname || conn.val;
              conn.iconStyle = 'glyphicon glyphicon-font';
              break;
            case 'name':
              $scope.info.name = $scope.info.name || conn.val;
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
                $scope.coverPhoto = $scope.coverPhoto || {
                  'background-image': 'url(' + ($scope.ipfsStorage.apiRoot || '') + conn.val + ')'
                };
              }
              break;
            case 'profilePhoto':
              if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                $scope.profilePhoto = $scope.profilePhoto || ($scope.ipfsStorage.apiRoot || '') + conn.val;
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
            conn.link = ($scope.ipfsStorage.apiRoot || '') + conn.val;
            conn.linkName = conn.val;
            conn.iconStyle = 'glyphicon glyphicon-link';
            conn.btnStyle = 'btn-default';
          }
          if (conn.conf + conn.ref > 0) {
            percentage = conn.conf * 100 / (conn.conf + conn.ref);
            if (percentage >= 80) {
              alpha = conn.conf / mostConfirmations * 0.7 + 0.3;
            } else if (percentage >= 60) {
              conn.rowClass = 'warning';
            } else {
              conn.rowClass = 'danger';
            }
          }
          $scope.hasQuickContacts = $scope.hasQuickContacts || conn.quickContact;
        }
        $scope.getPhotosFromGravatar();
        $scope.connectionsLength = Object.keys($scope.connections).length;
        return $scope.setPageTitle($scope.info.name || $scope.info.nickname || $scope.idValue);
      };
      $scope.getConnectingMsgs = function(id1, id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('', 10000, false, true).then(function(res) {
                res.forEach(function(row) {
                  var msg, ref;
                  msg = row.value;
                  if (!msg.signedData) {
                    msg.signedData = KJUR.jws.JWS.parse(msg.jws).payloadObj;
                  }
                  if (((ref = msg.signedData.type) === 'verify_identity' || ref === 'unverify_identity')) {
                    msg.gravatar = CryptoJS.MD5(msg.authorEmail || msg.signedData.author[0][1]).toString();
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
            var hasId1, hasId2, i, id, len, ref;
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
      $scope.connectionClicked = function(event, id) {
        if (id.connecting_msgs) {
          return id.collapse = !id.collapse;
        } else {
          return $scope.getConnectingMsgs([$scope.idType, $scope.idValue], id).then(function(msgs) {
            id.connecting_msgs = msgs;
            return id.collapse = !id.collapse;
          });
        }
      };
      $scope.getSentMsgs = function() {
        var searchKey;
        if ($scope.sent.loading) {
          return;
        }
        $scope.sent.loading = true;
        searchKey = '';
        if ($scope.sent.length) {
          searchKey = $scope.sent[$scope.sent.length - 1].searchKey;
        }
        return $scope.sentIndex.searchText('', $scope.filters.limit, searchKey, true).then(function(res) {
          var msgs;
          msgs = [];
          res.forEach(function(row) {
            var v;
            v = row.value;
            v.searchKey = row.key;
            return msgs.push(v);
          });
          return msgs;
        }).then(function(sent) {
          $scope.processMessages(sent, {
            recipientIsSelf: false
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.sent, sent);
            $scope.sent.loading = false;
            if (sent.length < $scope.filters.limit - 1) {
              return $scope.sent.finished = true;
            }
          });
        })["catch"](function(error) {
          return $scope.sent.finished = true;
        });
      };
      $scope.getReceivedMsgs = function() {
        var searchKey;
        if ($scope.received.loading) {
          return;
        }
        $scope.received.loading = true;
        searchKey = '';
        if ($scope.received.length) {
          searchKey = $scope.received[$scope.received.length - 1].searchKey;
        }
        return $scope.receivedIndex.searchText('', $scope.filters.limit, searchKey, true).then(function(res) {
          var msgs;
          msgs = [];
          res.forEach(function(row) {
            var v;
            v = row.value;
            v.searchKey = row.key;
            return msgs.push(v);
          });
          return msgs;
        }).then(function(received) {
          $scope.processMessages(received, {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            var sorted;
            Array.prototype.push.apply($scope.received, received);
            $scope.received.loading = false;
            if (received.length < $scope.filters.limit - 1) {
              $scope.received.finished = true;
            }
            sorted = received.sort(function(a, b) {
              if (a.distance > b.distance) {
                return 1;
              }
              if (a.distance < b.distance) {
                return -1;
              }
              return 0;
            });
            return sorted.forEach(function(msg) {
              var neutralRating;
              if ($scope.thumbsUp.length >= 12 && $scope.thumbsDown.length >= 12) {
                return;
              }
              neutralRating = (msg.data.maxRating + msg.data.minRating) / 2;
              if ($scope.thumbsUp.length < 12 && msg.data.rating > neutralRating) {
                return $scope.thumbsUp.push(msg);
              } else if ($scope.thumbsDown.length < 12 && msg.rating < neutralRating) {
                return $scope.thumbsDown.push(msg);
              }
            });
          });
        })["catch"](function(error) {
          return $scope.received.finished = true;
        });
      };
      $scope.getPhotosFromGravatar = function() {
        var email;
        console.log($scope.idValue);
        email = $scope.info.email || $scope.idValue;
        return $scope.gravatar = CryptoJS.MD5(email).toString();
      };
      addLocalMessages = function() {
        var connectionsToAdd, i, len, msg, msgs, ref, results;
        msgs = localStorageService.get('localMessages') || {};
        connectionsToAdd = {};
        ref = Object.values(msgs);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          msg = ref[i];
          msg.data = msg.data || msg.signedData;
          if (msg.data.recipient[0][0] === $scope.idType && msg.data.recipient[0][1] === $scope.idValue) {
            $scope.received.unshift(msg);
          }
          if (msg.data.author[0][0] === $scope.idType && msg.data.author[0][1] === $scope.idValue) {
            results.push($scope.sent.unshift(msg));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters, filters);
        $scope.sent = [];
        $scope.received = [];
        addLocalMessages();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1;
        if (!$scope.isUniqueType) {
          $state.go('identities.list', {
            search: $scope.idValue
          });
          $scope.tabs[2].active = true;
        }
        $scope.setPageTitle($scope.idValue);
        $scope.$watch('apiReady', function(isReady) {
          if (isReady) {
            return $scope.getIdentityProfile({
              type: $scope.idType,
              value: $scope.idValue
            }).then(function(profile) {
              $scope.identityProfile = profile;
              $scope.$apply(function() {
                return addLocalMessages();
              });
              $scope.getConnections();
              if (!(profile.sent && profile.received)) {
                throw new Error('missing sent or received index: ' + JSON.stringify(profile));
              }
              return $q.all([$window.merkleBtree.MerkleBTree.getByHash(profile.sent, $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(profile.received, $scope.ipfsStorage)]);
            }).then(function(indexes) {
              $scope.sentIndex = indexes[0];
              $scope.receivedIndex = indexes[1];
              $scope.getReceivedMsgs(0);
              return $scope.getSentMsgs(0);
            })["catch"](function(err) {
              return console.log('error fetching profile', err);
            });
          }
        });
        if ($scope.idType === 'keyID' && $scope.idValue === $scope.nodeInfo.keyID) {
          return $scope.distance = 0;
        }
      };
      if ($state.is('identities.show')) {
        return $scope.findOne();
      }
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVduRSxRQVhtRSxFQVluRSxxQkFabUUsRUFhbkUsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQyxZQUF0QyxFQUFvRCxTQUFwRCxFQUErRCxLQUEvRCxFQUFzRSxFQUF0RSxFQUEwRSxRQUExRSxFQUFvRixNQUFwRixFQUE0RixtQkFBNUY7QUFDRSxVQUFBO01BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQyxLQUFEO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxLQUFQLEdBQWU7TUFDZixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFdBQVAsR0FBcUI7TUFDckIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsSUFBMkMsWUFBWSxDQUFDLE1BQXhEO1FBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLFlBQVksQ0FBQyxPQUFq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LElBQWxELEVBQXdELE1BQU0sQ0FBQyxXQUEvRCxDQURLLEVBRUwsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBaEMsQ0FBMEMsT0FBTyxDQUFDLFFBQWxELEVBQTRELE1BQU0sQ0FBQyxXQUFuRSxDQUZLLENBQVA7WUFONkUsQ0FBL0UsQ0FVQSxDQUFDLElBVkQsQ0FVTSxTQUFDLE9BQUQ7Y0FDSixNQUFNLENBQUMsU0FBUCxHQUFtQixPQUFRLENBQUEsQ0FBQTtjQUMzQixNQUFNLENBQUMsYUFBUCxHQUF1QixPQUFRLENBQUEsQ0FBQTtjQUMvQixNQUFNLENBQUMsZUFBUCxDQUF1QixDQUF2QjtxQkFDQSxNQUFNLENBQUMsV0FBUCxDQUFtQixDQUFuQjtZQUpJLENBVk4sQ0FlQSxFQUFDLEtBQUQsRUFmQSxDQWVPLFNBQUMsR0FBRDtxQkFDTCxPQUFPLENBQUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDLEdBQXRDO1lBREssQ0FmUCxFQURGOztRQUR3QixDQUExQjtRQW1CQSxJQUFHLE1BQU0sQ0FBQyxNQUFQLEtBQWlCLE9BQWpCLElBQTZCLE1BQU0sQ0FBQyxPQUFQLEtBQWtCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBbEU7aUJBQ0UsTUFBTSxDQUFDLFFBQVAsR0FBa0IsRUFEcEI7O01BL0JlO01Ba0NqQixJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsQ0FBSDtlQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFERjs7SUFqVkYsQ0FibUU7R0FBckU7QUFGQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBJZGVudGl0aWVzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdJZGVudGl0aWVzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRzdGF0ZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckcSdcbiAgJyR0aW1lb3V0J1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsIGNvbmZpZywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMFxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLmluZm8gPSB7fVxuICAgICRzY29wZS5zdGF0cyA9IHt9XG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLmRpc3RhbmNlID0gbnVsbFxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld0F0dHJpYnV0ZSA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBudWxsXG4gICAgJHNjb3BlLmNvbGxhcHNlTGV2ZWwgPSB7fVxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcbiAgICAkc2NvcGUuc2xpZGVyID1cbiAgICAgIHZhbHVlOiAwXG4gICAgICBvcHRpb25zOlxuICAgICAgICBmbG9vcjogLTNcbiAgICAgICAgY2VpbDogM1xuICAgICAgICBoaWRlUG9pbnRlckxhYmVsczogdHJ1ZVxuICAgICAgICBoaWRlTGltaXRMYWJlbHM6IHRydWVcblxuICAgIG1lc3NhZ2VzQWRkZWQgPSBmYWxzZVxuICAgICRzY29wZS4kb24gJ01lc3NhZ2VBZGRlZCcsIChldmVudCwgYXJncykgLT5cbiAgICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzW2FyZ3MubWVzc2FnZS5oYXNoXSA9IGFyZ3MubWVzc2FnZVxuICAgICAgJHNjb3BlLmxvY2FsTWVzc2FnZXNbYXJncy5tZXNzYWdlLmhhc2hdLmxvY2FsID0gdHJ1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCAkc2NvcGUubG9jYWxNZXNzYWdlcylcbiAgICAgIG1lc3NhZ2VzQWRkZWQgPSB0cnVlXG4gICAgICByZXR1cm4gdW5sZXNzICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddIGFuZCBub3QgYXJncy5pZC5jb25maXJtZWRcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3Rpb25zKClcbiAgICAgIGVsc2UgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBpZiBtZXNzYWdlc0FkZGVkXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnNoaWZ0KClcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbYXJncy5tZXNzYWdlXVxuICAgICAgICAkc2NvcGUucmVjZWl2ZWQudW5zaGlmdCBhcmdzLm1lc3NhZ2VcblxuICAgICRzY29wZS5hZGRFbnRyeSA9IChldmVudCwgZW50cnkpIC0+XG4gICAgICByZWNpcGllbnQgPSBbXVxuICAgICAgaWYgZW50cnkubmFtZVxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ25hbWUnLCBlbnRyeS5uYW1lXVxuICAgICAgaWYgZW50cnkuZW1haWxcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydlbWFpbCcsIGVudHJ5LmVtYWlsXVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgcGFyYW1zID1cbiAgICAgICAgdHlwZTogJ3ZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgcmVjaXBpZW50OiByZWNpcGllbnRcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKGV2ZW50LCBwYXJhbXMpLnRoZW4gKHN1Y2Nlc3MpIC0+XG4gICAgICAgICRzdGF0ZS5nbyAnbWVzc2FnZXMuc2hvdycsIHsgaWQ6IHN1Y2Nlc3MuZGF0YS5oYXNoIH1cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMgPSAtPlxuICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICAgIGNvbm5lY3Rpb25zID0gJHNjb3BlLmlkZW50aXR5UHJvZmlsZS5hdHRycyBvciBbXVxuICAgICAgaWYgY29ubmVjdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICBjID0gY29ubmVjdGlvbnNbMF1cbiAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSBjLmNvbmZcbiAgICAgICAgJHNjb3BlLnN0YXRzID1cbiAgICAgICAgICByZWNlaXZlZF9wb3NpdGl2ZTogYy5wb3NcbiAgICAgICAgICByZWNlaXZlZF9uZWdhdGl2ZTogYy5uZWdcbiAgICAgICAgICByZWNlaXZlZF9uZXV0cmFsOiBjLm5ldXRcbiAgICAgICAgJHNjb3BlLmRpc3RhbmNlID0gYy5kaXN0XG4gICAgICBlbHNlXG4gICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gMVxuICAgICAgZm9yIGssIHYgb2YgY29ubmVjdGlvbnNcbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zWyRzY29wZS5nZXRJZEtleSh2KV0gPSBPYmplY3QuYXNzaWduKHt9LCB2KVxuICAgICAgZm9yIG1zZyBpbiBPYmplY3QudmFsdWVzKCRzY29wZS5sb2NhbE1lc3NhZ2VzKVxuICAgICAgICBtc2cuZGF0YSA9IG1zZy5kYXRhIG9yIG1zZy5zaWduZWREYXRhXG4gICAgICAgIGlmIG1zZy5kYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZnlfaWRlbnRpdHknXVxuICAgICAgICAgIGhhcyA9IGZhbHNlXG4gICAgICAgICAgZm9yIHIgaW4gbXNnLmRhdGEucmVjaXBpZW50XG4gICAgICAgICAgICBpZiByWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIHJbMV3CoD09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgICAgIGhhcyA9IHRydWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgaGFzXG4gICAgICAgICAgZm9yIHIgaW4gbXNnLmRhdGEucmVjaXBpZW50XG4gICAgICAgICAgICB1bmxlc3MgclswXSA9PSAkc2NvcGUuaWRUeXBlIGFuZCByWzFdwqA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICAgICBpZEtleSA9ICRzY29wZS5nZXRJZEtleShyKVxuICAgICAgICAgICAgICBpZiAkc2NvcGUuY29ubmVjdGlvbnMuaGFzT3duUHJvcGVydHkoaWRLZXkpXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zW2lkS2V5XS5jb25mICs9IDEgaWYgbXNnLmRhdGEudHlwZSA9PSAndmVyaWZ5X2lkZW50aXR5J1xuICAgICAgICAgICAgICAgICRzY29wZS5jb25uZWN0aW9uc1tpZEtleV0ucmVmICs9IDEgaWYgbXNnLmRhdGEudHlwZSA9PSAndW52ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNbaWRLZXldID1cbiAgICAgICAgICAgICAgICAgIG5hbWU6IG1zZy5kYXRhLnJlY2lwaWVudFsxXVswXVxuICAgICAgICAgICAgICAgICAgdmFsOiBtc2cuZGF0YS5yZWNpcGllbnRbMV1bMV1cbiAgICAgICAgICAgICAgICAgIGNvbmY6IGlmIG1zZy5kYXRhLnR5cGUgPT0gJ3ZlcmlmeV9pZGVudGl0eScgdGhlbiAxIGVsc2UgMFxuICAgICAgICAgICAgICAgICAgcmVmOiBpZiBtc2cuZGF0YS50eXBlID09ICd1bnZlcmlmeV9pZGVudGl0eScgdGhlbiAxIGVsc2UgMFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgZm9yIGtleSwgY29ubiBvZiAkc2NvcGUuY29ubmVjdGlvbnNcbiAgICAgICAgY29ubi5pc0N1cnJlbnQgPSBjb25uLm5hbWUgPT0gJHNjb3BlLmlkVHlwZSBhbmQgY29ubi52YWwgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgc3dpdGNoIGNvbm4ubmFtZVxuICAgICAgICAgIHdoZW4gJ2VtYWlsJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAnbWFpbHRvOicgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaW5mby5lbWFpbCA9ICRzY29wZS5pbmZvLmVtYWlsIG9yIGNvbm4udmFsXG4gICAgICAgICAgd2hlbiAnYml0Y29pbl9hZGRyZXNzJywgJ2JpdGNvaW4nXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1iaXRjb2luJ1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tcHJpbWFyeSdcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICdodHRwczovL2Jsb2NrY2hhaW4uaW5mby9hZGRyZXNzLycgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgY29ubi52YWxcbiAgICAgICAgICB3aGVuICdhY2NvdW50J1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYXQnXG4gICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAkc2NvcGUuaW5mby5uaWNrbmFtZSA9ICRzY29wZS5pbmZvLm5pY2tuYW1lIG9yIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgd2hlbiAnbmFtZSdcbiAgICAgICAgICAgICRzY29wZS5pbmZvLm5hbWUgPSAkc2NvcGUuaW5mby5uYW1lIG9yIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZSdcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAndGVsOicgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgd2hlbiAna2V5SUQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgd2hlbiAnY292ZXJQaG90bydcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICRzY29wZS5jb3ZlclBob3RvID0gJHNjb3BlLmNvdmVyUGhvdG8gb3IgeyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArICgkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdCBvciAnJykgKyBjb25uLnZhbCArICcpJyB9XG4gICAgICAgICAgd2hlbiAncHJvZmlsZVBob3RvJ1xuICAgICAgICAgICAgaWYgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgJHNjb3BlLnByb2ZpbGVQaG90byA9ICRzY29wZS5wcm9maWxlUGhvdG8gb3IgKCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290IG9yICcnKSArIGNvbm4udmFsXG4gICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLmluZGV4T2YoJ2ZhY2Vib29rLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1mYWNlYm9vaydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3R3aXR0ZXIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tdHdpdHRlcidcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZigncGx1cy5nb29nbGUuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZignbGlua2VkaW4uY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWxpbmtlZGluJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZignZ2l0aHViLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ2l0aHViJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgaWYgY29ubi52YWwgYW5kIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgY29ubi5saW5rID0gKCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290IG9yICcnKSArIGNvbm4udmFsXG4gICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsXG4gICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgIGlmIGNvbm4uY29uZiArIGNvbm4ucmVmID4gMFxuICAgICAgICAgIHBlcmNlbnRhZ2UgPSBjb25uLmNvbmYgKiAxMDAgLyAoY29ubi5jb25mICsgY29ubi5yZWYpXG4gICAgICAgICAgaWYgcGVyY2VudGFnZSA+PSA4MFxuICAgICAgICAgICAgYWxwaGEgPSBjb25uLmNvbmYgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgIyBjb25uLnJvd1N0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknXG4gICAgICAgICAgZWxzZSBpZiBwZXJjZW50YWdlID49IDYwXG4gICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29ubi5yb3dDbGFzcyA9ICdkYW5nZXInXG4gICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgY29ubi5xdWlja0NvbnRhY3RcbiAgICAgICRzY29wZS5nZXRQaG90b3NGcm9tR3JhdmF0YXIoKVxuICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zTGVuZ3RoID0gT2JqZWN0LmtleXMoJHNjb3BlLmNvbm5lY3Rpb25zKS5sZW5ndGhcbiAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgKCRzY29wZS5pbmZvLm5hbWUgfHwgJHNjb3BlLmluZm8ubmlja25hbWUgfHwgJHNjb3BlLmlkVmFsdWUpXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MgPSAoaWQxLCBpZDIpIC0+XG4gICAgICBnZXRWZXJpZmljYXRpb25zID0gJHEgKHJlc29sdmUpIC0+XG4gICAgICAgIGlmICEkc2NvcGUudmVyaWZpY2F0aW9ucy5sZW5ndGhcbiAgICAgICAgICBpZiAkc2NvcGUucmVjZWl2ZWRJbmRleFxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkSW5kZXguc2VhcmNoVGV4dCgnJywgMTAwMDAsIGZhbHNlLCB0cnVlKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAgIHJlcy5mb3JFYWNoIChyb3cpIC0+XG4gICAgICAgICAgICAgICAgbXNnID0gcm93LnZhbHVlXG4gICAgICAgICAgICAgICAgdW5sZXNzIG1zZy5zaWduZWREYXRhXG4gICAgICAgICAgICAgICAgICBtc2cuc2lnbmVkRGF0YSA9IEtKVVIuandzLkpXUy5wYXJzZShtc2cuandzKS5wYXlsb2FkT2JqXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZnlfaWRlbnRpdHknXSlcbiAgICAgICAgICAgICAgICAgIG1zZy5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShtc2cuYXV0aG9yRW1haWwgb3IgbXNnLnNpZ25lZERhdGEuYXV0aG9yWzBdWzFdKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLnNpZ25lZERhdGEuYXV0aG9yWzBdXG4gICAgICAgICAgICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5wdXNoIG1zZ1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucy50aGVuIC0+XG4gICAgICAgIG1zZ3MgPSBbXVxuICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgaGFzSWQxID0gaGFzSWQyID0gZmFsc2VcbiAgICAgICAgICBmb3IgaWQgaW4gbXNnLnNpZ25lZERhdGEucmVjaXBpZW50XG4gICAgICAgICAgICByZXR1cm4gbXNncy5wdXNoIG1zZyBpZiBpZFswXcKgPT0gaWQyLm5hbWUgYW5kIGlkWzFdID09IGlkMi52YWxcbiAgICAgICAgcmV0dXJuIG1zZ3NcblxuICAgICRzY29wZS5jb25uZWN0aW9uQ2xpY2tlZCA9IChldmVudCwgaWQpIC0+XG4gICAgICBpZiBpZC5jb25uZWN0aW5nX21zZ3NcbiAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzKFskc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIGlkKS50aGVuIChtc2dzKSAtPlxuICAgICAgICAgIGlkLmNvbm5lY3RpbmdfbXNncyA9IG1zZ3NcbiAgICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuXG4gICAgJHNjb3BlLmdldFNlbnRNc2dzID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUuc2VudC5sb2FkaW5nXG4gICAgICAkc2NvcGUuc2VudC5sb2FkaW5nID0gdHJ1ZVxuICAgICAgc2VhcmNoS2V5ID0gJydcbiAgICAgIGlmICRzY29wZS5zZW50Lmxlbmd0aFxuICAgICAgICBzZWFyY2hLZXkgPSAkc2NvcGUuc2VudFskc2NvcGUuc2VudC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgICRzY29wZS5zZW50SW5kZXguc2VhcmNoVGV4dCgnJywgJHNjb3BlLmZpbHRlcnMubGltaXQsIHNlYXJjaEtleSwgdHJ1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICBtc2dzID0gW11cbiAgICAgICAgcmVzLmZvckVhY2ggKHJvdykgLT5cbiAgICAgICAgICB2ID0gcm93LnZhbHVlXG4gICAgICAgICAgdi5zZWFyY2hLZXkgPSByb3cua2V5XG4gICAgICAgICAgbXNncy5wdXNoIHZcbiAgICAgICAgcmV0dXJuIG1zZ3NcbiAgICAgIC50aGVuIChzZW50KSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIHNlbnQsIHsgcmVjaXBpZW50SXNTZWxmOiBmYWxzZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUuc2VudCwgc2VudClcbiAgICAgICAgICAkc2NvcGUuc2VudC5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICBpZiBzZW50Lmxlbmd0aCA8ICRzY29wZS5maWx0ZXJzLmxpbWl0IC0gMVxuICAgICAgICAgICAgJHNjb3BlLnNlbnQuZmluaXNoZWQgPSB0cnVlXG4gICAgICAuY2F0Y2ggKGVycm9yKSAtPlxuICAgICAgICAkc2NvcGUuc2VudC5maW5pc2hlZCA9IHRydWVcblxuICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5yZWNlaXZlZC5sb2FkaW5nXG4gICAgICAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyA9IHRydWVcbiAgICAgIHNlYXJjaEtleSA9ICcnXG4gICAgICBpZiAkc2NvcGUucmVjZWl2ZWQubGVuZ3RoXG4gICAgICAgIHNlYXJjaEtleSA9ICRzY29wZS5yZWNlaXZlZFskc2NvcGUucmVjZWl2ZWQubGVuZ3RoIC0gMV0uc2VhcmNoS2V5XG4gICAgICAkc2NvcGUucmVjZWl2ZWRJbmRleC5zZWFyY2hUZXh0KCcnLCAkc2NvcGUuZmlsdGVycy5saW1pdCwgc2VhcmNoS2V5LCB0cnVlKS50aGVuIChyZXMpIC0+XG4gICAgICAgIG1zZ3MgPSBbXVxuICAgICAgICByZXMuZm9yRWFjaCAocm93KSAtPlxuICAgICAgICAgIHYgPSByb3cudmFsdWVcbiAgICAgICAgICB2LnNlYXJjaEtleSA9IHJvdy5rZXlcbiAgICAgICAgICBtc2dzLnB1c2ggdlxuICAgICAgICByZXR1cm4gbXNnc1xuICAgICAgLnRoZW4gKHJlY2VpdmVkKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIHJlY2VpdmVkLCB7IHJlY2lwaWVudElzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUucmVjZWl2ZWQsIHJlY2VpdmVkKVxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICBpZiByZWNlaXZlZC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgICBzb3J0ZWQgPSByZWNlaXZlZC5zb3J0IChhLGIpIC0+XG4gICAgICAgICAgICByZXR1cm4gMSBpZiBhLmRpc3RhbmNlID4gYi5kaXN0YW5jZVxuICAgICAgICAgICAgcmV0dXJuIC0xIGlmIGEuZGlzdGFuY2UgPCBiLmRpc3RhbmNlXG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgIHNvcnRlZC5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgICByZXR1cm4gaWYgJHNjb3BlLnRodW1ic1VwLmxlbmd0aCA+PSAxMiBhbmQgJHNjb3BlLnRodW1ic0Rvd24ubGVuZ3RoID49IDEyXG4gICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKG1zZy5kYXRhLm1heFJhdGluZyArIG1zZy5kYXRhLm1pblJhdGluZykgLyAyXG4gICAgICAgICAgICBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoIDwgMTIgYW5kIG1zZy5kYXRhLnJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwLnB1c2ggbXNnXG4gICAgICAgICAgICBlbHNlIGlmICRzY29wZS50aHVtYnNEb3duLmxlbmd0aCA8IDEyIGFuZCAgbXNnLnJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic0Rvd24ucHVzaCBtc2dcbiAgICAgIC5jYXRjaCAoZXJyb3IpIC0+XG4gICAgICAgICRzY29wZS5yZWNlaXZlZC5maW5pc2hlZCA9IHRydWVcblxuICAgICRzY29wZS5nZXRQaG90b3NGcm9tR3JhdmF0YXIgPSAtPlxuICAgICAgY29uc29sZS5sb2cgJHNjb3BlLmlkVmFsdWVcbiAgICAgIGVtYWlsID0gJHNjb3BlLmluZm8uZW1haWwgb3IgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShlbWFpbCkudG9TdHJpbmcoKVxuXG4gICAgYWRkTG9jYWxNZXNzYWdlcyA9IC0+XG4gICAgICBtc2dzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKSBvciB7fVxuICAgICAgY29ubmVjdGlvbnNUb0FkZCA9IHt9XG4gICAgICBmb3IgbXNnIGluIE9iamVjdC52YWx1ZXMobXNncylcbiAgICAgICAgbXNnLmRhdGEgPSBtc2cuZGF0YSBvciBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBpZiBtc2cuZGF0YS5yZWNpcGllbnRbMF1bMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgbXNnLmRhdGEucmVjaXBpZW50WzBdWzFdID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnVuc2hpZnQobXNnKVxuICAgICAgICBpZiBtc2cuZGF0YS5hdXRob3JbMF1bMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgbXNnLmRhdGEuYXV0aG9yWzBdWzFdID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLnNlbnQudW5zaGlmdChtc2cpXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcbiAgICAgICRzY29wZS5zZW50ID0gW11cbiAgICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgICBhZGRMb2NhbE1lc3NhZ2VzKClcbiAgICAgICR0aW1lb3V0IC0+ICRyb290U2NvcGUuJGJyb2FkY2FzdCAnbXNnU2Nyb2xsQ2hlY2snXG5cbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAkc2NvcGUuaXNDdXJyZW50VXNlciA9ICRzY29wZS5hdXRoZW50aWNhdGlvbiBhbmRcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgYW5kXG4gICAgICAgICRzY29wZS5pZFR5cGUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlIGFuZFxuICAgICAgICAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoJHNjb3BlLmlkVHlwZSkgPiAtMVxuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgJHNjb3BlLmdldElkZW50aXR5UHJvZmlsZSh7IHR5cGU6ICRzY29wZS5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuaWRWYWx1ZSB9KS50aGVuIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5UHJvZmlsZSA9IHByb2ZpbGVcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gYWRkTG9jYWxNZXNzYWdlcygpXG4gICAgICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMoKVxuICAgICAgICAgICAgaWYgIShwcm9maWxlLnNlbnQgYW5kIHByb2ZpbGUucmVjZWl2ZWQpXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBzZW50IG9yIHJlY2VpdmVkIGluZGV4OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpXG4gICAgICAgICAgICAkcS5hbGwoW1xuICAgICAgICAgICAgICAkd2luZG93Lm1lcmtsZUJ0cmVlLk1lcmtsZUJUcmVlLmdldEJ5SGFzaChwcm9maWxlLnNlbnQsICRzY29wZS5pcGZzU3RvcmFnZSksXG4gICAgICAgICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKHByb2ZpbGUucmVjZWl2ZWQsICRzY29wZS5pcGZzU3RvcmFnZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgLnRoZW4gKGluZGV4ZXMpIC0+XG4gICAgICAgICAgICAkc2NvcGUuc2VudEluZGV4ID0gaW5kZXhlc1swXVxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkSW5kZXggPSBpbmRleGVzWzFdXG4gICAgICAgICAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzIDBcbiAgICAgICAgICAgICRzY29wZS5nZXRTZW50TXNncyAwXG4gICAgICAgICAgLmNhdGNoIChlcnIpIC0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgZmV0Y2hpbmcgcHJvZmlsZScsIGVyclxuICAgICAgaWYgJHNjb3BlLmlkVHlwZSA9PSAna2V5SUQnIGFuZCAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUubm9kZUluZm8ua2V5SURcbiAgICAgICAgJHNjb3BlLmRpc3RhbmNlID0gMFxuXG4gICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAkc2NvcGUuZmluZE9uZSgpXG5dXG4iXX0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsR0FESCxDQUNPLFNBQUMsSUFBRCxFQUFPLFVBQVAsRUFBbUIsTUFBbkIsRUFBMkIsWUFBM0IsRUFBeUMsT0FBekMsRUFBa0QsbUJBQWxEO0lBQ0g7SUFDQSxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVg7V0FDQSxVQUFVLENBQUMsR0FBWCxDQUFlLHFCQUFmLEVBQXNDLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakI7TUFDcEMsVUFBVSxDQUFDLFNBQVgsR0FBdUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLElBQXdCO01BQy9DLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLE9BQXhCLEVBQWlDLE9BQU8sQ0FBQyxJQUF6QztNQUNBLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGFBQXhCLEVBQXVDLFlBQXZDO2FBQ0EsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBbUIsQ0FBbkI7SUFKb0MsQ0FBdEM7RUFIRyxDQURQO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAucnVuICgkbG9nLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHdpbmRvdywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJGxvZy5kZWJ1ZyAncnVuQmxvY2sgZW5kJ1xuICAgICRyb290U2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCBjdXJyZW50LCBwcmV2aW91cykgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJHN0YXRlLmN1cnJlbnQudGl0bGUgfHwgJ0lkZW50aWZpJ1xuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3N0YXRlJywgY3VycmVudC5uYW1lKVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3N0YXRlUGFyYW1zJywgJHN0YXRlUGFyYW1zKVxuICAgICAgJHdpbmRvdy5zY3JvbGxUbygwLDApXG4iXX0=

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
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxTQUFDLGNBQUQsRUFBaUIsa0JBQWpCO0lBQ047SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLFlBRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsUUFBQSxFQUFVLFlBRFY7TUFFQSxRQUFBLEVBQVUsSUFGVjtLQUZKLENBS0UsQ0FBQyxLQUxILENBS1MsaUJBTFQsRUFNSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLDBCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7TUFJQSxNQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsRUFBUjtPQUxGO01BTUEsS0FBQSxFQUFPLGdDQU5QO0tBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLG9CQUFMO01BQ0EsV0FBQSxFQUFhLDRCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7S0FkSixDQWtCRSxDQUFDLEtBbEJILENBa0JTLGlCQWxCVCxFQW1CSTtNQUFBLEdBQUEsRUFBSywwQkFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO0tBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsVUF2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVLElBRlY7S0F4QkosQ0EyQkUsQ0FBQyxLQTNCSCxDQTJCUyxlQTNCVCxFQTRCSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU8sNEJBSlA7S0E1QkosQ0FpQ0UsQ0FBQyxLQWpDSCxDQWlDUyxlQWpDVCxFQWtDSTtNQUFBLEdBQUEsRUFBSyxNQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7S0FsQ0osQ0FzQ0UsQ0FBQyxLQXRDSCxDQXNDUyxPQXRDVCxFQXVDSTtNQUFBLEdBQUEsRUFBSyxRQUFMO01BQ0EsV0FBQSxFQUFhLHFCQURiO01BRUEsS0FBQSxFQUFPLGtCQUZQO0tBdkNKO1dBMkNBLGtCQUFrQixDQUFDLFNBQW5CLENBQTZCLEdBQTdCO0VBN0NNLENBRFY7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5jb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICBzZWFyY2g6ICcnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBHbG9iYWwgQWRkcmVzcyBCb29rJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9pZGVudGl0aWVzL2NyZWF0ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9jcmVhdGUuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLnNob3cnLFxuICAgICAgICB1cmw6ICcvaWRlbnRpdGllcy86dHlwZS86dmFsdWUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvc2hvdy5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzJyxcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzJ1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dWktdmlldy8+XCJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIExhdGVzdCBtZXNzYWdlcydcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMuc2hvdycsXG4gICAgICAgIHVybDogJy86aWQnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWVzc2FnZXMnXG4gICAgICAuc3RhdGUgJ2Fib3V0JyxcbiAgICAgICAgdXJsOiAnL2Fib3V0J1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2Fib3V0Lmh0bWwnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBBYm91dCdcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJy8nXG4iXX0=

(function() {
  angular.module('identifiAngular').constant('malarkey', malarkey).constant('moment', moment).constant('config', {
    defaultFilters: {
      type: null,
      limit: 50,
      max_distance: 0
    },
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account', 'bitcoin', 'gpg_keyid', 'gpg_fingerprint']
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFVBRFosRUFDd0IsUUFEeEIsQ0FFRSxDQUFDLFFBRkgsQ0FFWSxRQUZaLEVBRXNCLE1BRnRCLENBR0UsQ0FBQyxRQUhILENBR1ksUUFIWixFQUlJO0lBQUEsY0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLElBQU47TUFDQSxLQUFBLEVBQU8sRUFEUDtNQUVBLFlBQUEsRUFBYyxDQUZkO0tBREY7SUFJQSxvQkFBQSxFQUFzQixDQUNwQixPQURvQixFQUVwQixLQUZvQixFQUdwQixPQUhvQixFQUlwQixLQUpvQixFQUtwQixPQUxvQixFQU1wQixTQU5vQixFQU9wQixTQVBvQixFQVFwQixXQVJvQixFQVNwQixpQkFUb0IsQ0FKdEI7R0FKSjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpXG4gIC5jb25zdGFudCAnbWFsYXJrZXknLCBtYWxhcmtleVxuICAuY29uc3RhbnQgJ21vbWVudCcsIG1vbWVudFxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogNTBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuICAgIHVuaXF1ZUF0dHJpYnV0ZVR5cGVzOiBbXG4gICAgICAnZW1haWwnLFxuICAgICAgJ3VybCcsXG4gICAgICAna2V5SUQnLFxuICAgICAgJ3RlbCcsXG4gICAgICAncGhvbmUnLFxuICAgICAgJ2FjY291bnQnLFxuICAgICAgJ2JpdGNvaW4nLFxuICAgICAgJ2dwZ19rZXlpZCcsXG4gICAgICAnZ3BnX2ZpbmdlcnByaW50J1xuICAgIF1cbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($logProvider, toastrConfig) {
    'ngInject';
    $logProvider.debugEnabled(true);
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    return toastrConfig.progressBar = true;
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsWUFBRCxFQUFlLFlBQWY7SUFDTjtJQUVBLFlBQVksQ0FBQyxZQUFiLENBQTBCLElBQTFCO0lBRUEsWUFBWSxDQUFDLFNBQWIsR0FBeUI7SUFDekIsWUFBWSxDQUFDLE9BQWIsR0FBdUI7SUFDdkIsWUFBWSxDQUFDLGFBQWIsR0FBNkI7SUFDN0IsWUFBWSxDQUFDLGlCQUFiLEdBQWlDO1dBQ2pDLFlBQVksQ0FBQyxXQUFiLEdBQTJCO0VBVHJCLENBRFY7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5jb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlXG4gICAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwXG4gICAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0J1xuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWVcbiAgICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlXG4iXX0=

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div ng-init="newEntry = {}" class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide="authentication.user || !nodeInfo.loginOptions.length"><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label><input type=text required autofocus id=idName name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label><input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label><input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label><input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user || !nodeInfo.loginOptions.length) || !(newEntry.email || newEntry.url || newEntry.phone) || (addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid)">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add entry</a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ng-hide=!result.linkTo ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon id=result border=3 width=46 positive-score=result.pos negative-score=result.neg></identicon></td><td><span ng-if="result.distance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.distance > 0" ng-bind="result.distance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.name|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <small ng-if=!result.name class=list-group-item-text><span ng-bind-html=result[0][0]|highlight:query.term></span></small><br><small><span ng-if="result.nickname && result.name != result.nickname" ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.email|highlight:query.term></span> </span><span ng-if=result.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.facebook|highlight:query.term></span> </span><span ng-if=result.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.twitter|highlight:query.term></span> </span><span ng-if=result.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.googlePlus|highlight:query.term></span> </span><span ng-if=result.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.bitcoin|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+stats.received_positive+stats.received_neutral+stats.received_negative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon id="{ gravatar: gravatar }" border=4 positive-score=stats.received_positive negative-score=stats.received_negative width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(info.name||info.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=info.name||info.nickname></span> <span ng-hide="!info.nickname || !info.name || info.nickname === info.name">(<span class=text-muted ng-bind=info.nickname></span>) </span><span ng-if="distance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="distance > 0" ng-bind="distance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="stats.received_positive || stats.received_negative"><span ng-bind="stats.received_positive / (stats.received_positive+stats.received_neutral+stats.received_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.received_positive || stats.received_negative)">&mdash; </span></b><span ng-if="stats.sent_positive || stats.sent_negative"><br>Sent: <span ng-if="stats.sent_positive || stats.sent_negative"><span ng-bind="stats.sent_positive / (stats.sent_positive+stats.sent_neutral+stats.sent_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.sent_positive || stats.sent_negative )">&mdash;</span></span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.received_positive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.received_neutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.received_negative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.sent_positive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.sent_neutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.sent_negative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && thumbsUp.length > 0" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="distance-container mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon id=msg class="square no-glow" border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span class=distance ng-bind="msg.distance | ordinal"></span></a></div><div ng-if="isUniqueType && thumbsDown.length > 0" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="distance-container mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon id=msg class="square no-glow" border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span class=distance ng-bind="msg.distance | ordinal"></span></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span> <span class=visible-xs>Recv ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !receivedIndex || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.received_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.received_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.received_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that {{idType}}:{{idValue}} belongs to your already trusted identity.</p></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !sentIndex || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.sent_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.sent_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.sent_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connectionsLength > 0" ng-bind="connectionsLength - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon id=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder=value ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder=type ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled=!authentication.user><span class=ladda-label><span class="glyphicon glyphicon-plus"></span> Add</span><span class=ladda-spinner></span></button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=http://identifi.org>Project page</a></li><li><a href=https://github.com/identifi>Source code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/identi.fi/ >https://ipfs.io/ipns/identi.fi/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><p>Also available as a <a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome plugin</a>.</p><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><span class="distance-container mar-right10"><identicon id="{ gravatar: match.label.gravatar }" border=3 width=46 positive-score=match.label.pos negative-score=match.label.neg></identicon><span ng-if="match.label.distance >= 0" class=distance ng-bind="match.label.distance | ordinal"></span> </span><span ng-bind-html="match.label.name | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeyPEM></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeyPEM ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-click="loginWithKey(privateKeyPEM, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=nodeInfo.profile><a ui-sref="identities.show({ type: \'keyID\', value: nodeInfo.keyID })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon id=nodeInfo.profile border=3 width=35 positive-score=nodeInfo.profile.pos negative-score=nodeInfo.profile.neg></identicon></span><span ng-bind=nodeInfo.profile.name></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message msg-data=msg ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'-data.timestamp\'" ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signer_keyid ui-sref="identities.show({type: \'keyID\', value: message.signer_keyid })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signer_keyid })" class=id-link><span class="distance-container mar-right5"><identicon id=message.verifiedBy border=3 width=35 positive-score=message.verifiedBy.pos negative-score=message.verifiedBy.neg></identicon><span ng-if="message.verifiedBy.dist >= 0" class=distance ng-bind="message.verifiedBy.dist | ordinal"></span> </span><span ng-bind=message.verifiedBy.name></span> <small>{{message.signer_keyid}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.data.type == \'verify_identity\'}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': $ctrl.msgData.data.type != \'verify_identity\', \'panel-heading\': $ctrl.msgData.data.type == \'verify_identity\' || $ctrl.msgData.data.type == \'unverify_identity\' }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><span class="distance-container mar-right10"><identicon id=$ctrl.msgData border=3 width=35 positive-score=$ctrl.msgData.author_pos negative-score=$ctrl.msgData.author_neg></identicon><span ng-if="$ctrl.msgData.distance >= 0" class=distance ng-bind="$ctrl.msgData.distance | ordinal"></span> </span><span ng-bind="($ctrl.msgData.authorIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block></a></p><p ng-if="$ctrl.msgData.data.type == \'verify_identity\' || $ctrl.msgData.data.type == \'unverify_identity\'"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.data.type == \'verify_identity\'"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.data.type == \'unverify_identity\'"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);