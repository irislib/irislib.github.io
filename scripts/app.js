(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule', 'angular-clipboard', 'monospaced.qrcode']);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsRUFFcUQsbUJBRnJELEVBR0EsbUJBSEEsQ0FERjs7RUFNQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxTQUFBO2FBQ25ELFNBQUMsS0FBRDtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEbUQsQ0FBRjtHQUFuRDs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsb0JBQXpDLEVBQStEO0lBQUUsU0FBQTthQUMvRCxTQUFDLEtBQUQ7ZUFDRSxrQkFBQSxDQUFtQixLQUFuQjtNQURGO0lBRCtELENBQUY7R0FBL0Q7O0VBS0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFdBQXpDLEVBQXNELFNBQUMsSUFBRDtXQUNwRCxTQUFDLElBQUQsRUFBTyxNQUFQO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxTQUFBO1dBQ2xELFNBQUMsS0FBRDtBQUNFLFVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXRCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnXVxuXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlc2NhcGUnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KVxuIF1cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2VuY29kZVVSSUNvbXBvbmVudCcsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBpbnB1dFxuIF1cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnaGlnaGxpZ2h0JywgKCRzY2UpIC0+XG4gICh0ZXh0LCBwaHJhc2UpIC0+XG4gICAgaWYgdHlwZW9mIHRleHQgPT0gJ3N0cmluZycgYW5kIHBocmFzZVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHBocmFzZSArICcpJywgJ2dpJyksICc8Yj4kMTwvYj4nKVxuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwgdGV4dC50b1N0cmluZygpXG4gICAgcmV0dXJuIHRleHRcblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnb3JkaW5hbCcsIC0+XG4gIChpbnB1dCkgLT5cbiAgICBzID0gW1xuICAgICAgJ3RoJ1xuICAgICAgJ3N0J1xuICAgICAgJ25kJ1xuICAgICAgJ3JkJ1xuICAgIF1cbiAgICB2ID0gaW5wdXQgJSAxMDBcbiAgICBpbnB1dCArIChzWyh2IC0gMjApICUgMTBdIG9yIHNbdl0gb3Igc1swXSlcbiJdfQ==

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
  angular.module('identifiAngular').directive('identicon', function() {
    return {
      scope: {
        identity: '='
      },
      link: function(scope, element, attrs) {
        var update;
        attrs.showDistance = typeof attrs.showDistance === 'undefined' ? true : !!parseInt(attrs.showDistance);
        attrs.border = isNaN(attrs.border) ? 3 : attrs.border;
        update = function() {
          var identicon;
          if (scope.identity && scope.identity.identicon) {
            identicon = scope.identity.identicon(attrs.width, attrs.border, attrs.showDistance);
            element.empty();
            return element.append(identicon);
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsV0FEYixFQUMwQixTQUFBO1dBQ3RCO01BQUEsS0FBQSxFQUNFO1FBQUEsUUFBQSxFQUFVLEdBQVY7T0FERjtNQUVBLElBQUEsRUFBTSxTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCO0FBQ0osWUFBQTtRQUFBLEtBQUssQ0FBQyxZQUFOLEdBQXdCLE9BQU8sS0FBSyxDQUFDLFlBQWIsS0FBNkIsV0FBaEMsR0FBaUQsSUFBakQsR0FBMkQsQ0FBQyxDQUFDLFFBQUEsQ0FBUyxLQUFLLENBQUMsWUFBZjtRQUNsRixLQUFLLENBQUMsTUFBTixHQUFrQixLQUFBLENBQU0sS0FBSyxDQUFDLE1BQVosQ0FBSCxHQUE0QixDQUE1QixHQUFtQyxLQUFLLENBQUM7UUFDeEQsTUFBQSxHQUFTLFNBQUE7QUFDUCxjQUFBO1VBQUEsSUFBRyxLQUFLLENBQUMsUUFBTixJQUFrQixLQUFLLENBQUMsUUFBUSxDQUFDLFNBQXBDO1lBQ0UsU0FBQSxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBZixDQUF5QixLQUFLLENBQUMsS0FBL0IsRUFBc0MsS0FBSyxDQUFDLE1BQTVDLEVBQW9ELEtBQUssQ0FBQyxZQUExRDtZQUNaLE9BQU8sQ0FBQyxLQUFSLENBQUE7bUJBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxTQUFmLEVBSEY7O1FBRE87ZUFLVCxLQUFLLENBQUMsV0FBTixDQUFrQixDQUFDLFVBQUQsQ0FBbEIsRUFBZ0MsTUFBaEM7TUFSSSxDQUZOOztFQURzQixDQUQxQjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyBjb2ZmZWVsaW50OiBkaXNhYmxlPW1heF9saW5lX2xlbmd0aFxuYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmRpcmVjdGl2ZSAnaWRlbnRpY29uJywgLT5cbiAgICBzY29wZTpcbiAgICAgIGlkZW50aXR5OiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgYXR0cnMuc2hvd0Rpc3RhbmNlID0gaWYgdHlwZW9mIGF0dHJzLnNob3dEaXN0YW5jZSA9PSAndW5kZWZpbmVkJyB0aGVuIHRydWUgZWxzZSAhIXBhcnNlSW50KGF0dHJzLnNob3dEaXN0YW5jZSlcbiAgICAgIGF0dHJzLmJvcmRlciA9IGlmIGlzTmFOKGF0dHJzLmJvcmRlcikgdGhlbiAzIGVsc2UgYXR0cnMuYm9yZGVyXG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBpZiBzY29wZS5pZGVudGl0eSAmJiBzY29wZS5pZGVudGl0eS5pZGVudGljb25cbiAgICAgICAgICBpZGVudGljb24gPSBzY29wZS5pZGVudGl0eS5pZGVudGljb24oYXR0cnMud2lkdGgsIGF0dHJzLmJvcmRlciwgYXR0cnMuc2hvd0Rpc3RhbmNlKVxuICAgICAgICAgIGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGlkZW50aWNvbilcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsnaWRlbnRpdHknXSwgdXBkYXRlXG4iXX0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0EsQ0FBQyxTQURELENBQ1csU0FEWCxFQUNzQixTQUFBO1dBQ3BCLFNBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkO01BQ0UsS0FBSyxDQUFDLEdBQU4sQ0FBVSxTQUFWLEVBQXFCLFNBQUMsQ0FBRCxFQUFJLElBQUo7UUFDbkIsSUFBRyxJQUFBLEtBQVEsSUFBSSxDQUFDLE9BQWhCO1VBQ0UsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQVIsQ0FBQSxFQURGOztNQURtQixDQUFyQjtJQURGO0VBRG9CLENBRHRCOztFQVNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDQSxDQUFDLE9BREQsQ0FDUyxPQURULEVBQ2tCLFNBQUMsVUFBRCxFQUFhLFFBQWI7V0FDaEIsU0FBQyxJQUFEO01BQ0UsUUFBQSxDQUFTLFNBQUE7UUFDUCxVQUFVLENBQUMsVUFBWCxDQUFzQixTQUF0QixFQUFpQyxJQUFqQztNQURPLENBQVQ7SUFERjtFQURnQixDQURsQjtBQVRBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuLmZhY3RvcnkgJ2ZvY3VzJywgKCRyb290U2NvcGUsICR0aW1lb3V0KSAtPlxuICAobmFtZSkgLT5cbiAgICAkdGltZW91dCAtPlxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdmb2N1c09uJywgbmFtZVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG4iXX0=

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
  var hasProp = {}.hasOwnProperty;

  angular.module('identifiAngular').controller('MessagesController', [
    '$scope', '$rootScope', '$window', '$stateParams', '$location', '$http', 'Messages', 'config', '$timeout', 'localStorageService', function($scope, $rootScope, $window, $stateParams, $location, $http, Messages, config, $timeout, localStorageService) {
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.filters.type = 'rating';
      $scope.resetMsgs = function() {
        var msgs, prop, value;
        msgs = localStorageService.get('localMessages') || {};
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
        var searchKey;
        if ($scope.msgs.loading) {
          return;
        }
        $scope.msgs.loading = true;
        searchKey = '';
        if ($scope.msgs.list.length) {
          searchKey = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey;
        }
        return $scope.identifiIndex.messagesByTimestamp.searchText('', $scope.filters.limit, searchKey, true).then(function(res) {
          var i, len, m, messages, pair, ref, ref1;
          messages = [];
          for (i = 0, len = res.length; i < len; i++) {
            pair = res[i];
            m = $window.identifiLib.Message.fromJws(pair.value.jws);
            m.ipfs_hash = pair.value.ipfs_hash;
            m.authorPos = pair.value.author_pos;
            m.authorNeg = pair.value.author_neg;
            m.authorTrustDistance = pair.value.distance;
            m.authorName = pair.value.author_name;
            m.searchKey = pair.key;
            m.isVerification = (ref = m.signedData.type) === 'verification' || ref === 'verify_identity';
            m.isUnverification = (ref1 = m.signedData.type) === 'unverification' || ref1 === 'unverify_identity';
            messages.push(m);
          }
          $scope.processMessages(messages);
          Array.prototype.push.apply($scope.msgs.list, messages);
          if (res.length < $scope.filters.limit - 1) {
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
        console.log('setFilters');
        angular.extend($scope.filters, filters);
        $scope.resetMsgs();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        var hash, processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          processResponse = function() {
            $scope.processMessages([$scope.message], {}, true);
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyHash = $scope.message.getSignerKeyID();
            return $scope.identifiIndex.get($scope.message.signerKeyHash, 'keyID').then(function(profile) {
              if (!profile) {
                profile = new $window.identifiLib.Identity({
                  attrs: [
                    {
                      name: 'keyID',
                      val: $scope.message.signerKeyHash
                    }
                  ]
                });
              }
              return $scope.$apply(function() {
                return $scope.message.verifiedBy = profile;
              });
            });
          };
          return $scope.$watch('apiReady', function(isReady) {
            if (isReady) {
              if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) {
                return $scope.ipfsGet(hash).then(function(res) {
                  $scope.message = $window.identifiLib.Message.fromJws(res);
                  $scope.message.ipfs_hash = hash;
                  return processResponse();
                })["catch"](function(e) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLG9CQUE3QyxFQUFtRTtJQUNqRSxRQURpRSxFQUVqRSxZQUZpRSxFQUdqRSxTQUhpRSxFQUlqRSxjQUppRSxFQUtqRSxXQUxpRSxFQU1qRSxPQU5pRSxFQVFqRSxVQVJpRSxFQVNqRSxRQVRpRSxFQVVqRSxVQVZpRSxFQVdqRSxxQkFYaUUsRUFZakUsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixPQUFyQixFQUE4QixZQUE5QixFQUE0QyxTQUE1QyxFQUF1RCxLQUF2RCxFQUE4RCxRQUE5RCxFQUF3RSxNQUF4RSxFQUFnRixRQUFoRixFQUEwRixtQkFBMUY7TUFDRSxNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7TUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO01BRTlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixHQUFzQjtNQUV0QixNQUFNLENBQUMsU0FBUCxHQUFtQixTQUFBO0FBQ2pCLFlBQUE7UUFBQSxJQUFBLEdBQU8sbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztlQUNuRCxNQUFNLENBQUMsSUFBUCxHQUNFO1VBQUEsT0FBQSxFQUFTLEtBQVQ7VUFDQSxRQUFBLEVBQVUsS0FEVjtVQUVBLElBQUE7O0FBQU87aUJBQUEsWUFBQTs7OzJCQUFBO0FBQUE7O2NBRlA7O01BSGU7TUFNbkIsTUFBTSxDQUFDLFNBQVAsQ0FBQTtNQUVBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxJ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LFNBQUE7dUJBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFmLEdBQTRCO2NBQS9CLENBQWQ7WUFIbUUsQ0FBckU7VUFMZ0I7aUJBVWxCLE1BQU0sQ0FBQyxNQUFQLENBQWMsVUFBZCxFQUEwQixTQUFDLE9BQUQ7WUFDeEIsSUFBRyxPQUFIO2NBQ0UsSUFBRyxJQUFJLENBQUMsS0FBTCxDQUFXLHdCQUFYLENBQUg7dUJBQ0UsTUFBTSxDQUFDLE9BQVAsQ0FBZSxJQUFmLENBQW9CLENBQUMsSUFBckIsQ0FBMEIsU0FBQyxHQUFEO2tCQUN4QixNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUE1QixDQUFvQyxHQUFwQztrQkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFmLEdBQTJCO3lCQUMzQixlQUFBLENBQUE7Z0JBSHdCLENBQTFCLENBSUEsRUFBQyxLQUFELEVBSkEsQ0FJTyxTQUFDLENBQUQ7eUJBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFaO2dCQURLLENBSlAsRUFERjtlQURGOztVQUR3QixDQUExQixFQVpGOztNQURlO0lBckVuQixDQVppRTtHQUFuRTtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNZXNzYWdlc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ01lc3NhZ2VzJ1xuICAnY29uZmlnJ1xuICAnJHRpbWVvdXQnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsIE1lc3NhZ2VzLCBjb25maWcsICR0aW1lb3V0LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG5cbiAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gJ3JhdGluZydcblxuICAgICRzY29wZS5yZXNldE1zZ3MgPSAtPlxuICAgICAgbXNncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgICRzY29wZS5tc2dzID1cbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgZmluaXNoZWQ6IGZhbHNlXG4gICAgICAgIGxpc3Q6ICh2YWx1ZSBmb3Igb3duIHByb3AsIHZhbHVlIG9mIG1zZ3MpXG4gICAgJHNjb3BlLnJlc2V0TXNncygpXG5cbiAgICAkc2NvcGUuaWNvbkNvdW50ID0gKHJhdGluZykgLT5cbiAgICAgIG5ldyBBcnJheShNYXRoLm1heCgxLCBNYXRoLmFicyhyYXRpbmcpKSlcblxuICAgICRzY29wZS5pY29uU3R5bGUgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ25ldXRyYWwnXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdwb3NpdGl2ZSdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnbmVnYXRpdmUnXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5pY29uQ2xhc3MgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi1xdWVzdGlvbi1zaWduJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy11cCdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy1kb3duJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG5cbiAgICAkc2NvcGUuZmluZCA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLm1zZ3MubG9hZGluZ1xuICAgICAgJHNjb3BlLm1zZ3MubG9hZGluZyA9IHRydWVcbiAgICAgICMgR2V0IGxhdGVzdCBtZXNzYWdlcyBmcm9tIGlwZnMgaW5kZXhcbiAgICAgIHNlYXJjaEtleSA9ICcnXG4gICAgICBpZiAkc2NvcGUubXNncy5saXN0Lmxlbmd0aFxuICAgICAgICBzZWFyY2hLZXkgPSAkc2NvcGUubXNncy5saXN0WyRzY29wZS5tc2dzLmxpc3QubGVuZ3RoIC0gMV0uc2VhcmNoS2V5XG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5tZXNzYWdlc0J5VGltZXN0YW1wLnNlYXJjaFRleHQoJycsICRzY29wZS5maWx0ZXJzLmxpbWl0LCBzZWFyY2hLZXksIHRydWUpICMgVE9ETzogaW1wbGVtZW50IGluIGlkZW50aWZpLWxpYlxuICAgICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICAgbWVzc2FnZXMgPSBbXVxuICAgICAgICBmb3IgcGFpciBpbiByZXNcbiAgICAgICAgICBtID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmZyb21Kd3MocGFpci52YWx1ZS5qd3MpXG4gICAgICAgICAgbS5pcGZzX2hhc2ggPSBwYWlyLnZhbHVlLmlwZnNfaGFzaFxuICAgICAgICAgIG0uYXV0aG9yUG9zID0gcGFpci52YWx1ZS5hdXRob3JfcG9zXG4gICAgICAgICAgbS5hdXRob3JOZWcgPSBwYWlyLnZhbHVlLmF1dGhvcl9uZWdcbiAgICAgICAgICBtLmF1dGhvclRydXN0RGlzdGFuY2UgPSBwYWlyLnZhbHVlLmRpc3RhbmNlXG4gICAgICAgICAgbS5hdXRob3JOYW1lID0gcGFpci52YWx1ZS5hdXRob3JfbmFtZVxuICAgICAgICAgIG0uc2VhcmNoS2V5ID0gcGFpci5rZXlcbiAgICAgICAgICBtLmlzVmVyaWZpY2F0aW9uID0gbS5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZmljYXRpb24nLCAndmVyaWZ5X2lkZW50aXR5J11cbiAgICAgICAgICBtLmlzVW52ZXJpZmljYXRpb24gPSBtLnNpZ25lZERhdGEudHlwZSBpbiBbJ3VudmVyaWZpY2F0aW9uJywgJ3VudmVyaWZ5X2lkZW50aXR5J11cbiAgICAgICAgICBtZXNzYWdlcy5wdXNoKG0pXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgbWVzc2FnZXNcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLm1zZ3MubGlzdCwgbWVzc2FnZXMpXG4gICAgICAgIGlmIHJlcy5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDEgIyBidWdcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmxvYWRpbmcgPSBmYWxzZVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGNvbnNvbGUubG9nICdzZXRGaWx0ZXJzJ1xuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcbiAgICAgICRzY29wZS5yZXNldE1zZ3MoKVxuICAgICAgJHRpbWVvdXQgLT4gJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdtc2dTY3JvbGxDaGVjaydcblxuICAgICMgRmluZCBleGlzdGluZyBNZXNzYWdlXG4gICAgJHNjb3BlLmZpbmRPbmUgPSAtPlxuICAgICAgaWYgJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIGhhc2ggPSAkc3RhdGVQYXJhbXMuaWRcbiAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlID0gLT5cbiAgICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFskc2NvcGUubWVzc2FnZV0sIHt9LCB0cnVlKVxuICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJ01lc3NhZ2UgJyArIGhhc2hcbiAgICAgICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSgkc2NvcGUubWVzc2FnZSlcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlIYXNoID0gJHNjb3BlLm1lc3NhZ2UuZ2V0U2lnbmVyS2V5SUQoKVxuICAgICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlIYXNoLCAna2V5SUQnKS50aGVuIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgdW5sZXNzIHByb2ZpbGVcbiAgICAgICAgICAgICAgcHJvZmlsZSA9IG5ldyAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5KHthdHRyczpbe25hbWU6ICdrZXlJRCcsIHZhbDogJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SGFzaH1dfSlcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9IHByb2ZpbGVcblxuICAgICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICAgIGlmIGlzUmVhZHlcbiAgICAgICAgICAgIGlmIGhhc2gubWF0Y2ggL15RbVsxLTlBLVphLXpdezQwLDUwfSQvICMgbG9va3MgbGlrZSBhbiBpcGZzIGFkZHJlc3NcbiAgICAgICAgICAgICAgJHNjb3BlLmlwZnNHZXQoaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmZyb21Kd3MocmVzKVxuICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlLmlwZnNfaGFzaCA9IGhhc2hcbiAgICAgICAgICAgICAgICBwcm9jZXNzUmVzcG9uc2UoKVxuICAgICAgICAgICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgZVxuXG4gICAgcmV0dXJuXG5dXG4iXX0=

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope', '$rootScope', '$location', '$http', '$state', 'config', 'localStorageService', '$uibModal', '$window', '$q', 'focus', function($scope, $rootScope, $location, $http, $state, config, localStorageService, $uibModal, $window, $q, focus) {

      /*
      Persona.watch
        loggedInUser: Authentication.user.email
        onlogin: (assertion) ->
          $http.post('/auth/persona', assertion: assertion).then ->
            location.reload()
             * FIXME
                          onlogout: ->
       */
      var privateKey, scrollTo;
      $scope.authentication = {};
      $scope.localMessages = localStorageService.get('localMessages') || {};
      localStorageService.set('localMessages', $scope.localMessages);
      $scope.nodeInfo = {
        keyID: null
      };
      $scope.ipfsRoot = 'https://identi.fi';
      $scope.getIdKey = function(id) {
        if (Array.isArray(id)) {
          return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1]);
        } else {
          return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val);
        }
      };
      $scope.loginWithKey = function(privateKeySerialized) {
        $scope.privateKey = $window.identifiLib.util.jwkToPrvKey(JSON.parse(privateKeySerialized));
        localStorageService.set('identifiKey', privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $scope.privateKey.keyID
        };
        $scope.authentication.identity = new $window.identifiLib.Identity({
          attrs: [
            {
              name: 'keyID',
              val: $scope.privateKey.keyID
            }
          ]
        });
        if ($scope.loginModal) {
          return $scope.loginModal.close();
        }
      };
      privateKey = localStorageService.get('identifiKey');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
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
        repo: 'ipfs6-identifi',
        config: {
          Bootstrap: ['/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd', '/dns4/sfo-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx', '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3', '/dns4/sfo-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z', '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM', '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu', '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm', '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64']
        }
      });
      $scope.ipfs.on('ready', function() {
        console.log($scope.ipfs);
        $window.ipfs = $scope.ipfs;
        return $scope.ipfs.pubsub.subscribe('identifi', function(msg) {
          var localMessages;
          msg = $window.identifiLib.Message.fromJws($scope.ipfs.types.Buffer(msg.data).toString());
          console.log('identifi message received', msg, hash);
          localMessages = localStorageService.get('localMessages');
          $scope.processMessages([msg]);
          localMessages[hash] = msg;
          return localStorageService.set('localMessages', localMessages);
        });
      });
      $scope.initIpfsIndexes = function() {
        var indexRoot;
        $window.identifiLib.Index.load().then(function(results) {
          $scope.identifiIndex = results;
          console.log('Got index', $scope.identifiIndex);
          return $scope.$apply(function() {
            return $scope.apiReady = true;
          });
        });
        indexRoot = '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs';
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
        if (true) {
          return $http.get('https://identi.fi/ipfs/' + uri).then(function(res) {
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
        var message, options;
        if (event) {
          event.stopPropagation();
        }
        message = null;
        if (params.type === 'rating') {
          params.maxRating |= 3;
          params.minRating |= -3;
          message = new $window.identifiLib.Message.createRating(params, $scope.privateKey);
          console.log(message);
        } else {
          message = new $window.identifiLib.Message.createVerification(params, $scope.privateKey);
        }
        options = {};
        return $scope.identifiIndex.publishMessage(message).then(function(response) {
          console.log(response);
          $scope.newMessage.comment = '';
          $scope.newMessage.rating = 1;
          $scope.newVerification.type = '';
          $scope.newVerification.value = '';
          $scope.$root.$broadcast('MessageAdded', {
            message: message,
            id: id
          });
          return response.data;
        })["catch"](function(e) {
          console.error(e);
          return $scope.error = e;
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
        $scope.privateKey = $window.identifiLib.util.generateKey();
        console.log($scope.privateKey);
        return $scope.privateKeySerialized = JSON.stringify($window.identifiLib.util.prvKeyToJwk($scope.privateKey));
      };
      $scope.downloadKey = function() {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI($scope.privateKeySerialized);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'identifi_private_key.txt';
        return hiddenElement.click();
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
        $scope.privateKeySerialized = '';
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
        return msg.strData = JSON.stringify(showRawData, void 0, 2);
      };
      $scope.profileFromData = function(data, fallbackId) {
        if (data.attrs && data.attrs.length) {
          return new $window.identifiLib.Identity({
            attrs: data.attrs
          });
        }
        return new $window.identifiLib.Identity({
          attrs: [fallbackId]
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
        $scope.message.signerKeyHash = $scope.message.getSignerKeyID();
        $scope.identifiIndex.get($scope.message.signerKeyHash, 'keyID').then(function(profile) {
          if (!profile) {
            profile = new $window.identifiLib.Identity({
              attrs: [
                {
                  name: 'keyID',
                  val: $scope.message.signerKeyHash
                }
              ]
            });
          }
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
      $scope.isCollapsed = false;
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages, msgOptions, verifySignature) {
        var processMessage;
        processMessage = function(msg) {
          var alpha, i, index, maxRatingDiff, minRatingDiff, neutralRating, rating, ref, ref1, signedData, smallestIndex;
          msg.data = msg.signedData;
          if (msg.getAuthor && !(msgOptions && msgOptions.authorIsSelf)) {
            msg.author = msg.getAuthor();
          }
          if (msg.author) {
            msg.author.trustDistance = msg.authorTrustDistance;
          }
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
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              msg.hasSuccess = 'has-success';
              return msg.isVerification = true;
            case 'connection':
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              return msg.hasSuccess = 'has-success';
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
          return processMessage(msg);
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
      $scope.setIdentityNames = function(i, htmlSafe) {
        if (i.mostVerifiedAttributes.name) {
          i.primaryName = i.mostVerifiedAttributes.name.attribute.val;
        } else if (i.mostVerifiedAttributes.nickname) {
          i.primaryName = i.mostVerifiedAttributes.nickname.attribute.val;
        } else {
          i.primaryName = i.data.attrs[0].val;
        }
        if (i.primaryName) {
          if (i.mostVerifiedAttributes.nickname && i.mostVerifiedAttributes.nickname.attribute.val !== i.primaryName) {
            i.nickname = i.mostVerifiedAttributes.nickname.attribute.val;
            if (htmlSafe) {
              i.nickname = i.nickname.replace('<', '&lt;');
            }
          }
        }
        if (htmlSafe) {
          return i.primaryName = i.primaryName.replace('<', '&lt;');
        }
      };
      $scope.searchRequest = null;
      $scope.search = function(query, limit) {
        var cursor, searchKey;
        $scope.ids.loading = true;
        $scope.identitiesByHash = {};
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        $scope.searchKey = searchKey;
        if (searchKey !== $scope.previousSearchKey) {
          $scope.ids.list = [];
          $scope.ids.finished = false;
          $scope.identitiesByHash = {};
        }
        $scope.previousSearchKey = searchKey;
        limit = limit || 30;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        if (searchKey.length) {
          $scope.searchRequest = $scope.identifiIndex.search(searchKey, void 0, limit, cursor).then(function(identities) {
            return {
              identities: identities,
              searchKey: searchKey
            };
          });
        } else {
          $scope.searchRequest = $scope.identifiIndex.search(searchKey, void 0, limit, cursor).then(function(identities) {
            return {
              identities: identities,
              searchKey: searchKey
            };
          });
        }
        $scope.searchRequest = $scope.searchRequest.then(function(res) {
          var identities;
          if (res.searchKey !== $scope.searchKey) {
            return;
          }
          identities = res.identities;
          identities.forEach(function(i) {
            return $scope.setIdentityNames(i, true);
          });
          searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
          if (searchKey !== $scope.previousSearchKey) {
            return;
          }
          $scope.ids.list = $scope.ids.list || [];
          if (identities.length < limit) {
            $scope.ids.finished = true;
          }
          if (identities.length && $scope.ids.list.length && $scope.getIdKey(identities[0].linkTo) === $scope.getIdKey($scope.ids.list[$scope.ids.list.length - 1].linkTo)) {
            identities.shift();
          }
          $scope.ids.list = $scope.ids.list.concat(identities);
          if (identities.length > 0 && $scope.ids.list.length === identities.length) {
            $scope.ids.activeKey = 0;
            $scope.ids.list[0].active = true;
          }
          $scope.$apply(function() {
            return $scope.ids.loading = false;
          });
          return $scope.ids.list;
        });
        return $scope.searchRequest;
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
              type: id.linkTo.name,
              value: id.linkTo.val
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
          type: item.linkTo.name,
          value: item.linkTo.val
        });
        return $scope.query.term = '';
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFXN0QsT0FYNkQsRUFnQjdELFNBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsU0FBckIsRUFBZ0MsS0FBaEMsRUFBdUMsTUFBdkMsRUFBK0MsTUFBL0MsRUFDQSxtQkFEQSxFQUNxQixTQURyQixFQUNnQyxPQURoQyxFQUN5QyxFQUR6QyxFQUM2QyxLQUQ3Qzs7QUFFRTs7Ozs7Ozs7O0FBQUEsVUFBQTtNQVdBLE1BQU0sQ0FBQyxjQUFQLEdBQXdCO01BQ3hCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLENBQUEsSUFBNEM7TUFDbkUsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsRUFBeUMsTUFBTSxDQUFDLGFBQWhEO01BRUEsTUFBTSxDQUFDLFFBQVAsR0FBa0I7UUFBRSxLQUFBLEVBQU8sSUFBVDs7TUFDbEIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFFbEIsTUFBTSxDQUFDLFFBQVAsR0FBa0IsU0FBQyxFQUFEO1FBQ2hCLElBQUcsS0FBSyxDQUFDLE9BQU4sQ0FBYyxFQUFkLENBQUg7QUFDRSxpQkFBTyxrQkFBQSxDQUFtQixFQUFHLENBQUEsQ0FBQSxDQUF0QixDQUFBLEdBQTRCLEdBQTVCLEdBQWtDLGtCQUFBLENBQW1CLEVBQUcsQ0FBQSxDQUFBLENBQXRCLEVBRDNDO1NBQUEsTUFBQTtB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bmd1bGFyJykuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICdjb25maWcnLFxuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJyR1aWJNb2RhbCdcbiAgJyR3aW5kb3cnXG4gICckcSdcbiAgJ2ZvY3VzJ1xuXG4gICMnQXV0aGVudGljYXRpb24nXG4gICMnTWVudXMnXG4gICMnUGVyc29uYSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsICR1aWJNb2RhbCwgJHdpbmRvdywgJHEsIGZvY3VzKSAtPiAjIEF1dGhlbnRpY2F0aW9uLCBNZW51cywgUGVyc29uYVxuICAgICMjI1xuICAgIFBlcnNvbmEud2F0Y2hcbiAgICAgIGxvZ2dlZEluVXNlcjogQXV0aGVudGljYXRpb24udXNlci5lbWFpbFxuICAgICAgb25sb2dpbjogKGFzc2VydGlvbikgLT5cbiAgICAgICAgJGh0dHAucG9zdCgnL2F1dGgvcGVyc29uYScsIGFzc2VydGlvbjogYXNzZXJ0aW9uKS50aGVuIC0+XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAjIEZJWE1FXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmxvZ291dDogLT5cbiAgICAjIyNcblxuICAgICMgc2V0IGF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge30gIyBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKSBvciB7fVxuICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbE1lc3NhZ2VzJywgJHNjb3BlLmxvY2FsTWVzc2FnZXMpXG5cbiAgICAkc2NvcGUubm9kZUluZm8gPSB7IGtleUlEOiBudWxsIH1cbiAgICAkc2NvcGUuaXBmc1Jvb3QgPSAnaHR0cHM6Ly9pZGVudGkuZmknICMgdXNlZCBmb3IgcHJvZmlsZSAvIGNvdmVyIHBob3Rvc1xuXG4gICAgJHNjb3BlLmdldElkS2V5ID0gKGlkKSAtPlxuICAgICAgaWYgQXJyYXkuaXNBcnJheShpZClcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZFswXSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWRbMV0pXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWQubmFtZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudmFsKVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5U2VyaWFsaXplZCkgLT5cbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gJHdpbmRvdy5pZGVudGlmaUxpYi51dGlsLmp3a1RvUHJ2S2V5KEpTT04ucGFyc2UocHJpdmF0ZUtleVNlcmlhbGl6ZWQpKVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2lkZW50aWZpS2V5JywgcHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9XG4gICAgICAgIGlkVHlwZTogJ2tleUlEJ1xuICAgICAgICBpZFZhbHVlOiAkc2NvcGUucHJpdmF0ZUtleS5rZXlJRFxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5ID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkoe2F0dHJzOlt7bmFtZTogJ2tleUlEJywgdmFsOiAkc2NvcGUucHJpdmF0ZUtleS5rZXlJRH1dfSlcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKCkgaWYgJHNjb3BlLmxvZ2luTW9kYWxcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcblxuICAgICRzY29wZS5xdWVyeSA9IHt9XG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9ICcnXG4gICAgJHNjb3BlLmlkcyA9IHsgbGlzdDogW10gfVxuICAgICRzY29wZS5waG9uZVJlZ2V4ID0gL15cXCs/XFxkKyQvXG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgRVhQRVJJTUVOVEFMOiB7XG4gICAgICAgIHB1YnN1YjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmczYtaWRlbnRpZmknXG4gICAgICBjb25maWc6IEJvb3RzdHJhcDogW1xuICAgICAgICAnL2RuczQvYW1zLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MZXIyNjVOUmdTcDJMQTNkUGFleWtpUzFKNkRpZlRDODhmNXVWUUtOQWQnXG4gICAgICAgICcvZG5zNC9zZm8tMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xqdTZtN3hUaDNEdW9rdlQzODg2UVJZcXhBemIxa1NoYWFuSmdXMzZ5eCdcbiAgICAgICAgJy9kbnM0L2xvbi0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTE1lV3FCN1lHVkxKTjNwTkxRcG1tRWszNXY2d1l0c01HTHpTcjVRQlUzJ1xuICAgICAgICAnL2RuczQvc2ZvLTIuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MblNHY2NGdVpRSnpSYWRIbjk1VzJDclNGbVp1VGREV1A4SFhhSGNhOXonXG4gICAgICAgICcvZG5zNC9zZm8tMy5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xQcHB1QnRRU0d3S0RaVDJNNzNVTHBqdmZkM2FaNmhhNG9GR0wxS3JHTSdcbiAgICAgICAgJy9kbnM0L3NncC0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTFNhZlRNQnNQS2FkVEVnYVhjdERRVmNxTjg4Q05MSFhNa1ROd01LUG51J1xuICAgICAgICAnL2RuczQvbnljLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MdWVSNHhCZVViWTlXWjl4R1VVeHVuYktXY3JORlREQWFkUUptb2NuV20nXG4gICAgICAgICcvZG5zNC9ueWMtMi5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xWNEJibTUxak05QzRnRFlaUTlDeTNVNmFYTUpEQWJ6Z3UyZnphRHM2NCdcbiAgICAgIF0pXG5cbiAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgY29uc29sZS5sb2cgJHNjb3BlLmlwZnNcbiAgICAgICR3aW5kb3cuaXBmcyA9ICRzY29wZS5pcGZzXG4gICAgICAkc2NvcGUuaXBmcy5wdWJzdWIuc3Vic2NyaWJlICdpZGVudGlmaScsIChtc2cpIC0+XG4gICAgICAgIG1zZyA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tSndzKCRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihtc2cuZGF0YSkudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc29sZS5sb2cgJ2lkZW50aWZpIG1lc3NhZ2UgcmVjZWl2ZWQnLCBtc2csIGhhc2hcbiAgICAgICAgbG9jYWxNZXNzYWdlcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJylcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbbXNnXSlcbiAgICAgICAgbG9jYWxNZXNzYWdlc1toYXNoXcKgPSBtc2dcbiAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCBsb2NhbE1lc3NhZ2VzKVxuICAgICAgIyRzY29wZS5pbml0SXBmc0luZGV4ZXMoKVxuXG4gICAgJHNjb3BlLmluaXRJcGZzSW5kZXhlcyA9IC0+XG4gICAgICAkd2luZG93LmlkZW50aWZpTGliLkluZGV4LmxvYWQoKVxuICAgICAgLnRoZW4gKHJlc3VsdHMpIC0+XG4gICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4ID0gcmVzdWx0c1xuICAgICAgICBjb25zb2xlLmxvZyAnR290IGluZGV4JywgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUuYXBpUmVhZHkgPSB0cnVlXG5cbiAgICAgICMgVE9ETzogZ2V0IHRoaXMgZnJvbSBpZGVudGlmaUxpYlxuICAgICAgaW5kZXhSb290ID0gJy9pcG5zL1FtYmIxRFJ3ZDc1clprNVRvdFRYSll6RFNKTDZCYU5UMURBUTZWYktjS0xoYnMnXG4gICAgICAkaHR0cC5nZXQgJ2h0dHBzOi8vaWRlbnRpLmZpJyArIGluZGV4Um9vdCArICcvaW5mbydcbiAgICAgIC5jYXRjaCAoZXJyKSAtPlxuICAgICAgICAkaHR0cC5nZXQgJ2h0dHBzOi8vaXBmcy5pbycgKyBpbmRleFJvb3QgKyAnL2luZm8nXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICAkc2NvcGUubm9kZUluZm8ucHJvZmlsZSA9ICRzY29wZS5wcm9maWxlRnJvbURhdGEocmVzLmRhdGEsIFsna2V5SUQnLCByZXMuZGF0YS5rZXlJRF0pXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdpbml0aWFsaXphdGlvbiBmYWlsZWQ6JywgZVxuXG4gICAgJHNjb3BlLmluaXRJcGZzSW5kZXhlcygpXG5cbiAgICAkc2NvcGUuc2V0UGFnZVRpdGxlID0gKHRpdGxlKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAnSWRlbnRpZmknXG4gICAgICBpZiAodGl0bGUpXG4gICAgICAgICRyb290U2NvcGUucGFnZVRpdGxlICs9ICcgLSAnICsgdGl0bGVcblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSwgZ2V0SnNvbikgLT5cbiAgICAgIGpzSXBmc0dldCA9IC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdHZXR0aW5nIGZyb20ganMtaXBmcycsIHVyaVxuICAgICAgICAkc2NvcGUuaXBmcy5maWxlcy5jYXQodXJpKS50aGVuIChzdHJlYW0pIC0+XG4gICAgICAgICAgbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgICAgIHN0cmVhbS5vbiAnZGF0YScsIChmaWxlKSAtPlxuICAgICAgICAgICAgICBmaWxlID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGZpbGUpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZSkgaWYgZ2V0SnNvblxuICAgICAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgICAgICBzdHJlYW0ub24gJ2Vycm9yJywgKGVycm9yKSAtPlxuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG5cbiAgICAgIGlmIHRydWUgIyBUT0RPOiBobW1cbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnaHR0cHM6Ly9pZGVudGkuZmkvaXBmcy8nICsgdXJpKVxuICAgICAgICAudGhlbiAocmVzKSAtPiByZXMuZGF0YVxuICAgICAgICAuY2F0Y2ggLT4ganNJcGZzR2V0KClcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGpzSXBmc0dldCgpXG5cbiAgICAkc2NvcGUubmV3TWVzc2FnZSA9XG4gICAgICByYXRpbmc6IDFcbiAgICAgIGNvbW1lbnQ6ICcnXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2VcbiAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZSA9IChldmVudCwgcGFyYW1zLCBpZCkgLT5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIGlmIGV2ZW50XG4gICAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZSBvYmplY3RcbiAgICAgIG1lc3NhZ2UgPSBudWxsXG4gICAgICBpZiBwYXJhbXMudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBwYXJhbXMubWF4UmF0aW5nIHw9IDNcbiAgICAgICAgcGFyYW1zLm1pblJhdGluZyB8PSAtM1xuICAgICAgICBtZXNzYWdlID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVSYXRpbmcocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgY29uc29sZS5sb2cgbWVzc2FnZVxuICAgICAgZWxzZVxuICAgICAgICBtZXNzYWdlID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24ocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5wdWJsaXNoTWVzc2FnZShtZXNzYWdlKVxuICAgICAgLnRoZW4gKHJlc3BvbnNlKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyByZXNwb25zZVxuICAgICAgICAjIENsZWFyIGZvcm0gZmllbGRzXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLmNvbW1lbnQgPSAnJ1xuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5yYXRpbmcgPSAxXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUgPSAnJ1xuICAgICAgICAkc2NvcGUuJHJvb3QuJGJyb2FkY2FzdCAnTWVzc2FnZUFkZGVkJywge21lc3NhZ2UsIGlkfVxuICAgICAgICByZXNwb25zZS5kYXRhXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgJHNjb3BlLmVycm9yID0gZVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gJHdpbmRvdy5pZGVudGlmaUxpYi51dGlsLmdlbmVyYXRlS2V5KClcbiAgICAgIGNvbnNvbGUubG9nICRzY29wZS5wcml2YXRlS2V5XG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSgkd2luZG93LmlkZW50aWZpTGliLnV0aWwucHJ2S2V5VG9Kd2soJHNjb3BlLnByaXZhdGVLZXkpKVxuXG4gICAgJHNjb3BlLmRvd25sb2FkS2V5ID0gLT5cbiAgICAgIGhpZGRlbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGhpZGRlbkVsZW1lbnQuaHJlZiA9ICdkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSSgkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gJ2lkZW50aWZpX3ByaXZhdGVfa2V5LnR4dCdcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuXG4gICAgJHNjb3BlLm1zZ0ZpbHRlciA9ICh2YWx1ZSwgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IHZhbHVlLmRhdGEgb3IgdmFsdWUuc2lnbmVkRGF0YVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9PSAwIGFuZCB0eXBlb2YgdmFsdWUuYXV0aG9yVHJ1c3REaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA+IDAgYW5kIHZhbHVlLmF1dGhvclRydXN0RGlzdGFuY2UgPiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUucmVtb3ZlRm9jdXMgPSAoZXZlbnQpIC0+XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmJsdXIoKVxuXG4gICAgJHNjb3BlLmxvZ29DbGlja2VkID0gLT5cbiAgICAgIGZvY3VzKCdzZWFyY2hGb2N1cycpXG4gICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgICAgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0gIT0gJydcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0J1xuXG4gICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEgPSAobXNnKSAtPlxuICAgICAgc2hvd1Jhd0RhdGEgPVxuICAgICAgICBoYXNoOiBtc2cuaGFzaFxuICAgICAgICBkYXRhOiBtc2cuZGF0YVxuICAgICAgICBwcmlvcml0eTogbXNnLnByaW9yaXR5XG4gICAgICAgIGp3czogbXNnLmp3c1xuICAgICAgbXNnLnN0ckRhdGEgPSBKU09OLnN0cmluZ2lmeShzaG93UmF3RGF0YSwgdW5kZWZpbmVkLCAyKVxuXG4gICAgJHNjb3BlLnByb2ZpbGVGcm9tRGF0YSA9IChkYXRhLCBmYWxsYmFja0lkKSAtPlxuICAgICAgaWYgZGF0YS5hdHRycyBhbmQgZGF0YS5hdHRycy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIG5ldyAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5KHthdHRyczpkYXRhLmF0dHJzfSlcbiAgICAgIHJldHVybiBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eSh7YXR0cnM6W2ZhbGxiYWNrSWRdfSlcblxuICAgICRzY29wZS5vcGVuTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSwgc2l6ZSkgLT5cbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUhhc2ggPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SGFzaCwgJ2tleUlEJykudGhlbiAocHJvZmlsZSkgLT5cbiAgICAgICAgdW5sZXNzIHByb2ZpbGVcbiAgICAgICAgICBwcm9maWxlID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkoe2F0dHJzOlt7bmFtZTogJ2tleUlEJywgdmFsOiAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlIYXNofV19KVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSBwcm9maWxlXG4gICAgICBtb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICBtb2RhbEluc3RhbmNlLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgbW9kYWxJbnN0YW5jZS5jbG9zZSgpXG5cbiAgICAkc2NvcGUuZmlsdGVycyA9ICRzY29wZS5maWx0ZXJzIG9yIGNvbmZpZy5kZWZhdWx0RmlsdGVyc1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcbiAgICAjICRzY29wZS5tZW51ID0gTWVudXMuZ2V0TWVudSgndG9wYmFyJylcblxuICAgICRzY29wZS50b2dnbGVDb2xsYXBzaWJsZU1lbnUgPSAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gISRzY29wZS5pc0NvbGxhcHNlZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucywgdmVyaWZ5U2lnbmF0dXJlKSAtPlxuICAgICAgcHJvY2Vzc01lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICBtc2cuZGF0YSA9IG1zZy5zaWduZWREYXRhXG4gICAgICAgIG1zZy5hdXRob3IgPSBtc2cuZ2V0QXV0aG9yKCkgaWYgKG1zZy5nZXRBdXRob3IgYW5kIG5vdCAobXNnT3B0aW9ucyBhbmQgbXNnT3B0aW9ucy5hdXRob3JJc1NlbGYpKVxuICAgICAgICBtc2cuYXV0aG9yLnRydXN0RGlzdGFuY2UgPSBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSBpZiBtc2cuYXV0aG9yXG4gICAgICAgICMgVE9ETzogbWFrZSBzdXJlIG1lc3NhZ2Ugc2lnbmF0dXJlIGlzIGNoZWNrZWRcblxuICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yWzBdXG4gICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgaSA9IDBcbiAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLmF1dGhvci5sZW5ndGhcbiAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLmF1dGhvcltpXVswXSlcbiAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5kYXRhLmF1dGhvcltpXVxuICAgICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgbXNnLmRhdGEuYXV0aG9yW2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuZGF0YS5hdXRob3JbaV1bMV1cbiAgICAgICAgICBpKytcbiAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFswXVxuICAgICAgICBpID0gMFxuICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEucmVjaXBpZW50Lmxlbmd0aFxuICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEucmVjaXBpZW50W2ldWzBdKVxuICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50W2ldXG4gICAgICAgICAgZWxzZSBpZiAhbXNnLnJlY2lwaWVudF9uYW1lIGFuZCBtc2cuZGF0YS5yZWNpcGllbnRbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVsxXVxuICAgICAgICAgIGkrK1xuICAgICAgICBzaWduZWREYXRhID0gbXNnLmRhdGFcbiAgICAgICAgYWxwaGEgPSB1bmRlZmluZWRcbiAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnXG4gICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJydcbiAgICAgICAgbXNnLmJnQ29sb3IgPSAnJ1xuICAgICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICAgIHN3aXRjaCBzaWduZWREYXRhLnR5cGVcbiAgICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rIHBvc2l0aXZlJ1xuICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLXN1Y2Nlc3MnXG4gICAgICAgICAgICBtc2cuaXNWZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgd2hlbiAnY29ubmVjdGlvbidcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vayBwb3NpdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgIHdoZW4gJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBuZWdhdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1lcnJvcidcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgICAgbXNnLmlzVW52ZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgd2hlbiAncmF0aW5nJ1xuICAgICAgICAgICAgcmF0aW5nID0gc2lnbmVkRGF0YS5yYXRpbmdcbiAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAoc2lnbmVkRGF0YS5taW5SYXRpbmcgKyBzaWduZWREYXRhLm1heFJhdGluZykgLyAyXG4gICAgICAgICAgICBtYXhSYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBtaW5SYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5taW5SYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBpZiByYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXAgcG9zaXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtYXhSYXRpbmdEaWZmIDwgMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtYXhSYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyAtIDAuNSkgLyBtYXhSYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgIGVsc2UgaWYgcmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd24gbmVnYXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtaW5SYXRpbmdEaWZmID4gLTIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWluUmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgKyAwLjUpIC8gbWluUmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMzsnXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduIG5ldXRyYWwnXG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCBtZXNzYWdlcywgKG1zZywga2V5KSAtPlxuICAgICAgICBtc2dba10gPSB2IGZvciBrLCB2IG9mIG1zZ09wdGlvbnNcbiAgICAgICAgcHJvY2Vzc01lc3NhZ2UobXNnKVxuXG4gICAgIyBDb2xsYXBzaW5nIHRoZSBtZW51IGFmdGVyIG5hdmlnYXRpb25cbiAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdWNjZXNzJywgLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG5cbiAgICBzY3JvbGxUbyA9IChlbCkgLT5cbiAgICAgIGlmICFlbFxuICAgICAgICByZXR1cm5cbiAgICAgIHBvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBpZiBwb3MudG9wXG4gICAgICAgIGlmIHBvcy50b3AgLSA2MCA8ICR3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy50b3AgLSA2MFxuICAgICAgICBlbHNlIGlmIHBvcy5ib3R0b20gPiAkd2luZG93LnBhZ2VZT2Zmc2V0ICsgKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy5ib3R0b20gLSAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIDE1XG4gICAgICByZXR1cm5cblxuICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzID0gKGksIGh0bWxTYWZlKSAtPlxuICAgICAgaWYgaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5hbWVcbiAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGkubW9zdFZlcmlmaWVkQXR0cmlidXRlcy5uYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgIGVsc2UgaWYgaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5pY2tuYW1lXG4gICAgICAgIGkucHJpbWFyeU5hbWUgPSBpLm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMubmlja25hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgZWxzZVxuICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5kYXRhLmF0dHJzWzBdLnZhbFxuICAgICAgaWYgaS5wcmltYXJ5TmFtZVxuICAgICAgICBpZiBpLm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMubmlja25hbWUgYW5kIGkubW9zdFZlcmlmaWVkQXR0cmlidXRlcy5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsICE9IGkucHJpbWFyeU5hbWVcbiAgICAgICAgICBpLm5pY2tuYW1lID0gaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICBpLm5pY2tuYW1lID0gaS5uaWNrbmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgaS5wcmltYXJ5TmFtZSA9IGkucHJpbWFyeU5hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcblxuICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gbnVsbFxuICAgICRzY29wZS5zZWFyY2ggPSAocXVlcnksIGxpbWl0KSAtPlxuICAgICAgJHNjb3BlLmlkcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeUhhc2ggPSB7fVxuICAgICAgc2VhcmNoS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KChxdWVyeSBvciAkc2NvcGUucXVlcnkudGVybSBvciAnJykudG9Mb3dlckNhc2UoKSlcbiAgICAgICRzY29wZS5zZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZGVudGl0aWVzQnlIYXNoID0ge31cbiAgICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgbGltaXQgPSBsaW1pdCBvciAzMFxuICAgICAgY3Vyc29yID0gZmFsc2VcbiAgICAgIGlmICRzY29wZS5pZHMubGlzdC5sZW5ndGhcbiAgICAgICAgY3Vyc29yID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMubGlzdC5sZW5ndGggLSAxXS5jdXJzb3JcbiAgICAgIGlmIHNlYXJjaEtleS5sZW5ndGhcbiAgICAgICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5zZWFyY2goc2VhcmNoS2V5LCB1bmRlZmluZWQsIGxpbWl0LCBjdXJzb3IpXG4gICAgICAgIC50aGVuIChpZGVudGl0aWVzKSAtPiB7aWRlbnRpdGllcywgc2VhcmNoS2V5fVxuICAgICAgICAjIFRPRE86IHVzZSBkaXN0YW5jZSBpbmRleCBpbiBpZGVudGlmaUxpYj9cbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5zZWFyY2goc2VhcmNoS2V5LCB1bmRlZmluZWQsIGxpbWl0LCBjdXJzb3IpXG4gICAgICAgIC50aGVuIChpZGVudGl0aWVzKSAtPiB7aWRlbnRpdGllcywgc2VhcmNoS2V5fVxuICAgICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSAkc2NvcGUuc2VhcmNoUmVxdWVzdC50aGVuIChyZXMpIC0+XG4gICAgICAgIHJldHVybiBpZiByZXMuc2VhcmNoS2V5ICE9ICRzY29wZS5zZWFyY2hLZXlcbiAgICAgICAgaWRlbnRpdGllcyA9IHJlcy5pZGVudGl0aWVzXG4gICAgICAgIGlkZW50aXRpZXMuZm9yRWFjaCAoaSkgLT4gJHNjb3BlLnNldElkZW50aXR5TmFtZXMoaSwgdHJ1ZSlcbiAgICAgICAgc2VhcmNoS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KChxdWVyeSBvciAkc2NvcGUucXVlcnkudGVybSBvciAnJykudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgaWYgc2VhcmNoS2V5ICE9ICRzY29wZS5wcmV2aW91c1NlYXJjaEtleVxuICAgICAgICAgIHJldHVybiAjIHNlYXJjaCBrZXkgY2hhbmdlZFxuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSAkc2NvcGUuaWRzLmxpc3Qgb3IgW11cbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPCBsaW1pdFxuICAgICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoICYmICRzY29wZS5pZHMubGlzdC5sZW5ndGggJiZcbiAgICAgICAgJHNjb3BlLmdldElkS2V5KGlkZW50aXRpZXNbMF0ubGlua1RvKSA9PSAkc2NvcGUuZ2V0SWRLZXkoJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMubGlzdC5sZW5ndGggLSAxXS5saW5rVG8pXG4gICAgICAgICAgaWRlbnRpdGllcy5zaGlmdCgpICMgUHJldmVudCBkdXBsaWNhdGVcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gJHNjb3BlLmlkcy5saXN0LmNvbmNhdChpZGVudGl0aWVzKVxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCA+IDAgJiYgJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCA9PSBpZGVudGl0aWVzLmxlbmd0aFxuICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5ID0gMFxuICAgICAgICAgICRzY29wZS5pZHMubGlzdFswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLmlkcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0XG4gICAgICByZXR1cm4gJHNjb3BlLnNlYXJjaFJlcXVlc3RcblxuICAgICRzY29wZS5zZWFyY2hLZXlkb3duID0gKGV2ZW50KSAtPlxuICAgICAgc3dpdGNoIChpZiBldmVudCB0aGVuIGV2ZW50LndoaWNoIGVsc2UgLTEpXG4gICAgICAgIHdoZW4gMzhcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPiAwXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXkgLSAxXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleS0tXG4gICAgICAgICAgc2Nyb2xsVG8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSlcbiAgICAgICAgd2hlbiA0MFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA8ICgkc2NvcGUuaWRzLmxpc3QubGVuZ3RoIHx8IDApIC0gMVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5ICsgMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkrK1xuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gMTNcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWQgPSAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldXG4gICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGlkLmxpbmtUby5uYW1lLCB2YWx1ZTogaWQubGlua1RvLnZhbCB9XG4gICAgICAgIHdoZW4gLTFcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICB3aGVuIDMzLCAzNCwgMzUsIDM2LCAzNywgMzlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsID0gYW5ndWxhci5lbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgIHdhaXQgPSBzZXRUaW1lb3V0KCgtPlxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSBlbC52YWwoKVxuICAgICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICApLCAzMDApXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gd2FpdFxuICAgICAgICAgIGJyZWFrXG5cbiAgICAkc2NvcGUuZHJvcGRvd25TZWFyY2hTZWxlY3QgPSAoaXRlbSkgLT5cbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpdGVtLmxpbmtUby5uYW1lLCB2YWx1ZTogaXRlbS5saW5rVG8udmFsIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5dXG4iXX0=

(function() {
  'use strict';
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope', '$state', '$rootScope', '$window', '$stateParams', '$location', '$http', '$q', '$timeout', 'clipboard', 'config', 'localStorageService', function($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, clipboard, config, localStorageService) {
      var addLocalMessages, messagesAdded, thumbsDownObj, thumbsUpObj;
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
      $scope.copyIdLink = function() {
        return clipboard.copyText($scope.idUrl);
      };
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
        return $scope.createMessage(event, params).then(function(response) {
          return $state.go('messages.show', {
            id: response.ipfs_hash
          });
        }, function(error) {
          return console.log("error", error);
        });
      };
      $scope.getConnections = function() {
        var alpha, c, conn, connections, has, hash, i, id, idKey, j, k, key, len, len1, len2, mostConfirmations, msg, percentage, r, ref, ref1, ref2, ref3, ref4;
        $scope.connections = {};
        connections = $scope.identity.data.attrs || [];
        if (connections.length > 0) {
          c = connections[0];
          mostConfirmations = c.conf;
        } else {
          mostConfirmations = 1;
        }
        for (i = 0, len = connections.length; i < len; i++) {
          id = connections[i];
          $scope.connections[$scope.getIdKey(id)] = Object.assign({}, id);
        }
        ref = $scope.localMessages;
        for (hash in ref) {
          msg = ref[hash];
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
            for (k = 0, len2 = ref3.length; k < len2; k++) {
              r = ref3[k];
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
              conn.iconStyle = 'glyphicon glyphicon-font';
              break;
            case 'name':
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
                  'background-image': 'url(' + ($scope.ipfsRoot || '') + conn.val + ')'
                };
              }
              break;
            case 'profilePhoto':
              if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                $scope.profilePhoto = $scope.profilePhoto || ($scope.ipfsRoot || '') + conn.val;
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
            conn.link = ($scope.ipfsRoot || '') + conn.val;
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
        return $scope.connectionsLength = Object.keys($scope.connections).length;
      };
      $scope.getConnectingMsgs = function(id1, id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('', 10000, false, true).then(function(res) {
                res.forEach(function(row) {
                  var msg, ref;
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
        var cursor;
        if ($scope.sent.loading || !$scope.identity || !$scope.identity.data.sent) {
          return;
        }
        $scope.sent.loading = true;
        if ($scope.sent.length === 0) {
          $scope.identity.sentPositive = 0;
          $scope.identity.sentNeutral = 0;
          $scope.identity.sentNegative = 0;
        }
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        return $scope.identifiIndex.getSentMsgs($scope.identity, $scope.filters.limit, cursor).then(function(sent) {
          $scope.processMessages(sent, {
            authorIsSelf: true
          });
          $scope.$apply(function() {
            Array.prototype.push.apply($scope.sent, sent);
            $scope.sent.loading = false;
            if (sent.length < $scope.filters.limit - 1) {
              return $scope.sent.finished = true;
            }
          });
          return sent.forEach(function(msg) {
            var neutralRating;
            if (msg.data.type === 'rating') {
              neutralRating = (msg.data.maxRating + msg.data.minRating) / 2;
              if (msg.data.rating > neutralRating) {
                return $scope.identity.sentPositive++;
              } else if (msg.data.rating < neutralRating) {
                return $scope.identity.sentNegative++;
              } else {
                console.log(msg);
                return $scope.identity.sentNeutral++;
              }
            }
          });
        })["catch"](function(error) {
          console.log('error loading sent messages', error);
          return $scope.sent.finished = true;
        });
      };
      $scope.getReceivedMsgs = function() {
        var cursor;
        if ($scope.received.loading || !$scope.identity || !$scope.identity.data.received) {
          return;
        }
        $scope.received.loading = true;
        cursor = $scope.received.length ? $scope.received[$scope.received.length - 1].cursor : '';
        return $scope.identifiIndex.getReceivedMsgs($scope.identity, $scope.filters.limit, cursor).then(function(received) {
          $scope.processMessages(received, {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.received, received);
            $scope.received.loading = false;
            if (received.length < $scope.filters.limit - 1) {
              $scope.received.finished = true;
            }
            return received.forEach(function(msg) {
              var neutralRating;
              neutralRating = (msg.data.maxRating + msg.data.minRating) / 2;
              if (Object.keys(thumbsUpObj).length < 12 && msg.data.rating > neutralRating) {
                thumbsUpObj[msg.linkToAuthor] = msg;
                $scope.thumbsUp = Object.values(thumbsUpObj);
                return $scope.hasThumbsUp = true;
              } else if (Object.keys(thumbsDownObj).length < 12 && msg.data.rating < neutralRating) {
                thumbsDownObj[msg.linkToAuthor] = msg;
                $scope.thumbsDown = Object.values(thumbsDownObj);
                return $scope.hasThumbsDown = true;
              }
            });
          });
        })["catch"](function(error) {
          console.log('error loading received messages', error);
          return $scope.received.finished = true;
        });
      };
      addLocalMessages = function() {
        var connectionsToAdd, hash, msg, msgs, results;
        msgs = localStorageService.get('localMessages') || {};
        connectionsToAdd = {};
        results = [];
        for (hash in msgs) {
          msg = msgs[hash];
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
        $scope.idUrl = 'https://identi.fi/#/identities/' + $scope.idType + '/' + $scope.idValue;
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
            return $scope.identifiIndex.get($scope.idValue, $scope.idType).then(function(profile) {
              if (profile) {
                $scope.identity = profile;
                $scope.setIdentityNames($scope.identity);
                $scope.setPageTitle($scope.identity.primaryName);
                $scope.getSentMsgs(0);
                $scope.getReceivedMsgs(0);
              } else {
                $scope.$apply(function() {
                  return $scope.identity = new $window.identifiLib.Identity({
                    attrs: [
                      {
                        name: $scope.idType,
                        val: $scope.idValue
                      }
                    ]
                  });
                });
              }
              return $scope.$apply(function() {
                addLocalMessages();
                return $scope.getConnections();
              });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVVuRSxXQVZtRSxFQVluRSxRQVptRSxFQWFuRSxxQkFibUUsRUFjbkUsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQyxZQUF0QyxFQUFvRCxTQUFwRCxFQUErRCxLQUEvRCxFQUFzRSxFQUF0RSxFQUEwRSxRQUExRSxFQUFvRixTQUFwRixFQUErRixNQUEvRixFQUF1RyxtQkFBdkc7QUFDRSxVQUFBO01BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQyxLQUFEO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCO01BQ3JCLFdBQUEsR0FBYztNQUNkLGFBQUEsR0FBZ0I7TUFDaEIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsSUFBMkMsWUFBWSxDQUFDLE1BQXhEO1FBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLFlBQVksQ0FBQyxPQUFqQzs7TUFDQSxNQUFNLENBQUMsWUFB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Z3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdJZGVudGl0aWVzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRzdGF0ZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckcSdcbiAgJyR0aW1lb3V0J1xuICAnY2xpcGJvYXJkJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsIGNsaXBib2FyZCwgY29uZmlnLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hY3RpdmVUYWIgPSAwXG4gICAgJHNjb3BlLmFjdGl2YXRlVGFiID0gKHRhYklkKSAtPiAkc2NvcGUuYWN0aXZlVGFiID0gdGFiSWRcbiAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgJHNjb3BlLnJlY2VpdmVkID0gW11cbiAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSB7fVxuICAgIHRodW1ic1VwT2JqID0ge31cbiAgICB0aHVtYnNEb3duT2JqID0ge31cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAkc3RhdGVQYXJhbXMuc2VhcmNoIGlmICRzdGF0ZVBhcmFtcy5zZWFyY2hcbiAgICAkc2NvcGUubmV3QXR0cmlidXRlID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgdmFsdWU6IDBcbiAgICAgIG9wdGlvbnM6XG4gICAgICAgIGZsb29yOiAtM1xuICAgICAgICBjZWlsOiAzXG4gICAgICAgIGhpZGVQb2ludGVyTGFiZWxzOiB0cnVlXG4gICAgICAgIGhpZGVMaW1pdExhYmVsczogdHJ1ZVxuXG4gICAgbWVzc2FnZXNBZGRlZCA9IGZhbHNlXG4gICAgJHNjb3BlLiRvbiAnTWVzc2FnZUFkZGVkJywgKGV2ZW50LCBhcmdzKSAtPlxuICAgICAgJHNjb3BlLmxvY2FsTWVzc2FnZXNbYXJncy5tZXNzYWdlLmhhc2hdID0gYXJncy5tZXNzYWdlXG4gICAgICAkc2NvcGUubG9jYWxNZXNzYWdlc1thcmdzLm1lc3NhZ2UuaGFzaF0ubG9jYWwgPSB0cnVlXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxNZXNzYWdlcycsICRzY29wZS5sb2NhbE1lc3NhZ2VzKVxuICAgICAgbWVzc2FnZXNBZGRlZCA9IHRydWVcbiAgICAgIHJldHVybiB1bmxlc3MgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICBpZiBhcmdzLm1lc3NhZ2Uuc2lnbmVkRGF0YS50eXBlIGluIFsndmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZ5X2lkZW50aXR5J10gYW5kIG5vdCBhcmdzLmlkLmNvbmZpcm1lZFxuICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMoKVxuICAgICAgZWxzZSBpZiBhcmdzLm1lc3NhZ2Uuc2lnbmVkRGF0YS50eXBlID09ICdyYXRpbmcnXG4gICAgICAgIGlmIG1lc3NhZ2VzQWRkZWRcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuc2hpZnQoKVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFthcmdzLm1lc3NhZ2VdXG4gICAgICAgICRzY29wZS5yZWNlaXZlZC51bnNoaWZ0IGFyZ3MubWVzc2FnZVxuXG4gICAgJHNjb3BlLmNvcHlJZExpbmsgPSAtPlxuICAgICAgY2xpcGJvYXJkLmNvcHlUZXh0ICRzY29wZS5pZFVybFxuXG4gICAgJHNjb3BlLmFkZEVudHJ5ID0gKGV2ZW50LCBlbnRyeSkgLT5cbiAgICAgIHJlY2lwaWVudCA9IFtdXG4gICAgICBpZiBlbnRyeS5uYW1lXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnbmFtZScsIGVudHJ5Lm5hbWVdXG4gICAgICBpZiBlbnRyeS5lbWFpbFxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ2VtYWlsJywgZW50cnkuZW1haWxdXG4gICAgICBpZiBlbnRyeS51cmxcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyd1cmwnLCBlbnRyeS51cmxdXG4gICAgICBpZiBlbnRyeS5waG9uZVxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ3Bob25lJywgZW50cnkucGhvbmVdXG4gICAgICBwYXJhbXMgPVxuICAgICAgICB0eXBlOiAndmVyaWZ5X2lkZW50aXR5J1xuICAgICAgICByZWNpcGllbnQ6IHJlY2lwaWVudFxuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UoZXZlbnQsIHBhcmFtcykudGhlbiAocmVzcG9uc2UpIC0+XG4gICAgICAgICRzdGF0ZS5nbyAnbWVzc2FnZXMuc2hvdycsIHsgaWQ6IHJlc3BvbnNlLmlwZnNfaGFzaCB9XG4gICAgICAsIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgXCJlcnJvclwiLCBlcnJvclxuXG4gICAgJHNjb3BlLmdldENvbm5lY3Rpb25zID0gLT5cbiAgICAgICRzY29wZS5jb25uZWN0aW9ucyA9IHt9XG4gICAgICBjb25uZWN0aW9ucyA9ICRzY29wZS5pZGVudGl0eS5kYXRhLmF0dHJzIG9yIFtdXG4gICAgICBpZiBjb25uZWN0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgIGMgPSBjb25uZWN0aW9uc1swXVxuICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IGMuY29uZlxuICAgICAgZWxzZVxuICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IDFcbiAgICAgIGZvciBpZCBpbiBjb25uZWN0aW9uc1xuICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNbJHNjb3BlLmdldElkS2V5KGlkKV0gPSBPYmplY3QuYXNzaWduKHt9LCBpZClcbiAgICAgIGZvciBoYXNoLCBtc2cgb2YgJHNjb3BlLmxvY2FsTWVzc2FnZXNcbiAgICAgICAgbXNnLmRhdGEgPSBtc2cuZGF0YSBvciBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBpZiBtc2cuZGF0YS50eXBlIGluIFsndmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZ5X2lkZW50aXR5J11cbiAgICAgICAgICBoYXMgPSBmYWxzZVxuICAgICAgICAgIGZvciByIGluIG1zZy5kYXRhLnJlY2lwaWVudFxuICAgICAgICAgICAgaWYgclswXSA9PSAkc2NvcGUuaWRUeXBlIGFuZCByWzFdwqA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICAgICBoYXMgPSB0cnVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY29udGludWUgdW5sZXNzIGhhc1xuICAgICAgICAgIGZvciByIGluIG1zZy5kYXRhLnJlY2lwaWVudFxuICAgICAgICAgICAgdW5sZXNzIHJbMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgclsxXcKgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAgICAgaWRLZXkgPSAkc2NvcGUuZ2V0SWRLZXkocilcbiAgICAgICAgICAgICAgaWYgJHNjb3BlLmNvbm5lY3Rpb25zLmhhc093blByb3BlcnR5KGlkS2V5KVxuICAgICAgICAgICAgICAgICRzY29wZS5jb25uZWN0aW9uc1tpZEtleV0uY29uZiArPSAxIGlmIG1zZy5kYXRhLnR5cGUgPT0gJ3ZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNbaWRLZXldLnJlZiArPSAxIGlmIG1zZy5kYXRhLnR5cGUgPT0gJ3VudmVyaWZ5X2lkZW50aXR5J1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zW2lkS2V5XSA9XG4gICAgICAgICAgICAgICAgICBuYW1lOiBtc2cuZGF0YS5yZWNpcGllbnRbMV1bMF1cbiAgICAgICAgICAgICAgICAgIHZhbDogbXNnLmRhdGEucmVjaXBpZW50WzFdWzFdXG4gICAgICAgICAgICAgICAgICBjb25mOiBpZiBtc2cuZGF0YS50eXBlID09ICd2ZXJpZnlfaWRlbnRpdHknIHRoZW4gMSBlbHNlIDBcbiAgICAgICAgICAgICAgICAgIHJlZjogaWYgbXNnLmRhdGEudHlwZSA9PSAndW52ZXJpZnlfaWRlbnRpdHknIHRoZW4gMSBlbHNlIDBcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgIGZvciBrZXksIGNvbm4gb2YgJHNjb3BlLmNvbm5lY3Rpb25zXG4gICAgICAgIGNvbm4uaXNDdXJyZW50ID0gY29ubi5uYW1lID09ICRzY29wZS5pZFR5cGUgYW5kIGNvbm4udmFsID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgIHN3aXRjaCBjb25uLm5hbWVcbiAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ21haWx0bzonICsgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgIHdoZW4gJ2JpdGNvaW5fYWRkcmVzcycsICdiaXRjb2luJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXByaW1hcnknXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9ibG9ja2NoYWluLmluZm8vYWRkcmVzcy8nICsgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgIHdoZW4gJ2dwZ19maW5nZXJwcmludCcsICdncGdfa2V5aWQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vcGdwLm1pdC5lZHUvcGtzL2xvb2t1cD9vcD1nZXQmc2VhcmNoPTB4JyArIGNvbm4udmFsXG4gICAgICAgICAgd2hlbiAnYWNjb3VudCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgIHdoZW4gJ25pY2tuYW1lJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZSdcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAndGVsOicgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgd2hlbiAna2V5SUQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgd2hlbiAnY292ZXJQaG90bydcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICRzY29wZS5jb3ZlclBob3RvID0gJHNjb3BlLmNvdmVyUGhvdG8gb3IgeyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArICgkc2NvcGUuaXBmc1Jvb3Qgb3IgJycpICsgY29ubi52YWwgKyAnKScgfVxuICAgICAgICAgIHdoZW4gJ3Byb2ZpbGVQaG90bydcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICRzY29wZS5wcm9maWxlUGhvdG8gPSAkc2NvcGUucHJvZmlsZVBob3RvIG9yICgkc2NvcGUuaXBmc1Jvb3Qgb3IgJycpICsgY29ubi52YWxcbiAgICAgICAgICB3aGVuICd1cmwnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgaWYgY29ubi52YWwuaW5kZXhPZignZmFjZWJvb2suY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZmFjZWJvb2snXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2ZhY2Vib29rLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS10d2l0dGVyJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdwbHVzLmdvb2dsZS5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdsaW5rZWRpbi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1saW5rZWRpbidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnbGlua2VkaW4uY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ2l0aHViJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICBpZiBjb25uLnZhbCBhbmQgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICBjb25uLmxpbmsgPSAoJHNjb3BlLmlwZnNSb290IG9yICcnKSArIGNvbm4udmFsXG4gICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsXG4gICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgIGlmIGNvbm4uY29uZiArIGNvbm4ucmVmID4gMFxuICAgICAgICAgIHBlcmNlbnRhZ2UgPSBjb25uLmNvbmYgKiAxMDAgLyAoY29ubi5jb25mICsgY29ubi5yZWYpXG4gICAgICAgICAgaWYgcGVyY2VudGFnZSA+PSA4MFxuICAgICAgICAgICAgYWxwaGEgPSBjb25uLmNvbmYgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgIyBjb25uLnJvd1N0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknXG4gICAgICAgICAgZWxzZSBpZiBwZXJjZW50YWdlID49IDYwXG4gICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29ubi5yb3dDbGFzcyA9ICdkYW5nZXInXG4gICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgY29ubi5xdWlja0NvbnRhY3RcbiAgICAgICRzY29wZS5jb25uZWN0aW9uc0xlbmd0aCA9IE9iamVjdC5rZXlzKCRzY29wZS5jb25uZWN0aW9ucykubGVuZ3RoXG5cblxuICAgICRzY29wZS5nZXRDb25uZWN0aW5nTXNncyA9IChpZDEsIGlkMikgLT5cbiAgICAgIGdldFZlcmlmaWNhdGlvbnMgPSAkcSAocmVzb2x2ZSkgLT5cbiAgICAgICAgaWYgISRzY29wZS52ZXJpZmljYXRpb25zLmxlbmd0aFxuICAgICAgICAgIGlmICRzY29wZS5yZWNlaXZlZEluZGV4XG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWRJbmRleC5zZWFyY2hUZXh0KCcnLCAxMDAwMCwgZmFsc2UsIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgICAgcmVzLmZvckVhY2ggKHJvdykgLT5cbiAgICAgICAgICAgICAgICBtc2cgPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuZnJvbUp3cyhyb3cudmFsdWUuandzKVxuICAgICAgICAgICAgICAgIGlmIChtc2cuc2lnbmVkRGF0YS50eXBlIGluIFsndmVyaWZ5X2lkZW50aXR5JywgJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbiddKVxuICAgICAgICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5zaWduZWREYXRhLmF1dGhvclswXVxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMucHVzaCBtc2dcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgIGdldFZlcmlmaWNhdGlvbnMudGhlbiAtPlxuICAgICAgICBtc2dzID0gW11cbiAgICAgICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgIGhhc0lkMSA9IGhhc0lkMiA9IGZhbHNlXG4gICAgICAgICAgZm9yIGlkIGluIG1zZy5zaWduZWREYXRhLnJlY2lwaWVudFxuICAgICAgICAgICAgcmV0dXJuIG1zZ3MucHVzaCBtc2cgaWYgaWRbMF3CoD09IGlkMi5uYW1lIGFuZCBpZFsxXSA9PSBpZDIudmFsXG4gICAgICAgIHJldHVybiBtc2dzXG5cbiAgICAkc2NvcGUuY29ubmVjdGlvbkNsaWNrZWQgPSAoZXZlbnQsIGlkKSAtPlxuICAgICAgaWYgaWQuY29ubmVjdGluZ19tc2dzXG4gICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5nZXRDb25uZWN0aW5nTXNncyhbJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWVdLCBpZCkudGhlbiAobXNncykgLT5cbiAgICAgICAgICBpZC5jb25uZWN0aW5nX21zZ3MgPSBtc2dzXG4gICAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcblxuICAgICRzY29wZS5nZXRTZW50TXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnNlbnQubG9hZGluZyBvciBub3QgJHNjb3BlLmlkZW50aXR5IG9yIG5vdCAkc2NvcGUuaWRlbnRpdHkuZGF0YS5zZW50XG4gICAgICAkc2NvcGUuc2VudC5sb2FkaW5nID0gdHJ1ZVxuICAgICAgaWYgJHNjb3BlLnNlbnQubGVuZ3RoID09IDBcbiAgICAgICAgJHNjb3BlLmlkZW50aXR5LnNlbnRQb3NpdGl2ZSA9IDBcbiAgICAgICAgJHNjb3BlLmlkZW50aXR5LnNlbnROZXV0cmFsID0gMFxuICAgICAgICAkc2NvcGUuaWRlbnRpdHkuc2VudE5lZ2F0aXZlID0gMFxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnNlbnQubGVuZ3RoIHRoZW4gJHNjb3BlLnNlbnRbJHNjb3BlLnNlbnQubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldFNlbnRNc2dzKCRzY29wZS5pZGVudGl0eSwgJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChzZW50KSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIHNlbnQsIHsgYXV0aG9ySXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5zZW50LCBzZW50KVxuICAgICAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIGlmIHNlbnQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUuc2VudC5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgc2VudC5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgaWYgbXNnLmRhdGEudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChtc2cuZGF0YS5tYXhSYXRpbmcgKyBtc2cuZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgICAgaWYgbXNnLmRhdGEucmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuc2VudFBvc2l0aXZlKytcbiAgICAgICAgICAgIGVsc2UgaWYgbXNnLmRhdGEucmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuc2VudE5lZ2F0aXZlKytcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgbXNnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5zZW50TmV1dHJhbCsrXG4gICAgICAuY2F0Y2ggKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgbG9hZGluZyBzZW50IG1lc3NhZ2VzJywgZXJyb3JcbiAgICAgICAgJHNjb3BlLnNlbnQuZmluaXNoZWQgPSB0cnVlXG5cbiAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyBvciBub3QgJHNjb3BlLmlkZW50aXR5IG9yIG5vdCAkc2NvcGUuaWRlbnRpdHkuZGF0YS5yZWNlaXZlZFxuICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUucmVjZWl2ZWQubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0UmVjZWl2ZWRNc2dzKCRzY29wZS5pZGVudGl0eSwgJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChyZWNlaXZlZCkgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyByZWNlaXZlZCwgeyByZWNpcGllbnRJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnJlY2VpdmVkLCByZWNlaXZlZClcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgcmVjZWl2ZWQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgICAgcmVjZWl2ZWQuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChtc2cuZGF0YS5tYXhSYXRpbmcgKyBtc2cuZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgICAgaWYgT2JqZWN0LmtleXModGh1bWJzVXBPYmopLmxlbmd0aCA8IDEyIGFuZCBtc2cuZGF0YS5yYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIHRodW1ic1VwT2JqW21zZy5saW5rVG9BdXRob3JdID0gbXNnXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNVcCA9IE9iamVjdC52YWx1ZXModGh1bWJzVXBPYmopXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgT2JqZWN0LmtleXModGh1bWJzRG93bk9iaikubGVuZ3RoIDwgMTIgYW5kIG1zZy5kYXRhLnJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgdGh1bWJzRG93bk9ialttc2cubGlua1RvQXV0aG9yXSA9IG1zZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93biA9IE9iamVjdC52YWx1ZXModGh1bWJzRG93bk9iailcbiAgICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic0Rvd24gPSB0cnVlXG4gICAgICAuY2F0Y2ggKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgbG9hZGluZyByZWNlaXZlZCBtZXNzYWdlcycsIGVycm9yXG4gICAgICAgICRzY29wZS5yZWNlaXZlZC5maW5pc2hlZCA9IHRydWVcblxuICAgIGFkZExvY2FsTWVzc2FnZXMgPSAtPlxuICAgICAgbXNncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgIGNvbm5lY3Rpb25zVG9BZGQgPSB7fVxuICAgICAgZm9yIGhhc2gsIG1zZyBvZiBtc2dzXG4gICAgICAgIG1zZy5kYXRhID0gbXNnLmRhdGEgb3IgbXNnLnNpZ25lZERhdGFcbiAgICAgICAgaWYgbXNnLmRhdGEucmVjaXBpZW50WzBdWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIG1zZy5kYXRhLnJlY2lwaWVudFswXVsxXSA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC51bnNoaWZ0KG1zZylcbiAgICAgICAgaWYgbXNnLmRhdGEuYXV0aG9yWzBdWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIG1zZy5kYXRhLmF1dGhvclswXVsxXSA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICRzY29wZS5zZW50LnVuc2hpZnQobXNnKVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICAgYWRkTG9jYWxNZXNzYWdlcygpXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgJHNjb3BlLmZpbmRPbmUgPSAtPlxuICAgICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgJHNjb3BlLmlkVXJsID0gJ2h0dHBzOi8vaWRlbnRpLmZpLyMvaWRlbnRpdGllcy8nICsgJHNjb3BlLmlkVHlwZSArICcvJyArICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNDdXJyZW50VXNlciA9ICRzY29wZS5hdXRoZW50aWNhdGlvbiBhbmRcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgYW5kXG4gICAgICAgICRzY29wZS5pZFR5cGUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlIGFuZFxuICAgICAgICAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoJHNjb3BlLmlkVHlwZSkgPiAtMVxuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5pZFZhbHVlLCAkc2NvcGUuaWRUeXBlKS50aGVuIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgaWYgcHJvZmlsZVxuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkgPSBwcm9maWxlXG4gICAgICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5pZGVudGl0eSlcbiAgICAgICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSgkc2NvcGUuaWRlbnRpdHkucHJpbWFyeU5hbWUpXG4gICAgICAgICAgICAgICRzY29wZS5nZXRTZW50TXNncygwKVxuICAgICAgICAgICAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzKDApXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkgPSBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eSh7YXR0cnM6W3tuYW1lOiRzY29wZS5pZFR5cGUsIHZhbDokc2NvcGUuaWRWYWx1ZX1dfSlcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgYWRkTG9jYWxNZXNzYWdlcygpXG4gICAgICAgICAgICAgICRzY29wZS5nZXRDb25uZWN0aW9ucygpXG4gICAgICAgICAgLmNhdGNoIChlcnIpIC0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgZmV0Y2hpbmcgcHJvZmlsZScsIGVyclxuICAgICAgaWYgJHNjb3BlLmlkVHlwZSA9PSAna2V5SUQnIGFuZCAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUubm9kZUluZm8ua2V5SURcbiAgICAgICAgJHNjb3BlLmRpc3RhbmNlID0gMFxuXG4gICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAkc2NvcGUuZmluZE9uZSgpXG5dXG4iXX0=

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
  angular.module('identifiAngular').constant('config', {
    defaultFilters: {
      type: null,
      limit: 50,
      max_distance: 0
    },
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account', 'bitcoin', 'gpg_keyid', 'gpg_fingerprint']
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFFSTtJQUFBLGNBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxZQUFBLEVBQWMsQ0FGZDtLQURGO0lBSUEsb0JBQUEsRUFBc0IsQ0FDcEIsT0FEb0IsRUFFcEIsS0FGb0IsRUFHcEIsT0FIb0IsRUFJcEIsS0FKb0IsRUFLcEIsT0FMb0IsRUFNcEIsU0FOb0IsRUFPcEIsU0FQb0IsRUFRcEIsV0FSb0IsRUFTcEIsaUJBVG9CLENBSnRCO0dBRko7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKVxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogNTBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuICAgIHVuaXF1ZUF0dHJpYnV0ZVR5cGVzOiBbXG4gICAgICAnZW1haWwnLFxuICAgICAgJ3VybCcsXG4gICAgICAna2V5SUQnLFxuICAgICAgJ3RlbCcsXG4gICAgICAncGhvbmUnLFxuICAgICAgJ2FjY291bnQnLFxuICAgICAgJ2JpdGNvaW4nLFxuICAgICAgJ2dwZ19rZXlpZCcsXG4gICAgICAnZ3BnX2ZpbmdlcnByaW50J1xuICAgIF1cbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    return $logProvider.debugEnabled(true);
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsWUFBRDtJQUNOO1dBRUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7RUFITSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29uZmlnICgkbG9nUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICMgRW5hYmxlIGxvZ1xuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQgdHJ1ZVxuICAgICMgU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4iXX0=

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div ng-init="newEntry = {}" class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide="authentication.user || !nodeInfo.loginOptions.length"><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label> <input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user || !nodeInfo.loginOptions.length) || !(newEntry.email || newEntry.url || newEntry.phone) || (addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid)">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add entry</a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ng-hide=!result.linkTo ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg></identicon></td><td><span ng-if="result.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.trustDistance > 0" ng-bind="result.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })"></a> <small ng-if=!(result.mostVerifiedAttributes.name||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs[0].name|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+identity.sentPositive+identity.sentNeutral+identity.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon identity=identity border=4 show-distance=0 width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(identity.mostVerifiedAttributes.name||identity.mostVerifiedAttributes.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=identity.primaryName></span> <span ng-hide="!identity.nickname || identity.nickname == identity.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><span ng-if="identity.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.trustDistance > 0 && identity.trustDistance < 1000" ng-bind="identity.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="identity.receivedPositive || identity.receivedNegative"><span ng-bind="identity.receivedPositive / (identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.receivedPositive || identity.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.sentPositive || identity.sentNegative"><span ng-bind="identity.sentPositive / (identity.sentPositive+identity.sentNeutral+identity.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.sentPositive || identity.sentNegative)">&mdash;</span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit m"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.receivedNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=identity ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that this account belongs to your already trusted identity.</p><p><button ng-click=copyIdLink() class="btn btn-primary mar-top10">Copy link to this page</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{idUrl}} size=240></qrcode></div></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.sentPositive+identity.sentNeutral+identity.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.sentNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connectionsLength > 0" ng-bind="connectionsLength - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled=!authentication.user><span class=ladda-label><span class="glyphicon glyphicon-plus"></span> Add</span><span class=ladda-spinner></span></button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=https://github.com/identifi/identifi>Source code</a></li><li><a href=https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f>Learning to Trust Strangers</a> - a blog post outlining the concept</li><li><a href=https://cdn.rawgit.com/identifi/identifi-lib/11e28f1d/example/browser.html>Technical description of Identifi with live code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="(match.label.profile.name || match.label.profile.nickname) | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeySerialized></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeySerialized ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=nodeInfo.profile><a ui-sref="identities.show({ type: \'keyID\', value: nodeInfo.keyID })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon identity=nodeInfo.profile border=3 width=35></identicon></span><span ng-bind=nodeInfo.profile.mostVerifiedAttributes.name.attribute.val></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message ng-repeat="msg in msgs.list | filter:msgFilter" msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signerKeyHash ui-sref="identities.show({type: \'keyID\', value: message.signerKeyHash })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyHash })" class=id-link><identicon identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.mostVerifiedAttributes.name.attribute.val></span> <small>{{message.signerKeyHash}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon identity="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo) || $ctrl.msgData.author" class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);