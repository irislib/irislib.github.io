(function() {
  angular.module('irisAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzSlider', 'angular-clipboard', 'monospaced.qrcode', 'ngFileUpload', 'qrScanner', 'hm.readmore', 'ui-notification', 'angular-notification-icons']);

  angular.module('irisAngular').filter('escape', [
    function() {
      return function(input) {
        return encodeURIComponent(encodeURIComponent(input));
      };
    }
  ]);

  angular.module('irisAngular').filter('encodeURIComponent', [
    function() {
      return function(input) {
        return encodeURIComponent(input);
      };
    }
  ]);

  angular.module('irisAngular').filter('highlight', function($sce) {
    return function(text, phrase) {
      if (typeof text === 'string' && phrase) {
        text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<b>$1</b>');
        return $sce.trustAsHtml(text.toString());
      }
      return text;
    };
  });

  angular.module('irisAngular').filter('ordinal', function() {
    return function(input) {
      var s, v;
      s = ['th', 'st', 'nd', 'rd'];
      v = input % 100;
      return input + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLEVBQ0UsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixTQUEzQixFQUFzQyxZQUF0QyxFQUFvRCxZQUFwRCxFQUNBLFFBREEsRUFDVSxZQURWLEVBQ3dCLFdBRHhCLEVBQ3FDLGNBRHJDLEVBQ3FELGtCQURyRCxFQUVBLGlCQUZBLEVBRW1CLG9CQUZuQixFQUV5QyxVQUZ6QyxFQUVxRCxtQkFGckQsRUFHQSxtQkFIQSxFQUdxQixjQUhyQixFQUdxQyxXQUhyQyxFQUdrRCxhQUhsRCxFQUlBLGlCQUpBLEVBSW1CLDRCQUpuQixDQURGOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLE1BQTlCLENBQXFDLFFBQXJDLEVBQStDO0lBQUUsUUFBQSxDQUFBLENBQUE7YUFDL0MsUUFBQSxDQUFDLEtBQUQsQ0FBQTtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEK0MsQ0FBRjtHQUEvQzs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGFBQWYsQ0FBNkIsQ0FBQyxNQUE5QixDQUFxQyxvQkFBckMsRUFBMkQ7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUMzRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsS0FBbkI7TUFERjtJQUQyRCxDQUFGO0dBQTNEOztFQUtBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLE1BQTlCLENBQXFDLFdBQXJDLEVBQWtELFFBQUEsQ0FBQyxJQUFELENBQUE7V0FDaEQsUUFBQSxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUE7TUFDRSxJQUFHLE9BQU8sSUFBUCxLQUFlLFFBQWYsSUFBNEIsTUFBL0I7UUFDRSxJQUFBLEdBQU8sSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFJLE1BQUosQ0FBVyxHQUFBLEdBQU0sTUFBTixHQUFlLEdBQTFCLEVBQStCLElBQS9CLENBQWIsRUFBbUQsV0FBbkQ7QUFDUCxlQUFPLElBQUksQ0FBQyxXQUFMLENBQWlCLElBQUksQ0FBQyxRQUFMLENBQUEsQ0FBakIsRUFGVDs7QUFHQSxhQUFPO0lBSlQ7RUFEZ0QsQ0FBbEQ7O0VBT0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsTUFBOUIsQ0FBcUMsU0FBckMsRUFBZ0QsUUFBQSxDQUFBLENBQUE7V0FDOUMsUUFBQSxDQUFDLEtBQUQsQ0FBQTtBQUNFLFVBQUEsQ0FBQSxFQUFBO01BQUEsQ0FBQSxHQUFJLENBQ0YsSUFERSxFQUVGLElBRkUsRUFHRixJQUhFLEVBSUYsSUFKRTtNQU1KLENBQUEsR0FBSSxLQUFBLEdBQVE7YUFDWixLQUFBLEdBQVEsQ0FBQyxDQUFFLENBQUEsQ0FBQyxDQUFBLEdBQUksRUFBTCxDQUFBLEdBQVcsRUFBWCxDQUFGLElBQW9CLENBQUUsQ0FBQSxDQUFBLENBQXRCLElBQTRCLENBQUUsQ0FBQSxDQUFBLENBQS9CO0lBUlY7RUFEOEMsQ0FBaEQ7QUF2QkEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpTbGlkZXInLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJywgJ3FyU2Nhbm5lcicsICdobS5yZWFkbW9yZScsXG4gICd1aS1ub3RpZmljYXRpb24nLCAnYW5ndWxhci1ub3RpZmljYXRpb24taWNvbnMnXVxuXG5hbmd1bGFyLm1vZHVsZSgnaXJpc0FuZ3VsYXInKS5maWx0ZXIgJ2VzY2FwZScsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpXG4gXVxuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuZmlsdGVyICdlbmNvZGVVUklDb21wb25lbnQnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgaW5wdXRcbiBdXG5cbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmZpbHRlciAnaGlnaGxpZ2h0JywgKCRzY2UpIC0+XG4gICh0ZXh0LCBwaHJhc2UpIC0+XG4gICAgaWYgdHlwZW9mIHRleHQgPT0gJ3N0cmluZycgYW5kIHBocmFzZVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHBocmFzZSArICcpJywgJ2dpJyksICc8Yj4kMTwvYj4nKVxuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwgdGV4dC50b1N0cmluZygpXG4gICAgcmV0dXJuIHRleHRcblxuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuZmlsdGVyICdvcmRpbmFsJywgLT5cbiAgKGlucHV0KSAtPlxuICAgIHMgPSBbXG4gICAgICAndGgnXG4gICAgICAnc3QnXG4gICAgICAnbmQnXG4gICAgICAncmQnXG4gICAgXVxuICAgIHYgPSBpbnB1dCAlIDEwMFxuICAgIGlucHV0ICsgKHNbKHYgLSAyMCkgJSAxMF0gb3Igc1t2XSBvciBzWzBdKVxuIl19

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('videochat', function() {
    return {
      scope: {
        pubkey: '=',
        gun: '=',
        watchOnly: '='
      },
      link: function(scope, element, attrs) {
        var CAMERA_OPTIONS, MIMETYPE_AUDIO_ONLY, MIMETYPE_VIDEO_AUDIO, MIMETYPE_VIDEO_ONLY, MIME_TYPE_USE, REMOTE_STREAM_ID, buttonRow, go, gunDB, gunRecorder, gunStreamer, gunViewer, myPubKey, myVideo, onRecordStateChange, opt, peers, recordButton, recorder_config, remoteVideo, startCameraButton, startScreenCaptureButton, streamer_config, u, viewer_config;
        MIMETYPE_VIDEO_AUDIO = 'video/webm; codecs="opus,vp8"';
        MIMETYPE_VIDEO_ONLY = 'video/webm; codecs="vp8"';
        MIMETYPE_AUDIO_ONLY = 'video/webm; codecs="opus"';
        MIME_TYPE_USE = MIMETYPE_VIDEO_AUDIO;
        REMOTE_STREAM_ID = scope.pubkey + '/stream';
        remoteVideo = document.createElement("video");
        remoteVideo.autoplay = true;
        remoteVideo.controls = true;
        remoteVideo.playsinline = true;
        remoteVideo.style.display = "none";
        remoteVideo.style.width = "50%";
        remoteVideo.preload = "none";
        remoteVideo.id = REMOTE_STREAM_ID;
        element.append(remoteVideo);
        myVideo = document.createElement('video');
        myVideo.setAttribute('autoplay', true);
        myVideo.setAttribute('style', 'width: 100%;');
        myVideo.setAttribute('playsinline', true);
        myVideo.setAttribute('controls', true);
        myVideo.id = 'record_video';
        element.append(myVideo);
        buttonRow = document.createElement('div');
        element.append(buttonRow);
        startCameraButton = document.createElement('button');
        startCameraButton.innerText = 'start camera';
        startCameraButton.setAttribute('class', 'btn btn-default');
        startCameraButton.addEventListener('click', function() {
          return gunRecorder.startCamera();
        });
        buttonRow.append(startCameraButton);
        startScreenCaptureButton = document.createElement('button');
        startScreenCaptureButton.innerText = 'start screen capture';
        startScreenCaptureButton.setAttribute('class', 'btn btn-default');
        startScreenCaptureButton.addEventListener('click', function() {
          return gunRecorder.startScreenCapture();
        });
        buttonRow.append(startScreenCaptureButton);
        recordButton = document.createElement('button');
        //recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live'
        recordButton.innerText = 'go live';
        recordButton.setAttribute('class', 'btn btn-default');
        recordButton.addEventListener('click', function() {
          return gunRecorder.record();
        });
        buttonRow.append(recordButton);
        //Config for camera recorder
        CAMERA_OPTIONS = {
          video: {
            width: 320,
            height: 280,
            facingMode: 'environment',
            frameRate: 24
          },
          audio: true
        };
        //Configure GunViewer
        viewer_config = {
          mimeType: MIME_TYPE_USE,
          streamerId: REMOTE_STREAM_ID,
          catchup: false,
          debug: false
        };
        gunViewer = new GunViewer(viewer_config);
        //Configure GUN to pass to streamer
        peers = ['https://gunmeetingserver.herokuapp.com/gun'];
        opt = {
          peers: peers,
          localStorage: false,
          radisk: false
        };
        gunDB = Gun(opt);
        // Get data from gun and pass along to viewer
        gunDB.get(REMOTE_STREAM_ID).on(function(data) {
          gunViewer.onStreamerData(data);
        });
        u = scope.gun.user();
        myPubKey = u._.sea ? u._.sea.pub : void 0;
        //Config for the GUN GunStreamer
        streamer_config = {
          dbRecord: 'gunmeeting',
          streamId: myPubKey + '/stream',
          gun: gunDB,
          debug: false,
          onStreamerData: gunViewer.onStreamerData,
          url: '/assets/js/parser_worker.js'
        };
        //GUN Streamer is the data side. It will convert data and write to GUN db
        gunStreamer = new GunStreamer(streamer_config);
        //This is a callback function about the recording state, following states possible
        // STOPPED: 1¸
        // RECORDING:2
        // NOT_AVAILABLE:3
        // UNKNOWN:4
        onRecordStateChange = function(state) {
          switch (state) {
            case recordState.RECORDING:
              recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go offline';
              break;
            default:
              recordButton.innerHtml = '<span class="glyphicon glyphicon-facetime-video mar-right5"></span> Go live';
              break;
          }
        };
        recorder_config = {
          mimeType: MIME_TYPE_USE,
          video_id: 'record_video',
          onDataAvailable: gunStreamer.onDataAvailable,
          onRecordStateChange: onRecordStateChange,
          recordInterval: 800,
          cameraOptions: CAMERA_OPTIONS,
          debug: false
        };
        //Init the recorder
        gunRecorder = new GunRecorder(recorder_config);
        element.on('$destroy', function() {
          return gunRecorder.setRecordingState(recordState.STOPPED);
        });
        go = function() {
          var streamId;
          if (!(scope.gun && scope.pubkey)) {
            return;
          }
          u = scope.gun.user();
          myPubKey = u._.sea ? u._.sea.pub : void 0;
          if (myPubKey !== scope.pubkey) {
            if (scope.watchOnly) {
              buttonRow.style.display = 'none';
              remoteVideo.style.width = '100%';
              myVideo.style.display = 'none';
            }
            myVideo.style.width = '50%';
            remoteVideo.style.display = 'inline-block';
          } else {
            // openRemoteVideo()
            myVideo.style.width = '100%';
            remoteVideo.style.display = 'none';
          }
          return streamId = myPubKey + '/stream';
        };
        return scope.$watch('gun', go);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy92aWRlb2NoYXQvdmlkZW9jaGF0LmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsU0FESCxDQUNhLFdBRGIsRUFDMEIsUUFBQSxDQUFBLENBQUE7V0FDdEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsR0FBUjtRQUNBLEdBQUEsRUFBSyxHQURMO1FBRUEsU0FBQSxFQUFXO01BRlgsQ0FERjtNQUlBLElBQUEsRUFBTSxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBQTtBQUNKLFlBQUEsY0FBQSxFQUFBLG1CQUFBLEVBQUEsb0JBQUEsRUFBQSxtQkFBQSxFQUFBLGFBQUEsRUFBQSxnQkFBQSxFQUFBLFNBQUEsRUFBQSxFQUFBLEVBQUEsS0FBQSxFQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsU0FBQSxFQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsbUJBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLFlBQUEsRUFBQSxlQUFBLEVBQUEsV0FBQSxFQUFBLGlCQUFBLEVBQUEsd0JBQUEsRUFBQSxlQUFBLEVBQUEsQ0FBQSxFQUFBO1FBQUEsb0JBQUEsR0FBdUI7UUFDdkIsbUJBQUEsR0FBc0I7UUFDdEIsbUJBQUEsR0FBc0I7UUFDdEIsYUFBQSxHQUFnQjtRQUNoQixnQkFBQSxHQUFtQixLQUFLLENBQUMsTUFBTixHQUFlO1FBRWxDLFdBQUEsR0FBYyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QjtRQUNkLFdBQVcsQ0FBQyxRQUFaLEdBQXVCO1FBQ3ZCLFdBQVcsQ0FBQyxRQUFaLEdBQXVCO1FBQ3ZCLFdBQVcsQ0FBQyxXQUFaLEdBQTBCO1FBQzFCLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBbEIs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QUMsTUFBbEMsQ0FBQTtBQUFBLG1CQUFBOztVQUNBLENBQUEsR0FBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQVYsQ0FBQTtVQUNKLFFBQUEsR0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQVAsR0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBeEIsR0FBaUM7VUFDNUMsSUFBRyxRQUFBLEtBQVksS0FBSyxDQUFDLE1BQXJCO1lBQ0UsSUFBRyxLQUFLLENBQUMsU0FBVDtjQUNFLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBaEIsR0FBMEI7Y0FDMUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFsQixHQUEwQjtjQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQWQsR0FBd0IsT0FIMUI7O1lBSUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFkLEdBQXNCO1lBQ3RCLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBbEIsR0FBNEIsZUFOOUI7V0FBQSxNQUFBOztZQVNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBZCxHQUFzQjtZQUN0QixXQUFXLENBQUMsS0FBSyxDQUFDLE9BQWxCLEdBQTRCLE9BVjlCOztpQkFXQSxRQUFBLEdBQVcsUUFBQSxHQUFXO1FBZm5CO2VBZ0JMLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYixFQUFvQixFQUFwQjtNQW5JSTtJQUpOO0VBRHNCLENBRDFCO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIjIGNvZmZlZWxpbnQ6IGRpc2FibGU9bWF4X2xpbmVfbGVuZ3RoXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ3ZpZGVvY2hhdCcsIC0+XG4gICAgc2NvcGU6XG4gICAgICBwdWJrZXk6ICc9J1xuICAgICAgZ3VuOiAnPSdcbiAgICAgIHdhdGNoT25seTogJz0nXG4gICAgbGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cbiAgICAgIE1JTUVUWVBFX1ZJREVPX0FVRElPID0gJ3ZpZGVvL3dlYm07IGNvZGVjcz1cIm9wdXMsdnA4XCInXG4gICAgICBNSU1FVFlQRV9WSURFT19PTkxZID0gJ3ZpZGVvL3dlYm07IGNvZGVjcz1cInZwOFwiJ1xuICAgICAgTUlNRVRZUEVfQVVESU9fT05MWSA9ICd2aWRlby93ZWJtOyBjb2RlY3M9XCJvcHVzXCInXG4gICAgICBNSU1FX1RZUEVfVVNFID0gTUlNRVRZUEVfVklERU9fQVVESU9cbiAgICAgIFJFTU9URV9TVFJFQU1fSUQgPSBzY29wZS5wdWJrZXkgKyAnL3N0cmVhbSdcblxuICAgICAgcmVtb3RlVmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIilcbiAgICAgIHJlbW90ZVZpZGVvLmF1dG9wbGF5ID0gdHJ1ZVxuICAgICAgcmVtb3RlVmlkZW8uY29udHJvbHMgPSB0cnVlXG4gICAgICByZW1vdGVWaWRlby5wbGF5c2lubGluZSA9IHRydWVcbiAgICAgIHJlbW90ZVZpZGVvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgcmVtb3RlVmlkZW8uc3R5bGUud2lkdGggPSBcIjUwJVwiXG4gICAgICByZW1vdGVWaWRlby5wcmVsb2FkID0gXCJub25lXCJcbiAgICAgIHJlbW90ZVZpZGVvLmlkID0gUkVNT1RFX1NUUkVBTV9JRFxuICAgICAgZWxlbWVudC5hcHBlbmQgcmVtb3RlVmlkZW9cblxuICAgICAgbXlWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJylcbiAgICAgIG15VmlkZW8uc2V0QXR0cmlidXRlKCdhdXRvcGxheScsIHRydWUpXG4gICAgICBteVZpZGVvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6IDEwMCU7JylcbiAgICAgIG15VmlkZW8uc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsIHRydWUpXG4gICAgICBteVZpZGVvLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCB0cnVlKVxuICAgICAgbXlWaWRlby5pZCA9ICdyZWNvcmRfdmlkZW8nXG4gICAgICBlbGVtZW50LmFwcGVuZCBteVZpZGVvXG5cbiAgICAgIGJ1dHRvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBlbGVtZW50LmFwcGVuZCBidXR0b25Sb3dcblxuICAgICAgc3RhcnRDYW1lcmFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgc3RhcnRDYW1lcmFCdXR0b24uaW5uZXJUZXh0ID0gJ3N0YXJ0IGNhbWVyYSdcbiAgICAgIHN0YXJ0Q2FtZXJhQnV0dG9uLnNldEF0dHJpYnV0ZSAnY2xhc3MnLCAnYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgc3RhcnRDYW1lcmFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lciAnY2xpY2snLCAoKSAtPiBndW5SZWNvcmRlci5zdGFydENhbWVyYSgpXG4gICAgICBidXR0b25Sb3cuYXBwZW5kIHN0YXJ0Q2FtZXJhQnV0dG9uXG5cbiAgICAgIHN0YXJ0U2NyZWVuQ2FwdHVyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBzdGFydFNjcmVlbkNhcHR1cmVCdXR0b24uaW5uZXJUZXh0ID0gJ3N0YXJ0IHNjcmVlbiBjYXB0dXJlJ1xuICAgICAgc3RhcnRTY3JlZW5DYXB0dXJlQnV0dG9uLnNldEF0dHJpYnV0ZSAnY2xhc3MnLCAnYnRuIGJ0bi1kZWZhdWx0J1xuICAgICAgc3RhcnRTY3JlZW5DYXB0dXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgJ2NsaWNrJywgKCkgLT4gZ3VuUmVjb3JkZXIuc3RhcnRTY3JlZW5DYXB0dXJlKClcbiAgICAgIGJ1dHRvblJvdy5hcHBlbmQgc3RhcnRTY3JlZW5DYXB0dXJlQnV0dG9uXG5cbiAgICAgIHJlY29yZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAjcmVjb3JkQnV0dG9uLmlubmVySHRtbCA9ICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZmFjZXRpbWUtdmlkZW8gbWFyLXJpZ2h0NVwiPjwvc3Bhbj4gR28gbGl2ZSdcbiAgICAgIHJlY29yZEJ1dHRvbi5pbm5lclRleHQgPSAnZ28gbGl2ZSdcbiAgICAgIHJlY29yZEJ1dHRvbi5zZXRBdHRyaWJ1dGUgJ2NsYXNzJywgJ2J0biBidG4tZGVmYXVsdCdcbiAgICAgIHJlY29yZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyICdjbGljaycsICgpIC0+IGd1blJlY29yZGVyLnJlY29yZCgpXG4gICAgICBidXR0b25Sb3cuYXBwZW5kIHJlY29yZEJ1dHRvblxuXG4gICAgICAjQ29uZmlnIGZvciBjYW1lcmEgcmVjb3JkZXJcbiAgICAgIENBTUVSQV9PUFRJT05TID1cbiAgICAgICAgdmlkZW86XG4gICAgICAgICAgd2lkdGg6IDMyMFxuICAgICAgICAgIGhlaWdodDogMjgwXG4gICAgICAgICAgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50J1xuICAgICAgICAgIGZyYW1lUmF0ZTogMjRcbiAgICAgICAgYXVkaW86IHRydWVcbiAgICAgICNDb25maWd1cmUgR3VuVmlld2VyXG4gICAgICB2aWV3ZXJfY29uZmlnID1cbiAgICAgICAgbWltZVR5cGU6IE1JTUVfVFlQRV9VU0VcbiAgICAgICAgc3RyZWFtZXJJZDogUkVNT1RFX1NUUkVBTV9JRFxuICAgICAgICBjYXRjaHVwOiBmYWxzZVxuICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgIGd1blZpZXdlciA9IG5ldyBHdW5WaWV3ZXIodmlld2VyX2NvbmZpZylcbiAgICAgICNDb25maWd1cmUgR1VOIHRvIHBhc3MgdG8gc3RyZWFtZXJcbiAgICAgIHBlZXJzID0gWyAnaHR0cHM6Ly9ndW5tZWV0aW5nc2VydmVyLmhlcm9rdWFwcC5jb20vZ3VuJyBdXG4gICAgICBvcHQgPVxuICAgICAgICBwZWVyczogcGVlcnNcbiAgICAgICAgbG9jYWxTdG9yYWdlOiBmYWxzZVxuICAgICAgICByYWRpc2s6IGZhbHNlXG4gICAgICBndW5EQiA9IEd1bihvcHQpXG4gICAgICAjIEdldCBkYXRhIGZyb20gZ3VuIGFuZCBwYXNzIGFsb25nIHRvIHZpZXdlclxuICAgICAgZ3VuREIuZ2V0KFJFTU9URV9TVFJFQU1fSUQpLm9uIChkYXRhKSAtPlxuICAgICAgICBndW5WaWV3ZXIub25TdHJlYW1lckRhdGEgZGF0YVxuICAgICAgICByZXR1cm5cblxuICAgICAgdSA9IHNjb3BlLmd1bi51c2VyKClcbiAgICAgIG15UHViS2V5ID0gaWYgdS5fLnNlYSB0aGVuIHUuXy5zZWEucHViIGVsc2UgdW5kZWZpbmVkXG4gICAgICAjQ29uZmlnIGZvciB0aGUgR1VOIEd1blN0cmVhbWVyXG4gICAgICBzdHJlYW1lcl9jb25maWcgPVxuICAgICAgICBkYlJlY29yZDogJ2d1bm1lZXRpbmcnXG4gICAgICAgIHN0cmVhbUlkOiBteVB1YktleSArICcvc3RyZWFtJ1xuICAgICAgICBndW46IGd1bkRCXG4gICAgICAgIGRlYnVnOiBmYWxzZVxuICAgICAgICBvblN0cmVhbWVyRGF0YTogZ3VuVmlld2VyLm9uU3RyZWFtZXJEYXRhXG4gICAgICAgIHVybDogJy9hc3NldHMvanMvcGFyc2VyX3dvcmtlci5qcydcbiAgICAgICNHVU4gU3RyZWFtZXIgaXMgdGhlIGRhdGEgc2lkZS4gSXQgd2lsbCBjb252ZXJ0IGRhdGEgYW5kIHdyaXRlIHRvIEdVTiBkYlxuICAgICAgZ3VuU3RyZWFtZXIgPSBuZXcgR3VuU3RyZWFtZXIoc3RyZWFtZXJfY29uZmlnKVxuXG4gICAgICAjVGhpcyBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIGFib3V0IHRoZSByZWNvcmRpbmcgc3RhdGUsIGZvbGxvd2luZyBzdGF0ZXMgcG9zc2libGVcbiAgICAgICMgU1RPUFBFRDogMcK4XG4gICAgICAjIFJFQ09SRElORzoyXG4gICAgICAjIE5PVF9BVkFJTEFCTEU6M1xuICAgICAgIyBVTktOT1dOOjRcbiAgICAgIG9uUmVjb3JkU3RhdGVDaGFuZ2UgPSAoc3RhdGUpIC0+XG4gICAgICAgIHN3aXRjaCBzdGF0ZVxuICAgICAgICAgIHdoZW4gcmVjb3JkU3RhdGUuUkVDT1JESU5HXG4gICAgICAgICAgICByZWNvcmRCdXR0b24uaW5uZXJIdG1sID0gJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1mYWNldGltZS12aWRlbyBtYXItcmlnaHQ1XCI+PC9zcGFuPiBHbyBvZmZsaW5lJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlY29yZEJ1dHRvbi5pbm5lckh0bWwgPSAnPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvIG1hci1yaWdodDVcIj48L3NwYW4+IEdvIGxpdmUnXG4gICAgICAgICAgICBicmVha1xuICAgICAgICByZXR1cm5cblxuICAgICAgcmVjb3JkZXJfY29uZmlnID1cbiAgICAgICAgbWltZVR5cGU6IE1JTUVfVFlQRV9VU0VcbiAgICAgICAgdmlkZW9faWQ6ICdyZWNvcmRfdmlkZW8nXG4gICAgICAgIG9uRGF0YUF2YWlsYWJsZTogZ3VuU3RyZWFtZXIub25EYXRhQXZhaWxhYmxlXG4gICAgICAgIG9uUmVjb3JkU3RhdGVDaGFuZ2U6IG9uUmVjb3JkU3RhdGVDaGFuZ2VcbiAgICAgICAgcmVjb3JkSW50ZXJ2YWw6IDgwMFxuICAgICAgICBjYW1lcmFPcHRpb25zOiBDQU1FUkFfT1BUSU9OU1xuICAgICAgICBkZWJ1ZzogZmFsc2VcbiAgICAgICNJbml0IHRoZSByZWNvcmRlclxuICAgICAgZ3VuUmVjb3JkZXIgPSBuZXcgR3VuUmVjb3JkZXIocmVjb3JkZXJfY29uZmlnKVxuXG4gICAgICBlbGVtZW50Lm9uICckZGVzdHJveScsIC0+XG4gICAgICAgIGd1blJlY29yZGVyLnNldFJlY29yZGluZ1N0YXRlKHJlY29yZFN0YXRlLlNUT1BQRUQpXG5cbiAgICAgIGdvID0gLT5cbiAgICAgICAgcmV0dXJuIHVubGVzcyBzY29wZS5ndW4gYW5kIHNjb3BlLnB1YmtleVxuICAgICAgICB1ID0gc2NvcGUuZ3VuLnVzZXIoKVxuICAgICAgICBteVB1YktleSA9IGlmIHUuXy5zZWEgdGhlbiB1Ll8uc2VhLnB1YiBlbHNlIHVuZGVmaW5lZFxuICAgICAgICBpZiBteVB1YktleSAhPSBzY29wZS5wdWJrZXlcbiAgICAgICAgICBpZiBzY29wZS53YXRjaE9ubHlcbiAgICAgICAgICAgIGJ1dHRvblJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICByZW1vdGVWaWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICAgICAgbXlWaWRlby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgbXlWaWRlby5zdHlsZS53aWR0aCA9ICc1MCUnXG4gICAgICAgICAgcmVtb3RlVmlkZW8uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgIyBvcGVuUmVtb3RlVmlkZW8oKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgbXlWaWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICAgIHJlbW90ZVZpZGVvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgc3RyZWFtSWQgPSBteVB1YktleSArICcvc3RyZWFtJ1xuICAgICAgc2NvcGUuJHdhdGNoICdndW4nLCBnb1xuIl19

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('videostream', function() {
    return {
      scope: {
        uri: '=',
        ipfs: '='
      },
      link: function(scope, element, attrs) {
        var go;
        go = function() {
          var el, stream, videostream;
          if (!(scope.ipfs && scope.uri)) {
            return;
          }
          el = document.createElement('video');
          el.setAttribute('controls', true);
          el.setAttribute('style', 'max-width: 100%;');
          el.setAttribute('preload', 'metadata');
          el.addEventListener('loadedmetadata', function() {
            el.play(); // make it display poster (preview image). may load unnecessary amount of data?
            return el.pause();
          });
          stream = null;
          videostream = new window.videostream({
            createReadStream: function(opts) {
              var end, start;
              start = opts.start;
              end = opts.end ? start + opts.end + 1 : void 0;
              console.log('asked for data starting at byte', start, 'and ending at byte', end);
              if (stream && stream.destroy) {
                stream.destroy();
              }
              stream = scope.ipfs.catReadableStream(scope.uri, {
                offset: start,
                length: end && end - start
              });
              stream.on('error', console.error);
              return stream;
            }
          }, el);
          return element.append(el);
        };
        return scope.$watchGroup(['uri', 'ipfs'], go);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy92aWRlb3N0cmVhbS92aWRlb3N0cmVhbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlkZW9zdHJlYW0vdmlkZW9zdHJlYW0uZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsYUFEYixFQUM0QixRQUFBLENBQUEsQ0FBQTtXQUN4QjtNQUFBLEtBQUEsRUFDRTtRQUFBLEdBQUEsRUFBSyxHQUFMO1FBQ0EsSUFBQSxFQUFNO01BRE4sQ0FERjtNQUdBLElBQUEsRUFBTSxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsQ0FBQTtBQUNKLFlBQUE7UUFBQSxFQUFBLEdBQUssUUFBQSxDQUFBLENBQUE7QUFDSCxjQUFBLEVBQUEsRUFBQSxNQUFBLEVBQUE7VUFBQSxJQUFBLENBQUEsQ0FBYyxLQUFLLENBQUMsSUFBTixJQUFlLEtBQUssQ0FBQyxHQUFuQyxDQUFBO0FBQUEsbUJBQUE7O1VBQ0EsRUFBQSxHQUFLLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO1VBQ0wsRUFBRSxDQUFDLFlBQUgsQ0FBZ0IsVUFBaEIsRUFBNEIsSUFBNUI7VUFDQSxFQUFFLENBQUMsWUFBSCxDQUFnQixPQUFoQixFQUF5QixrQkFBekI7VUFDQSxFQUFFLENBQUMsWUFBSCxDQUFnQixTQUFoQixFQUEyQixVQUEzQjtVQUNBLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixnQkFBcEIsRUFBc0MsUUFBQSxDQUFBLENBQUE7WUFDcEMsRUFBRSxDQUFDLElBQUgsQ0FBQSxFQUFBO21CQUNBLEVBQUUsQ0FBQyxLQUFILENBQUE7VUFGb0MsQ0FBdEM7VUFHQSxNQUFBLEdBQVM7VUFDVCxXQUFBLEdBQWMsSUFBSSxNQUFNLENBQUMsV0FBWCxDQUNaO1lBQUEsZ0JBQUEsRUFBa0IsUUFBQSxDQUFDLElBQUQsQ0FBQTtBQUNoQixrQkFBQSxHQUFBLEVBQUE7Y0FBQSxLQUFBLEdBQVEsSUFBSSxDQUFDO2NBQ2IsR0FBQSxHQUFTLElBQUksQ0FBQyxHQUFSLEdBQWlCLEtBQUEsR0FBUSxJQUFJLENBQUMsR0FBYixHQUFtQixDQUFwQyxHQUEyQztjQUNqRCxPQUFPLENBQUMsR0FBUixDQUFZLGlDQUFaLEVBQStDLEtBQS9DLEVBQXNELG9CQUF0RCxFQUE0RSxHQUE1RTtjQUNBLElBQW9CLE1BQUEsSUFBVyxNQUFNLENBQUMsT0FBdEM7Z0JBQUEsTUFBTSxDQUFDLE9BQVAsQ0FBQSxFQUFBOztjQUNBLE1BQUEsR0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFYLENBQTZCLEtBQUssQ0FBQyxHQUFuQyxFQUF3QztnQkFBRSxNQUFBLEVBQVEsS0FBVjtnQkFBaUIsTUFBQSxFQUFRLEdBQUEsSUFBTyxHQUFBLEdBQU07Y0FBdEMsQ0FBeEM7Y0FDVCxNQUFNLENBQUMsRUFBUCxDQUFVLE9BQVYsRUFBbUIsT0FBTyxDQUFDLEtBQTNCO0FBQ0EscUJBQU87WUFQUztVQUFsQixDQURZLEVBU1osRUFUWTtpQkFVZCxPQUFPLENBQUMsTUFBUixDQUFlLEVBQWY7UUFwQkc7ZUFxQkwsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUFsQixFQUFtQyxFQUFuQztNQXRCSTtJQUhOO0VBRHdCLENBRDVCO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIjIGNvZmZlZWxpbnQ6IGRpc2FibGU9bWF4X2xpbmVfbGVuZ3RoXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ3ZpZGVvc3RyZWFtJywgLT5cbiAgICBzY29wZTpcbiAgICAgIHVyaTogJz0nXG4gICAgICBpcGZzOiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgZ28gPSAtPlxuICAgICAgICByZXR1cm4gdW5sZXNzIHNjb3BlLmlwZnMgYW5kIHNjb3BlLnVyaVxuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJylcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb250cm9scycsIHRydWUpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWF4LXdpZHRoOiAxMDAlOycpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsICdtZXRhZGF0YScpXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIgJ2xvYWRlZG1ldGFkYXRhJywgKCkgLT5cbiAgICAgICAgICBlbC5wbGF5KCkgIyBtYWtlIGl0IGRpc3BsYXkgcG9zdGVyIChwcmV2aWV3IGltYWdlKS4gbWF5IGxvYWQgdW5uZWNlc3NhcnkgYW1vdW50IG9mIGRhdGE/XG4gICAgICAgICAgZWwucGF1c2UoKVxuICAgICAgICBzdHJlYW0gPSBudWxsXG4gICAgICAgIHZpZGVvc3RyZWFtID0gbmV3IHdpbmRvdy52aWRlb3N0cmVhbVxuICAgICAgICAgIGNyZWF0ZVJlYWRTdHJlYW06IChvcHRzKSAtPlxuICAgICAgICAgICAgc3RhcnQgPSBvcHRzLnN0YXJ0XG4gICAgICAgICAgICBlbmQgPSBpZiBvcHRzLmVuZCB0aGVuIHN0YXJ0ICsgb3B0cy5lbmQgKyAxIGVsc2UgdW5kZWZpbmVkXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXNrZWQgZm9yIGRhdGEgc3RhcnRpbmcgYXQgYnl0ZScsIHN0YXJ0LCAnYW5kIGVuZGluZyBhdCBieXRlJywgZW5kKVxuICAgICAgICAgICAgc3RyZWFtLmRlc3Ryb3koKSBpZiBzdHJlYW0gYW5kIHN0cmVhbS5kZXN0cm95XG4gICAgICAgICAgICBzdHJlYW0gPSBzY29wZS5pcGZzLmNhdFJlYWRhYmxlU3RyZWFtKHNjb3BlLnVyaSwgeyBvZmZzZXQ6IHN0YXJ0LCBsZW5ndGg6IGVuZCAmJiBlbmQgLSBzdGFydCB9KVxuICAgICAgICAgICAgc3RyZWFtLm9uICdlcnJvcicsIGNvbnNvbGUuZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBzdHJlYW1cbiAgICAgICAgLCBlbFxuICAgICAgICBlbGVtZW50LmFwcGVuZChlbClcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsndXJpJywgJ2lwZnMnXSwgZ29cbiJdfQ==

(function() {
  angular.module('irisAngular').directive('message', function() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'app/components/message/message.template.html',
      link: function(scope, element, attrs) {
        var a, addAttachment, alpha, attachment, emojis, i, index, j, l, len, len1, len2, maxRatingDiff, minRatingDiff, msg, n, neutralRating, rating, ref, ref1, ref2, ref3, ref4, ref5, ref6, smallestIndex, updateReactions, updateReplies, updateShares;
        msg = scope.msg;
        msg.likes = 0;
        updateReactions = function(reactions) {
          var k, liked, likes, v;
          likes = 0;
          liked = false;
          for (k in reactions) {
            v = reactions[k];
            if (v === 'like') {
              likes++;
              if (k === scope.viewpoint.value && v === 'like') {
                liked = true;
              }
            }
          }
          msg.likes = likes;
          return msg.liked = liked;
        };
        if (msg.signedData.sharedMsg && !options.noRecursion) {
          scope.irisIndex.getMessageByHash(msg.signedData.sharedMsg).then(function(m) {
            return msg.sharedMsg = m;
          });
        }
        if (msg.reactions) {
          updateReactions(msg.reactions);
        }
        msg.repliesArr = msg.repliesArr || [];
        msg.replies = msg.replies || {};
        msg.sharesArr = msg.sharesArr || [];
        msg.shares = msg.shares || {};
        updateReplies = function(replies) {
          var hash, replyRaw, results;
          results = [];
          for (hash in replies) {
            replyRaw = replies[hash];
            results.push(window.irisLib.Message.fromSig(replyRaw).then(function(r) {
              var j, len, o, ref;
              if (!(msg.replies[r.getHash()] && msg.replies[r.getHash()].author)) {
                if (msg.signedData.pollOptions && r.signedData.type === 'vote') {
                  if (!(msg.voteMsgs && msg.voteMsgs.hasOwnProperty(r.getSignerKeyID()))) {
                    msg.voteCount = msg.voteCount ? msg.voteCount + 1 : 1;
                    if (!msg.myVote && r.getSignerKeyID() === scope.authentication.user.idValue) {
                      msg.myVote = r.signedData.vote;
                    }
                    msg.voteMsgs = msg.voteMsgs || {};
                    msg.voteMsgs[r.getSignerKeyID()] = r.getHash();
                    if (!msg.voteResults) {
                      msg.voteResults = {};
                      ref = msg.signedData.pollOptions;
                      for (j = 0, len = ref.length; j < len; j++) {
                        o = ref[j];
                        msg.voteResults[o.text] = 0;
                      }
                    }
                    if (msg.voteResults.hasOwnProperty(r.signedData.vote)) {
                      msg.voteResults[r.signedData.vote] = msg.voteResults[r.signedData.vote] + 1;
                    } else {
                      msg.voteResults[r.signedData.vote] = 1;
                    }
                  }
                }
                msg.replies[r.getHash()] = r;
                msg.repliesArr = Object.values(msg.replies);
                if (r.signedData.type === 'vote') {
                  return console.log(1111, r, msg);
                }
              }
            }));
          }
          return results;
        };
        updateShares = function(shares) {
          var hash, results, shareRaw;
          results = [];
          for (hash in shares) {
            shareRaw = shares[hash];
            results.push(window.irisLib.Message.fromSig(shareRaw).then(function(r) {
              if (!(msg.shares[r.getHash()] && msg.shares[r.getHash()].author)) {
                msg.shares[r.getHash()] = r;
                return msg.sharesArr = Object.values(msg.shares);
              }
            }));
          }
          return results;
        };
        if (msg.gun) {
          msg.gun.get('replies').open(updateReplies);
          msg.gun.get('reactions').on(updateReactions);
          msg.gun.get('shares').open(updateShares);
        }
        if (!msg.author) {
          msg.author = msg.getAuthor(scope.irisIndex);
          msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
        }
        msg.author.gun.get('attrs').open(function(d) {
          var mva;
          mva = window.irisLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return scope.$apply(function() {
              return msg.author_name = mva.name.attribute.value;
            });
          } else if (mva.nickname) {
            return scope.$apply(function() {
              return msg.author_name = mva.nickname.attribute.value;
            });
          }
        });
        if (msg.signedData.recipient) {
          msg.recipient = msg.getRecipient(scope.irisIndex);
          msg.recipient.gun.get('attrs').open(function(d) {
            var mva;
            mva = window.irisLib.Identity.getMostVerifiedAttributes(d);
            if (mva.name) {
              return scope.$apply(function() {
                return msg.recipient_name = mva.name.attribute.value;
              });
            } else if (mva.nickname) {
              return scope.$apply(function() {
                return msg.recipient_name = mva.nickname.attribute.value;
              });
            }
          });
        }
        if (msg.signedData.attachments) {
          msg.attachments = [];
          addAttachment = function(attachment) {
            var type, typeSubstr;
            if (attachment.uri) {
              type = attachment.type || 'image';
              typeSubstr = attachment.type.substr(0, 5);
              if (typeSubstr === 'audio' || typeSubstr === 'video') {
                msg.attachments.push(Object.assign({type, typeSubstr}, attachment));
                return console.log(msg.attachments);
              } else {
                return scope.ipfsGet(attachment.uri, {
                  base64type: type
                }).then(function(src) {
                  return scope.$apply(function() {
                    return msg.attachments.push(Object.assign({src, type, typeSubstr}, attachment));
                  });
                });
              }
            }
          };
          ref = msg.signedData.attachments;
          for (j = 0, len = ref.length; j < len; j++) {
            attachment = ref[j];
            addAttachment(attachment);
          }
        }
        // TODO: make sure message signature is checked
        i = void 0;
        i = 0;
        smallestIndex = 1000;
        msg.authorArray = msg.getAuthorArray();
        ref1 = msg.authorArray;
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          a = ref1[l];
          if (!msg.linkToAuthor) {
            msg.linkToAuthor = a;
          }
          index = Object.keys(window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
          if (index > -1 && index < smallestIndex) {
            smallestIndex = index;
            msg.linkToAuthor = a;
          } else if (!msg.author_name && ((ref2 = a.type) === 'name' || ref2 === 'nickname')) {
            msg.author_name = a.value;
          }
          i++;
        }
        i = 0;
        smallestIndex = 1000;
        if (!msg.signedData.recipient) {
          msg.sameAuthorAndRecipient = true;
        } else {
          msg.recipientArray = msg.getRecipientArray();
          ref3 = msg.recipientArray;
          for (n = 0, len2 = ref3.length; n < len2; n++) {
            a = ref3[n];
            if (!msg.linkToAuthor) {
              msg.linkToRecipient = a;
            }
            index = Object.keys(window.irisLib.Attribute.getUniqueIdValidators()).indexOf(a.type);
            if (index > -1 && index < smallestIndex) {
              smallestIndex = index;
              msg.linkToRecipient = a;
            } else if (!msg.recipient_name && ((ref4 = a.type) === 'name' || ref4 === 'nickname')) {
              msg.recipient_name = a.value;
            }
            i++;
          }
          if (msg.linkToAuthor.equals(msg.linkToRecipient)) {
            msg.sameAuthorAndRecipient = true;
          }
          if (!msg.author_name) {
            msg.author_name = msg.linkToAuthor.value;
            if ((ref5 = msg.linkToAuthor.type) === 'keyID' || ref5 === 'uuid') {
              msg.author_name = msg.author_name.slice(0, 6) + '...';
            }
          }
          if (!msg.recipient_name) {
            msg.recipient_name = msg.linkToRecipient.value;
            if ((ref6 = msg.linkToAuthor.type) === 'keyID' || ref6 === 'uuid') {
              msg.recipient_name = msg.recipient_name.slice(0, 6) + '...';
            }
          }
        }
        if (msg.signedData.text && msg.signedData.text.length <= 2) {
          emojis = '\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]';
          if (msg.signedData.text.match(new RegExp(emojis, 'g')) !== null) {
            msg.emojisOnly = true;
          }
        }
        alpha = void 0;
        msg.bgColor = '';
        msg.iconCount = new Array(1);
        switch (msg.signedData.type) {
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
            msg.iconStyle = ''; // fa fa-pencil
            return msg.isPost = true;
          case 'rating':
            rating = msg.signedData.rating;
            neutralRating = (msg.signedData.minRating + msg.signedData.maxRating) / 2;
            maxRatingDiff = msg.signedData.maxRating - neutralRating;
            minRatingDiff = msg.signedData.minRating - neutralRating;
            if (rating > neutralRating) {
              if (msg.signedData.context === 'verifier') {
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
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsU0FEYixFQUN3QixRQUFBLENBQUEsQ0FBQTtXQUNwQjtNQUFBLEtBQUEsRUFBTyxJQUFQO01BQ0EsUUFBQSxFQUFVLEdBRFY7TUFFQSxXQUFBLEVBQWEsOENBRmI7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLGFBQUEsRUFBQSxhQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxhQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxhQUFBLEVBQUEsZUFBQSxFQUFBLGFBQUEsRUFBQTtRQUFBLEdBQUEsR0FBTSxLQUFLLENBQUM7UUFDWixHQUFHLENBQUMsS0FBSixHQUFZO1FBQ1osZUFBQSxHQUFrQixRQUFBLENBQUMsU0FBRCxDQUFBO0FBQ2hCLGNBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7VUFBQSxLQUFBLEdBQVE7VUFDUixLQUFBLEdBQVE7VUFDUixLQUFBLGNBQUE7O1lBQ0UsSUFBRyxDQUFBLEtBQUssTUFBUjtjQUNFLEtBQUE7Y0FDQSxJQUFnQixDQUFBLEtBQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFyQixJQUErQixD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cUJBQ2hFLEdBQUcsQ0FBQyxPQUFKLEdBQWMscUNBQUEsR0FBd0MsS0FBeEMsR0FBZ0QsS0FQaEU7YUFBQSxNQVFLLElBQUcsTUFBQSxHQUFTLGFBQVo7Y0FDSCxHQUFHLENBQUMsU0FBSixHQUFnQjtjQUNoQixHQUFHLENBQUMsU0FBSixHQUFtQixhQUFBLEdBQWdCLENBQUMsQ0FBcEIsR0FBMkIsR0FBRyxDQUFDLFNBQS9CLEdBQThDLElBQUksS0FBSixDQUFVLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQSxHQUFJLE1BQUosR0FBYSxhQUF2QixDQUFWO2NBQzlELEtBQUEsR0FBUSxDQUFDLE1BQUEsR0FBUyxhQUFULEdBQXlCLEdBQTFCLENBQUEsR0FBaUMsYUFBakMsR0FBaUQsSUFBakQsR0FBd0Q7cUJBQ2hFLEdBQUcsQ0FBQyxPQUFKLEdBQWMsb0NBQUEsR0FBdUMsS0FBdkMsR0FBK0MsS0FKMUQ7YUFBQSxNQUFBO2NBTUgsR0FBRyxDQUFDLE9BQUosR0FBYztxQkFDZCxHQUFHLENBQUMsU0FBSixHQUFnQiw0Q0FQYjs7QUF4QlQ7TUFoSUk7SUFITjtFQURvQixDQUR4QjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAuZGlyZWN0aXZlICdtZXNzYWdlJywgLT5cbiAgICBzY29wZTogdHJ1ZVxuICAgIHJlc3RyaWN0OiAnRSdcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuICAgIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICBtc2cgPSBzY29wZS5tc2dcbiAgICAgIG1zZy5saWtlcyA9IDBcbiAgICAgIHVwZGF0ZVJlYWN0aW9ucyA9IChyZWFjdGlvbnMpIC0+XG4gICAgICAgIGxpa2VzID0gMFxuICAgICAgICBsaWtlZCA9IGZhbHNlXG4gICAgICAgIGZvciBrLCB2IG9mIHJlYWN0aW9uc1xuICAgICAgICAgIGlmIHYgPT0gJ2xpa2UnXG4gICAgICAgICAgICBsaWtlcysrXG4gICAgICAgICAgICBsaWtlZCA9IHRydWUgaWYgayA9PSBzY29wZS52aWV3cG9pbnQudmFsdWUgYW5kIHYgPT0gJ2xpa2UnXG4gICAgICAgIG1zZy5saWtlcyA9IGxpa2VzXG4gICAgICAgIG1zZy5saWtlZCA9IGxpa2VkXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS5zaGFyZWRNc2cgYW5kIG5vdCBvcHRpb25zLm5vUmVjdXJzaW9uXG4gICAgICAgIHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlQnlIYXNoKG1zZy5zaWduZWREYXRhLnNoYXJlZE1zZykudGhlbiAobSkgLT5cbiAgICAgICAgICBtc2cuc2hhcmVkTXNnID0gbVxuICAgICAgdXBkYXRlUmVhY3Rpb25zKG1zZy5yZWFjdGlvbnMpIGlmIG1zZy5yZWFjdGlvbnNcbiAgICAgIG1zZy5yZXBsaWVzQXJyID0gbXNnLnJlcGxpZXNBcnIgb3IgW11cbiAgICAgIG1zZy5yZXBsaWVzID0gbXNnLnJlcGxpZXMgb3Ige31cbiAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICBtc2cuc2hhcmVzID0gbXNnLnNoYXJlcyBvciB7fVxuICAgICAgdXBkYXRlUmVwbGllcyA9IChyZXBsaWVzKSAtPlxuICAgICAgICBmb3IgaGFzaCwgcmVwbHlSYXcgb2YgcmVwbGllc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhyZXBseVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gYW5kIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXS5hdXRob3JcbiAgICAgICAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEucG9sbE9wdGlvbnMgYW5kIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZU1zZ3MgYW5kIG1zZy52b3RlTXNncy5oYXNPd25Qcm9wZXJ0eShyLmdldFNpZ25lcktleUlEKCkpXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZUNvdW50ID0gaWYgbXNnLnZvdGVDb3VudCB0aGVuIG1zZy52b3RlQ291bnQgKyAxIGVsc2UgMVxuICAgICAgICAgICAgICAgICAgaWYgIW1zZy5teVZvdGUgYW5kIHIuZ2V0U2lnbmVyS2V5SUQoKSA9PSBzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgbXNnLm15Vm90ZSA9IHIuc2lnbmVkRGF0YS52b3RlXG4gICAgICAgICAgICAgICAgICBtc2cudm90ZU1zZ3MgPSBtc2cudm90ZU1zZ3Mgb3Ige31cbiAgICAgICAgICAgICAgICAgIG1zZy52b3RlTXNnc1tyLmdldFNpZ25lcktleUlEKCldID0gci5nZXRIYXNoKClcbiAgICAgICAgICAgICAgICAgIHVubGVzcyBtc2cudm90ZVJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzID0ge31cbiAgICAgICAgICAgICAgICAgICAgbXNnLnZvdGVSZXN1bHRzW28udGV4dF0gPSAwIGZvciBvIGluIG1zZy5zaWduZWREYXRhLnBvbGxPcHRpb25zXG4gICAgICAgICAgICAgICAgICBpZiBtc2cudm90ZVJlc3VsdHMuaGFzT3duUHJvcGVydHkoci5zaWduZWREYXRhLnZvdGUpXG4gICAgICAgICAgICAgICAgICAgIG1zZy52b3RlUmVzdWx0c1tyLnNpZ25lZERhdGEudm90ZV0gPSBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdICsgMVxuICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBtc2cudm90ZVJlc3VsdHNbci5zaWduZWREYXRhLnZvdGVdID0gMVxuICAgICAgICAgICAgICBtc2cucmVwbGllc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgICAgICAgIG1zZy5yZXBsaWVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cucmVwbGllcylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgMTExMSwgciwgbXNnIGlmIHIuc2lnbmVkRGF0YS50eXBlID09ICd2b3RlJ1xuICAgICAgdXBkYXRlU2hhcmVzID0gKHNoYXJlcykgLT5cbiAgICAgICAgZm9yIGhhc2gsIHNoYXJlUmF3IG9mIHNoYXJlc1xuICAgICAgICAgIHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuZnJvbVNpZyhzaGFyZVJhdykudGhlbiAocikgLT5cbiAgICAgICAgICAgIHVubGVzcyBtc2cuc2hhcmVzW3IuZ2V0SGFzaCgpXSBhbmQgbXNnLnNoYXJlc1tyLmdldEhhc2goKV0uYXV0aG9yXG4gICAgICAgICAgICAgIG1zZy5zaGFyZXNbci5nZXRIYXNoKCldID0gclxuICAgICAgICAgICAgICBtc2cuc2hhcmVzQXJyID0gT2JqZWN0LnZhbHVlcyhtc2cuc2hhcmVzKVxuICAgICAgaWYgbXNnLmd1blxuICAgICAgICBtc2cuZ3VuLmdldCgncmVwbGllcycpLm9wZW4gdXBkYXRlUmVwbGllc1xuICAgICAgICBtc2cuZ3VuLmdldCgncmVhY3Rpb25zJykub24gdXBkYXRlUmVhY3Rpb25zXG4gICAgICAgIG1zZy5ndW4uZ2V0KCdzaGFyZXMnKS5vcGVuIHVwZGF0ZVNoYXJlc1xuICAgICAgdW5sZXNzIG1zZy5hdXRob3JcbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3Ioc2NvcGUuaXJpc0luZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgIHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLmF1dGhvcl9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgaWYgbXNnLnNpZ25lZERhdGEucmVjaXBpZW50XG4gICAgICAgIG1zZy5yZWNpcGllbnQgPSBtc2cuZ2V0UmVjaXBpZW50KHNjb3BlLmlyaXNJbmRleClcbiAgICAgICAgbXNnLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgICAgbXZhID0gd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICBzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgIHNjb3BlLiRhcHBseSAtPiBtc2cucmVjaXBpZW50X25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbHVlXG4gICAgICBpZiBtc2cuc2lnbmVkRGF0YS5hdHRhY2htZW50c1xuICAgICAgICBtc2cuYXR0YWNobWVudHMgPSBbXVxuICAgICAgICBhZGRBdHRhY2htZW50ID0gKGF0dGFjaG1lbnQpIC0+XG4gICAgICAgICAgaWYgYXR0YWNobWVudC51cmlcbiAgICAgICAgICAgIHR5cGUgPSBhdHRhY2htZW50LnR5cGUgb3IgJ2ltYWdlJ1xuICAgICAgICAgICAgdHlwZVN1YnN0ciA9IGF0dGFjaG1lbnQudHlwZS5zdWJzdHIoMCw1KVxuICAgICAgICAgICAgaWYgdHlwZVN1YnN0ciBpbiBbJ2F1ZGlvJywgJ3ZpZGVvJ11cbiAgICAgICAgICAgICAgbXNnLmF0dGFjaG1lbnRzLnB1c2ggT2JqZWN0LmFzc2lnbiB7dHlwZSwgdHlwZVN1YnN0cn0sIGF0dGFjaG1lbnRcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cgbXNnLmF0dGFjaG1lbnRzXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHNjb3BlLmlwZnNHZXQoYXR0YWNobWVudC51cmksIHtiYXNlNjR0eXBlOiB0eXBlfSkudGhlbiAoc3JjKSAtPlxuICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgICAgbXNnLmF0dGFjaG1lbnRzLnB1c2ggT2JqZWN0LmFzc2lnbiB7c3JjLCB0eXBlLCB0eXBlU3Vic3RyfSwgYXR0YWNobWVudFxuICAgICAgICBhZGRBdHRhY2htZW50KGF0dGFjaG1lbnQpIGZvciBhdHRhY2htZW50IGluIG1zZy5zaWduZWREYXRhLmF0dGFjaG1lbnRzXG4gICAgICAjIFRPRE86IG1ha2Ugc3VyZSBtZXNzYWdlIHNpZ25hdHVyZSBpcyBjaGVja2VkXG4gICAgICBpID0gdW5kZWZpbmVkXG4gICAgICBpID0gMFxuICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgIG1zZy5hdXRob3JBcnJheSA9IG1zZy5nZXRBdXRob3JBcnJheSgpXG4gICAgICBmb3IgYSBpbiBtc2cuYXV0aG9yQXJyYXlcbiAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IGEgdW5sZXNzIG1zZy5saW5rVG9BdXRob3JcbiAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cyh3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VW5pcXVlSWRWYWxpZGF0b3JzKCkpLmluZGV4T2YoYS50eXBlKVxuICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYVxuICAgICAgICBlbHNlIGlmICFtc2cuYXV0aG9yX25hbWUgYW5kIGEudHlwZSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IGEudmFsdWVcbiAgICAgICAgaSsrXG4gICAgICBpID0gMFxuICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgIGlmIG5vdCBtc2cuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgbXNnLnNhbWVBdXRob3JBbmRSZWNpcGllbnQgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgIG1zZy5yZWNpcGllbnRBcnJheSA9IG1zZy5nZXRSZWNpcGllbnRBcnJheSgpXG4gICAgICAgIGZvciBhIGluIG1zZy5yZWNpcGllbnRBcnJheVxuICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBhIHVubGVzcyBtc2cubGlua1RvQXV0aG9yXG4gICAgICAgICAgaW5kZXggPSBPYmplY3Qua2V5cyh3aW5kb3cuaXJpc0xpYi5BdHRyaWJ1dGUuZ2V0VW5pcXVlSWRWYWxpZGF0b3JzKCkpLmluZGV4T2YoYS50eXBlKVxuICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gYVxuICAgICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgYS50eXBlIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50X25hbWUgPSBhLnZhbHVlXG4gICAgICAgICAgaSsrXG4gICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IuZXF1YWxzKG1zZy5saW5rVG9SZWNpcGllbnQpXG4gICAgICAgICAgbXNnLnNhbWVBdXRob3JBbmRSZWNpcGllbnQgPSB0cnVlXG4gICAgICAgIGlmICFtc2cuYXV0aG9yX25hbWVcbiAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cubGlua1RvQXV0aG9yLnZhbHVlXG4gICAgICAgICAgaWYgbXNnLmxpbmtUb0F1dGhvci50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuYXV0aG9yX25hbWUuc2xpY2UoMCwgNikgKyAnLi4uJ1xuICAgICAgICBpZiAhbXNnLnJlY2lwaWVudF9uYW1lXG4gICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLmxpbmtUb1JlY2lwaWVudC52YWx1ZVxuICAgICAgICAgIGlmIG1zZy5saW5rVG9BdXRob3IudHlwZSBpbiBbJ2tleUlEJywgJ3V1aWQnXVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLnJlY2lwaWVudF9uYW1lLnNsaWNlKDAsIDYpICsgJy4uLidcbiAgICAgIGlmIG1zZy5zaWduZWREYXRhLnRleHQgYW5kIG1zZy5zaWduZWREYXRhLnRleHQubGVuZ3RoIDw9IDJcbiAgICAgICAgZW1vamlzID0gJ1xcdTAwYTl8XFx1MDBhZXxbXFx1MjAwMC1cXHUzMzAwXXxcXHVkODNjW1xcdWQwMDAtXFx1ZGZmZl18XFx1ZDgzZFtcXHVkMDAwLVxcdWRmZmZdfFxcdWQ4M2VbXFx1ZDAwMC1cXHVkZmZmXSdcbiAgICAgICAgaWYgbXNnLnNpZ25lZERhdGEudGV4dC5tYXRjaChuZXcgUmVnRXhwKGVtb2ppcywgJ2cnKSkgIT0gbnVsbFxuICAgICAgICAgIG1zZy5lbW9qaXNPbmx5ID0gdHJ1ZVxuICAgICAgYWxwaGEgPSB1bmRlZmluZWRcbiAgICAgIG1zZy5iZ0NvbG9yID0gJydcbiAgICAgIG1zZy5pY29uQ291bnQgPSBuZXcgQXJyYXkoMSlcbiAgICAgIHN3aXRjaCBtc2cuc2lnbmVkRGF0YS50eXBlXG4gICAgICAgIHdoZW4gJ3ZlcmlmeV9pZGVudGl0eScsICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rLXNpZ24nXG4gICAgICAgICAgbXNnLmlzVmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICB3aGVuICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbidcbiAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIG5lZ2F0aXZlJ1xuICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgIG1zZy5pc1VudmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICB3aGVuICdwb3N0J1xuICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnJyAjIGZhIGZhLXBlbmNpbFxuICAgICAgICAgIG1zZy5pc1Bvc3QgPSB0cnVlXG4gICAgICAgIHdoZW4gJ3JhdGluZydcbiAgICAgICAgICByYXRpbmcgPSBtc2cuc2lnbmVkRGF0YS5yYXRpbmdcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKG1zZy5zaWduZWREYXRhLm1pblJhdGluZyArIG1zZy5zaWduZWREYXRhLm1heFJhdGluZykgLyAyXG4gICAgICAgICAgbWF4UmF0aW5nRGlmZiA9IG1zZy5zaWduZWREYXRhLm1heFJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICBtaW5SYXRpbmdEaWZmID0gbXNnLnNpZ25lZERhdGEubWluUmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgIGlmIHJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIGlmIG1zZy5zaWduZWREYXRhLmNvbnRleHQgPT0gJ3ZlcmlmaWVyJ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2ZhIGZhLXNoaWVsZCBwb3NpdGl2ZSdcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1heFJhdGluZ0RpZmYgPCAyIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1heFJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyAtIDAuNSkgLyBtYXhSYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgZWxzZSBpZiByYXRpbmcgPCBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd24gbmVnYXRpdmUnXG4gICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWluUmF0aW5nRGlmZiA+IC0yIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1pblJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyArIDAuNSkgLyBtaW5SYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzOydcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduIG5ldXRyYWwnXG4iXX0=

(function() {
  // coffeelint: disable=max_line_length
  angular.module('irisAngular').directive('identicon', function() {
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
            identicon = scope.identity.identicon({
              width: attrs.width,
              border: attrs.border,
              showDistance: attrs.showDistance,
              ipfs: scope.ipfs,
              outerGlow: attrs.outerGlow
            });
            element.empty();
            return element.append(identicon);
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsU0FESCxDQUNhLFdBRGIsRUFDMEIsUUFBQSxDQUFBLENBQUE7V0FDdEI7TUFBQSxLQUFBLEVBQ0U7UUFBQSxRQUFBLEVBQVUsR0FBVjtRQUNBLElBQUEsRUFBTTtNQUROLENBREY7TUFHQSxJQUFBLEVBQU0sUUFBQSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQUE7QUFDSixZQUFBO1FBQUEsS0FBSyxDQUFDLFlBQU4sR0FBd0IsT0FBTyxLQUFLLENBQUMsWUFBYixLQUE2QixXQUFoQyxHQUFpRCxJQUFqRCxHQUEyRCxDQUFDLENBQUMsUUFBQSxDQUFTLEtBQUssQ0FBQyxZQUFmO1FBQ2xGLEtBQUssQ0FBQyxNQUFOLEdBQWtCLEtBQUEsQ0FBTSxLQUFLLENBQUMsTUFBWixDQUFILEdBQTRCLENBQTVCLEdBQW1DLEtBQUssQ0FBQztRQUN4RCxNQUFBLEdBQVMsUUFBQSxDQUFBLENBQUE7QUFDUCxjQUFBO1VBQUEsSUFBRyxLQUFLLENBQUMsUUFBTixJQUFrQixLQUFLLENBQUMsUUFBUSxDQUFDLFNBQXBDO1lBQ0UsU0FBQSxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBZixDQUNWO2NBQUEsS0FBQSxFQUFPLEtBQUssQ0FBQyxLQUFiO2NBQ0EsTUFBQSxFQUFRLEtBQUssQ0FBQyxNQURkO2NBRUEsWUFBQSxFQUFjLEtBQUssQ0FBQyxZQUZwQjtjQUdBLElBQUEsRUFBTSxLQUFLLENBQUMsSUFIWjtjQUlBLFNBQUEsRUFBVyxLQUFLLENBQUM7WUFKakIsQ0FEVTtZQU1aLE9BQU8sQ0FBQyxLQUFSLENBQUE7bUJBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxTQUFmLEVBUkY7O1FBRE87ZUFVVCxLQUFLLENBQUMsV0FBTixDQUFrQixDQUFDLFVBQUQsQ0FBbEIsRUFBZ0MsTUFBaEM7TUFiSTtJQUhOO0VBRHNCLENBRDFCO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIjIGNvZmZlZWxpbnQ6IGRpc2FibGU9bWF4X2xpbmVfbGVuZ3RoXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2lkZW50aWNvbicsIC0+XG4gICAgc2NvcGU6XG4gICAgICBpZGVudGl0eTogJz0nXG4gICAgICBpcGZzOiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgYXR0cnMuc2hvd0Rpc3RhbmNlID0gaWYgdHlwZW9mIGF0dHJzLnNob3dEaXN0YW5jZSA9PSAndW5kZWZpbmVkJyB0aGVuIHRydWUgZWxzZSAhIXBhcnNlSW50KGF0dHJzLnNob3dEaXN0YW5jZSlcbiAgICAgIGF0dHJzLmJvcmRlciA9IGlmIGlzTmFOKGF0dHJzLmJvcmRlcikgdGhlbiAzIGVsc2UgYXR0cnMuYm9yZGVyXG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBpZiBzY29wZS5pZGVudGl0eSAmJiBzY29wZS5pZGVudGl0eS5pZGVudGljb25cbiAgICAgICAgICBpZGVudGljb24gPSBzY29wZS5pZGVudGl0eS5pZGVudGljb25cbiAgICAgICAgICAgIHdpZHRoOiBhdHRycy53aWR0aFxuICAgICAgICAgICAgYm9yZGVyOiBhdHRycy5ib3JkZXJcbiAgICAgICAgICAgIHNob3dEaXN0YW5jZTogYXR0cnMuc2hvd0Rpc3RhbmNlXG4gICAgICAgICAgICBpcGZzOiBzY29wZS5pcGZzXG4gICAgICAgICAgICBvdXRlckdsb3c6IGF0dHJzLm91dGVyR2xvd1xuICAgICAgICAgIGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGlkZW50aWNvbilcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsnaWRlbnRpdHknXSwgdXBkYXRlXG4iXX0=

(function() {
  angular.module('irisAngular').directive('focusOn', function() {
    return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if (name === attr.focusOn) {
          elem[0].focus();
        }
      });
    };
  });

  angular.module('irisAngular').factory('focus', function($rootScope, $timeout) {
    return function(name) {
      $timeout(function() {
        $rootScope.$broadcast('focusOn', name);
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGFBQWYsQ0FDQSxDQUFDLFNBREQsQ0FDVyxTQURYLEVBQ3NCLFFBQUEsQ0FBQSxDQUFBO1dBQ3BCLFFBQUEsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLElBQWQsQ0FBQTtNQUNFLEtBQUssQ0FBQyxHQUFOLENBQVUsU0FBVixFQUFxQixRQUFBLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FBQTtRQUNuQixJQUFHLElBQUEsS0FBUSxJQUFJLENBQUMsT0FBaEI7VUFDRSxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsS0FBUixDQUFBLEVBREY7O01BRG1CLENBQXJCO0lBREY7RUFEb0IsQ0FEdEI7O0VBU0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0EsQ0FBQyxPQURELENBQ1MsT0FEVCxFQUNrQixRQUFBLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBQTtXQUNoQixRQUFBLENBQUMsSUFBRCxDQUFBO01BQ0UsUUFBQSxDQUFTLFFBQUEsQ0FBQSxDQUFBO1FBQ1AsVUFBVSxDQUFDLFVBQVgsQ0FBc0IsU0FBdEIsRUFBaUMsSUFBakM7TUFETyxDQUFUO0lBREY7RUFEZ0IsQ0FEbEI7QUFUQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpcmlzQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4uZmFjdG9yeSAnZm9jdXMnLCAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIC0+XG4gIChuYW1lKSAtPlxuICAgICR0aW1lb3V0IC0+XG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ2ZvY3VzT24nLCBuYW1lXG4gICAgICByZXR1cm5cbiAgICByZXR1cm5cbiJdfQ==

(function() {
  'use strict';
  angular.module('irisAngular').service('NotificationService', [
    'Notification',
    function(uiNotification) {
      return {
        notifications: [],
        unseenChats: 0,
        unseenPosts: 0,
        audio: new Audio('assets/audio/notification.mp3'),
        create: function(notification) {
          var defaultOptions,
    desktopNotification;
          defaultOptions = {
            seen: false,
            from: '',
            text: '',
            type: 'primary',
            positionX: 'right',
            positionY: 'bottom',
            delay: 10000,
            replaceMessage: true,
            templateUrl: 'app/services/notification.template.html'
          };
          notification = Object.assign(defaultOptions,
    notification);
          notification.message = `${notification.from}: ${notification.text}`;
          this.notifications.push(notification);
          this.notifications.splice(10); // maximum notifications length
          if (!this.audioNotificationsDisabled) {
            this.audio.play();
          }
          if (!notification.seen) {
            if (notification.type === 'post') {
              this.unseenPosts++;
            }
            if (notification.type === 'chat') {
              this.unseenChats++;
            }
          }
          uiNotification(notification);
          if (document.hidden && !this.desktopNotificationsDisabled) {
            if (window.Notification && Notification.permission === 'granted') {
              console.log('notifying');
              desktopNotification = new Notification(notification.from,
    {
                icon: 'assets/images/icon128.png',
                body: notification.text,
                silent: true
              });
              return desktopNotification.onclick = function() {
                uiNotification.clearAll();
                if (notification.onClick) {
                  notification.onClick();
                }
                return window.focus();
              };
            }
          }
        },
        markChatsSeen: function(options) {
          var i,
    len,
    n,
    ref;
          ref = this.notifications;
          for (i = 0, len = ref.length; i < len; i++) {
            n = ref[i];
            if (n.type === 'chat') {
              n.seen = true;
            }
          }
          return this.unseenChats = 0;
        },
        markPostsSeen: function(options) {
          var i,
    len,
    n,
    ref;
          ref = this.notifications;
          for (i = 0, len = ref.length; i < len; i++) {
            n = ref[i];
            if (n.type === 'post') {
              n.seen = true;
            }
          }
          return this.unseenPosts = 0;
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsT0FBOUIsQ0FBc0MscUJBQXRDLEVBQTZEO0lBQzNELGNBRDJEO0lBRTNELFFBQUEsQ0FBQyxjQUFELENBQUE7YUFDRTtRQUNFLGFBQUEsRUFBZSxFQURqQjtRQUVFLFdBQUEsRUFBYSxDQUZmO1FBR0UsV0FBQSxFQUFhLENBSGY7UUFJRSxLQUFBLEVBQU8sSUFBSSxLQUFKLENBQVUsK0JBQVYsQ0FKVDtRQUtFLE1BQUEsRUFBUSxRQUFBLENBQUMsWUFBRCxDQUFBO0FBQ04sY0FBQSxjQUFBO0lBQUE7VUFBQSxjQUFBLEdBQ0U7WUFBQSxJQUFBLEVBQU0sS0FBTjtZQUNBLElBQUEsRUFBTSxFQUROO1lBRUEsSUFBQSxFQUFNLEVBRk47WUFHQSxJQUFBLEVBQU0sU0FITjtZQUlBLFNBQUEsRUFBVyxPQUpYO1lBS0EsU0FBQSxFQUFXLFFBTFg7WUFNQSxLQUFBLEVBQU8sS0FOUDtZQU9BLGNBQUEsRUFBZ0IsSUFQaEI7WUFRQSxXQUFBLEVBQWE7VUFSYjtVQVNGLFlBQUEsR0FBZSxNQUFNLENBQUMsTUFBUCxDQUFjLGNBQWQ7SUFBOEIsWUFBOUI7VUFDZixZQUFZLENBQUMsT0FBYixHQUF1QixDQUFBLENBQUEsQ0FBRyxZQUFZLENBQUMsSUFBaEIsQ0FBcUIsRUFBckIsQ0FBQSxDQUF5QixZQUFZLENBQUMsSUFBdEMsQ0FBQTtVQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQW5CLENBQXdCLFlBQXhCO1VBQ0EsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFuQixDQUEwQixFQUExQixFQWJBO1VBY0EsSUFBQSxDQUF5QixJQUFJLENBQUMsMEJBQTlCO1lBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFYLENBQUEsRUFBQTs7VUFDQSxJQUFBLENBQU8sWUFBWSxDQUFDLElBQXBCO1lBQ0UsSUFBc0IsWUFBWSxDQUFDLElBQWIsS0FBcUIsTUFBM0M7Y0FBQSxJQUFJLENBQUMsV0FBTCxHQUFBOztZQUNBLElBQXNCLFlBQVksQ0FBQyxJQUFiLEtBQXFCLE1BQTNDO2NBQUEsSUFBSSxDQUFDLFdBQUwsR0FBQTthQUZGOztVQUdBLGNBQUEsQ0FBZSxZQUFmO1VBQ0EsSUFBRyxRQUFRLENBQUMsTUFBVCxJQUFvQixDQUFJLElBQUksQ0FBQyw0QkFBaEM7WUFDRSxJQUFHLE1BQU0sQ0FBQyxZQUFQLElBQXdCLFlBQVksQ0FBQyxVQUFiLEtBQTJCLFNBQXREO2NBQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO2NBQ0EsbUJBQUEsR0FBc0IsSUFBSSxZQUFKLENBQWlCLFlBQVksQ0FBQyxJQUE5QjtJQUNwQjtnQkFBQSxJQUFBLEVBQU0sMkJBQU47Z0JBQ0EsSUFBQSxFQUFNLFlBQVksQ0FBQyxJQURuQjtnQkFFQSxNQUFBLEVBQVE7Y0FGUixDQURvQjtxQkFJdEIsbUJBQW1CLENBQUMsT0FBcEIsR0FBOEIsUUFBQSxDQUFBLENBQUE7Z0JBQzVCLGNBQWMsQ0FBQyxRQUFmLENBQUE7Z0JBQ0EsSUFBMEIsWUFBWSxDQUFDLE9BQXZDO2tCQUFBLFlBQVksQ0FBQyxPQUFiLENBQUEsRUFBQTs7dUJBQ0EsTUFBTSxDQUFDLEtBQVAsQ0FBQTtjQUg0QixFQU5oQzthQURGOztRQXBCTSxDQUxWO1FBb0NFLGFBQUEsRUFBZSxRQUFBLENBQUMsT0FBRCxDQUFBO0FBQ2IsY0FBQSxDQUFBO0lBQUEsR0FBQTtJQUFBLENBQUE7SUFBQTtBQUFBO1VBQUEsS0FBQSxxQ0FBQTs7WUFDRSxJQUFpQixDQUFDLENBQUMsSUFBRixLQUFVLE1BQTNCO2NBQUEsQ0FBQyxDQUFDLElBQUYsR0FBUyxLQUFUOztVQURGO2lCQUVBLElBQUksQ0FBQyxXQUFMLEdBQW1CO1FBSE4sQ0FwQ2pCO1FBd0NFLGFBQUEsRUFBZSxRQUFBLENBQUMsT0FBRCxDQUFBO0FBQ2IsY0FBQSxDQUFBO0lBQUEsR0FBQTtJQUFBLENBQUE7SUFBQTtBQUFBO1VBQUEsS0FBQSxxQ0FBQTs7WUFDRSxJQUFpQixDQUFDLENBQUMsSUFBRixLQUFVLE1BQTNCO2NBQUEsQ0FBQyxDQUFDLElBQUYsR0FBUyxLQUFUOztVQURGO2lCQUVBLElBQUksQ0FBQyxXQUFMLEdBQW1CO1FBSE47TUF4Q2pCO0lBREYsQ0FGMkQ7R0FBN0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuc2VydmljZSAnTm90aWZpY2F0aW9uU2VydmljZScsIFtcbiAgJ05vdGlmaWNhdGlvbicsXG4gICh1aU5vdGlmaWNhdGlvbikgLT5cbiAgICB7XG4gICAgICBub3RpZmljYXRpb25zOiBbXVxuICAgICAgdW5zZWVuQ2hhdHM6IDBcbiAgICAgIHVuc2VlblBvc3RzOiAwXG4gICAgICBhdWRpbzogbmV3IEF1ZGlvKCdhc3NldHMvYXVkaW8vbm90aWZpY2F0aW9uLm1wMycpXG4gICAgICBjcmVhdGU6IChub3RpZmljYXRpb24pIC0+XG4gICAgICAgIGRlZmF1bHRPcHRpb25zID1cbiAgICAgICAgICBzZWVuOiBmYWxzZVxuICAgICAgICAgIGZyb206ICcnXG4gICAgICAgICAgdGV4dDogJydcbiAgICAgICAgICB0eXBlOiAncHJpbWFyeSdcbiAgICAgICAgICBwb3NpdGlvblg6ICdyaWdodCdcbiAgICAgICAgICBwb3NpdGlvblk6ICdib3R0b20nXG4gICAgICAgICAgZGVsYXk6IDEwMDAwXG4gICAgICAgICAgcmVwbGFjZU1lc3NhZ2U6IHRydWVcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zZXJ2aWNlcy9ub3RpZmljYXRpb24udGVtcGxhdGUuaHRtbCdcbiAgICAgICAgbm90aWZpY2F0aW9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgbm90aWZpY2F0aW9uKVxuICAgICAgICBub3RpZmljYXRpb24ubWVzc2FnZSA9IFwiI3tub3RpZmljYXRpb24uZnJvbX06ICN7bm90aWZpY2F0aW9uLnRleHR9XCJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnB1c2ggbm90aWZpY2F0aW9uXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5zcGxpY2UgMTAgIyBtYXhpbXVtIG5vdGlmaWNhdGlvbnMgbGVuZ3RoXG4gICAgICAgIHRoaXMuYXVkaW8ucGxheSgpIHVubGVzcyB0aGlzLmF1ZGlvTm90aWZpY2F0aW9uc0Rpc2FibGVkXG4gICAgICAgIHVubGVzcyBub3RpZmljYXRpb24uc2VlblxuICAgICAgICAgIHRoaXMudW5zZWVuUG9zdHMrKyBpZiBub3RpZmljYXRpb24udHlwZSA9PSAncG9zdCdcbiAgICAgICAgICB0aGlzLnVuc2VlbkNoYXRzKysgaWYgbm90aWZpY2F0aW9uLnR5cGUgPT0gJ2NoYXQnXG4gICAgICAgIHVpTm90aWZpY2F0aW9uIG5vdGlmaWNhdGlvblxuICAgICAgICBpZiBkb2N1bWVudC5oaWRkZW4gYW5kIG5vdCB0aGlzLmRlc2t0b3BOb3RpZmljYXRpb25zRGlzYWJsZWRcbiAgICAgICAgICBpZiB3aW5kb3cuTm90aWZpY2F0aW9uIGFuZCBOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PSAnZ3JhbnRlZCdcbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdub3RpZnlpbmcnXG4gICAgICAgICAgICBkZXNrdG9wTm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uZnJvbSxcbiAgICAgICAgICAgICAgaWNvbjogJ2Fzc2V0cy9pbWFnZXMvaWNvbjEyOC5wbmcnXG4gICAgICAgICAgICAgIGJvZHk6IG5vdGlmaWNhdGlvbi50ZXh0XG4gICAgICAgICAgICAgIHNpbGVudDogdHJ1ZSlcbiAgICAgICAgICAgIGRlc2t0b3BOb3RpZmljYXRpb24ub25jbGljayA9IC0+XG4gICAgICAgICAgICAgIHVpTm90aWZpY2F0aW9uLmNsZWFyQWxsKClcbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLm9uQ2xpY2soKSBpZiBub3RpZmljYXRpb24ub25DbGlja1xuICAgICAgICAgICAgICB3aW5kb3cuZm9jdXMoKVxuICAgICAgbWFya0NoYXRzU2VlbjogKG9wdGlvbnMpIC0+XG4gICAgICAgIGZvciBuIGluIHRoaXMubm90aWZpY2F0aW9uc1xuICAgICAgICAgIG4uc2VlbiA9IHRydWUgaWYgbi50eXBlID09ICdjaGF0J1xuICAgICAgICB0aGlzLnVuc2VlbkNoYXRzID0gMFxuICAgICAgbWFya1Bvc3RzU2VlbjogKG9wdGlvbnMpIC0+XG4gICAgICAgIGZvciBuIGluIHRoaXMubm90aWZpY2F0aW9uc1xuICAgICAgICAgIG4uc2VlbiA9IHRydWUgaWYgbi50eXBlID09ICdwb3N0J1xuICAgICAgICB0aGlzLnVuc2VlblBvc3RzID0gMFxuICAgIH1cbl1cbiJdfQ==

(function() {
  'use strict';
  // Messages controller
  angular.module('irisAngular').controller('MessagesController', [
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
    {
          limit: 10
        },
    filters);
      };
      if ($state.is('messages.list')) {
        $scope.filters.type = config.defaultFilters.type;
      }
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    isIpfsHash,
    processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          isIpfsHash = hash.match(/^Qm[1-9A-Za-z]{40,50}$/);
          processResponse = function() {
            $scope.processMessages([$scope.message],
    {});
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyID = $scope.message.getSignerKeyID();
            $scope.message.verifiedBy = $scope.irisIndex.get('keyID',
    $scope.message.signerKeyID);
            $scope.setIdentityNames($scope.message.verifiedBy,
    true);
            $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID',
    $scope.message.signerKeyID);
            if (isIpfsHash) {
              return $scope.message.ipfsUri = hash;
            }
          };
          return $scope.irisIndex.getMessageByHash(hash).then(function(m) {
            return $scope.$apply(function() {
              $scope.message = m;
              return processResponse();
            });
          });
        }
      };
      load = function() {
        if (!$scope.irisIndex) {
          return;
        }
        if ($state.is('messages.show')) {
          return $scope.findOne();
        }
      };
      return $scope.$watch('irisIndex',
    load);
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxhQUFBOztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLFVBQTlCLENBQXlDLG9CQUF6QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxTQUg2RDtJQUk3RCxjQUo2RDtJQUs3RCxXQUw2RDtJQU03RCxPQU42RDtJQU83RCxRQVA2RDs7SUFTN0QsUUFUNkQ7SUFVN0QsVUFWNkQ7SUFXN0QscUJBWDZEO0lBWTdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixPQUFyQjtJQUE4QixZQUE5QjtJQUE0QyxTQUE1QztJQUF1RCxLQUF2RDtJQUE4RCxNQUE5RDtJQUFzRSxNQUF0RTtJQUE4RSxRQUE5RTtJQUF3RixtQkFBeEYsQ0FBQSxFQUFBO0FBQ0UsVUFBQTtNQUFBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFFOUIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsUUFBQSxDQUFDLE1BQUQsQ0FBQTtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQ7SUFBWSxJQUFJLENBQUMsR0FBTCxDQUFTLE1BQVQsQ0FBWixDQUFWO01BRGlCO01BR25CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7QUFDakIsWUFBQTtRQUFBLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDRSxTQUFBLEdBQVksV0FEZDtTQUFBLE1BRUssSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNILFNBQUEsR0FBWSxXQURUOztlQUVMO01BTmlCO01BUW5CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQyxNQUFELENBQUE7QUFDakIsWUFBQTtRQUFBLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDRSxTQUFBLEdBQVksc0JBRGQ7U0FBQSxNQUVLLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDSCxTQUFBLEdBQVksd0JBRFQ7O2VBRUw7TUFOaUI7TUFRbkIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsT0FBTyxDQUFDLFVBQVIsR0FBcUI7TUFFOUMsTUFBTSxDQUFDLFVBQVAsR0FBb0IsUUFBQSxDQUFDLE9BQUQsQ0FBQTtlQUNsQixPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxPQUF0QjtJQUErQjtVQUFDLEtBQUEsRUFBTztRQUFSLENBQS9CO0lBQTRDLE9BQTVDO01BRGtCO01BR3BCLElBQUcsTUFBTSxDQUFDLEVBQVAsQ0FBVSxlQUFWLENBQUg7UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUQ5QztPQTNCQTs7TUErQkEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBQSxDQUFBLENBQUE7QUFDZixZQUFBLElBQUE7SUFBQSxVQUFBO0lBQUE7UUFBQSxJQUFHLFlBQVksQ0FBQyxFQUFoQjtVQUNFLElBQUEsR0FBTyxZQUFZLENBQUM7VUFDcEIsVUFBQSxHQUFhLElBQUksQ0FBQyxLQUFMLENBQVcsd0JBQVg7VUFFYixlQUFBLEdBQWtCLFFBQUEsQ0FBQSxDQUFBO1lBQ2hCLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQUMsTUFBTSxDQUFDLE9BQVIsQ0FBdkI7SUFBeUMsQ0FBQSxDQUF6QztZQUNBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQUEsR0FBYSxJQUFqQztZQUNBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLE1BQU0sQ0FBQyxPQUE1QjtZQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZixHQUE2QixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWYsQ0FBQTtZQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQWYsR0FBNEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFqQixDQUFxQixPQUFyQjtJQUE4QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQTdDO1lBQzVCLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQXZDO0lBQW1ELElBQW5EO1lBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFmLEdBQWdDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFwQixDQUE4QixPQUE5QjtJQUF1QyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQXREO1lBQ2hDLElBQWlDLFVBQWpDO3FCQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBZixHQUF5QixLQUF6Qjs7VUFSZ0I7aUJBVWxCLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWpCLENBQWtDLElBQWxDLENBQXVDLENBQUMsSUFBeEMsQ0FBNkMsUUFBQSxDQUFDLENBQUQsQ0FBQTttQkFDM0MsTUFBTSxDQUFDLE1BQVAsQ0FBYyxRQUFBLENBQUEsQ0FBQTtjQUNaLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO3FCQUNqQixlQUFBLENBQUE7WUFGWSxDQUFkO1VBRDJDLENBQTdDLEVBZEY7O01BRGU7TUFvQmpCLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtRQUNMLElBQUEsQ0FBYyxNQUFNLENBQUMsU0FBckI7QUFBQSxpQkFBQTs7UUFDQSxJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsZUFBVixDQUFIO2lCQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFERjs7TUFGSzthQUlQLE1BQU0sQ0FBQyxNQUFQLENBQWMsV0FBZDtJQUEyQixJQUEzQjtJQXhERixDQVo2RDtHQUEvRDtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01lc3NhZ2VzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnJHRpbWVvdXQnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsICRzdGF0ZSwgY29uZmlnLCAkdGltZW91dCwgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCB7bGltaXQ6IDEwfSwgZmlsdGVyc1xuXG4gICAgaWYgJHN0YXRlLmlzICdtZXNzYWdlcy5saXN0J1xuICAgICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IGNvbmZpZy5kZWZhdWx0RmlsdGVycy50eXBlXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIGlzSXBmc0hhc2ggPSBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kL1xuXG4gICAgICAgIHByb2Nlc3NSZXNwb25zZSA9IC0+XG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbJHNjb3BlLm1lc3NhZ2VdLCB7fSlcbiAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICdNZXNzYWdlICcgKyBoYXNoXG4gICAgICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEoJHNjb3BlLm1lc3NhZ2UpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnksIHRydWUpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeUF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgna2V5SUQnLCAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRClcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5pcGZzVXJpID0gaGFzaCBpZiBpc0lwZnNIYXNoXG5cbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5nZXRNZXNzYWdlQnlIYXNoKGhhc2gpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtXG4gICAgICAgICAgICBwcm9jZXNzUmVzcG9uc2UoKVxuXG4gICAgbG9hZCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pcmlzSW5kZXhcbiAgICAgIGlmICRzdGF0ZS5pcygnbWVzc2FnZXMuc2hvdycpXG4gICAgICAgICRzY29wZS5maW5kT25lKClcbiAgICAkc2NvcGUuJHdhdGNoICdpcmlzSW5kZXgnLCBsb2FkXG5dXG4iXX0=

(function() {
  'use strict';
  angular.module('irisAngular').controller('MainController', [
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
    '$transitions',
    '$q',
    'focus',
    'NotificationService',
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
    $transitions,
    $q,
    focus,
    NotificationService) {
      var opt,
    privateKey,
    scrollTo,
    setIndex;
      opt = {
        peers: [],
        localStorage: false
      };
      if (!($window.location.hostname === 'localhost' && $window.location.port === '3000')) {
        opt.peers = [
          'https://gun-us.herokuapp.com/gun',
          'https://gun-eu.herokuapp.com/gun' // 'https://gunmeetingserver.herokuapp.com/gun'
        ];
      }
      if ($window.location.protocol !== "https:") {
        opt.peers.push('http://localhost:8765/gun');
      }
      $scope.isElectron = userAgent.indexOf(' electron/') > -1;
      if (!$scope.isElectron) {
        opt.store = RindexedDB(opt);
      }
      $scope.gun = $window.irisGun = new Gun(opt);
      // TODO: move everything to main controller?
      // set authentication
      $scope.authentication = {}; // Authentication
      $scope.openTime = new Date();
      $scope.notificationService = NotificationService;
      $scope.trustDistanceComparator = function(a,
    b) {
        if (a.type !== 'number') {
          return 1;
        }
        if (b.type !== 'number') {
          return -1;
        }
        return a.value - b.value;
      };
      $scope.getIdUrl = function(type,
    value) {
        if ($window.location.hostname.indexOf('.') > -1) { // differentiate between localhost / chrome plugin uri and DNS name
          return $state.href('identities.show',
    {type,
    value},
    {
            absolute: true
          });
        } else {
          return 'https://iris.to/' + $state.href('identities.show',
    {type,
    value});
        }
      };
      $scope.getIdKey = function(id) {
        return encodeURIComponent(id.type) + ':' + encodeURIComponent(id.value);
      };
      $scope.defaultIndexKeyID = 'b8ByaYNBDCMLNdZqMdas5oUFLCxBf2VH3-NjUulDaTo.DVzINErRVs6m5tyjAux6fcNfndadcgZVN5hLSwYTCLc';
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
        list: []
      };
      $scope.msgs = {
        list: [],
        seen: {}
      };
      $scope.ipfs = new Ipfs({
        init: true,
        start: true,
        repo: 'ipfs7-iris'
      });
      $scope.capitalizeWords = function(s) {
        if (s && s.length) {
          return (s.trim().split(' ').map(function(word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          })).join(' ');
        } else {
          return s;
        }
      };
      $scope.copyToClipboard = function(text,
    event) {
        var originalStyleWidth,
    originalText,
    originalWidth;
        originalText = event.target.innerHTML;
        originalWidth = event.target.offsetWidth;
        originalStyleWidth = event.target.style.width;
        clipboard.copyText(text);
        if (event) {
          event.target.innerHTML = 'Copied';
          event.target.style.width = originalWidth + 'px';
          return setTimeout(function() {
            event.target.innerHTML = originalText;
            return event.target.style.width = originalStyleWidth;
          },
    2000);
        }
      };
      $scope.copyCurrentLocationToClipboard = function(event) {
        return $scope.copyToClipboard('https://iris.to' + $window.location.pathname + $window.location.hash,
    event);
      };
      $scope.search = function(query,
    limit) {
        var cursor,
    q,
    resultFound,
    searchKey,
    seen;
        if (!$scope.irisIndex) {
          return;
        }
        q = query || $scope.query.term;
        if (q && q.trim().indexOf('https://iris.to/#/') === 0) {
          $window.location.href = q.replace('https://iris.to/',
    '');
          $scope.query.term = '';
          return;
        }
        $scope.ids.activeKey = -1;
        $scope.ids.list = [];
        searchKey = (query || $scope.query.term || '').toLowerCase().trim();
        $scope.searchKey = searchKey;
        $scope.previousSearchKey = searchKey;
        limit = limit || 10;
        cursor = '';
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        seen = {};
        resultFound = function(i) {
          if (searchKey !== $scope.searchKey) {
            return;
          }
          i.gun.on(function(data) {
            i.data = data;
            return i.gun.get('linkTo').on(function(linkTo) {
              var s;
              if (i.linkTo || !linkTo) {
                return;
              }
              s = linkTo.type + linkTo.value;
              if (seen[s]) {
                return;
              }
              seen[s] = true;
              $scope.ids.list.push(i);
              return i.linkTo = linkTo;
            });
          });
          return $scope.setIdentityNames(i,
    true);
        };
        $scope.irisIndex.search(searchKey,
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
      $scope.onChatMessage = function(msg,
    info = {},
    chat) {
        var promise;
        if (!msg) {
          return;
        }
        if (!chat.seen) {
          chat.seen = {};
        }
        if (msg.hash && chat.seen[msg.hash]) {
          return;
        }
        chat.seen[msg.hash] = true;
        msg = msg.signedData || msg;
        msg.time = new Date(msg.time);
        if (chat.latest === 0 || msg.time > chat.latest.time) {
          chat.latest = msg;
        }
        promise = chat.myMsgsLastSeenTimePromise || (chat.chat && chat.chat.myMsgsLastSeenTimePromise);
        if (promise) {
          return promise.then(function(myMsgsLastSeenTime) {
            var shouldNotify;
            if (!$state.is('chats.show',
    {
              value: chat.idValue
            }) && !info.selfAuthored) {
              if (myMsgsLastSeenTime) {
                if (new Date(myMsgsLastSeenTime) < msg.time) {
                  chat.unreadMsgs++;
                }
              } else {
                chat.unreadMsgs++;
              }
            }
            shouldNotify = function() {
              if ($scope.localSettings.hasOwnProperty(chat.idValue) && $scope.localSettings[chat.idValue].muted) {
                return false;
              }
              if (info.selfAuthored) {
                return false;
              }
              if ($state.is('chats.show',
    {
                value: chat.idValue
              }) && !document.hidden) {
                return false;
              }
              if (myMsgsLastSeenTime && (new Date(myMsgsLastSeenTime) >= msg.time)) {
                return false;
              }
              return true;
            };
            if (shouldNotify()) {
              return NotificationService.create({
                type: 'chat',
                from: typeof msg.author === 'string' ? msg.author : '',
                text: msg.text,
                onClick: function() {
                  return $state.go('chats.show',
    {
                    type: chat.idType,
                    value: chat.idValue
                  });
                }
              });
            }
          });
        }
      };
      $scope.getPrivateChat = function(chat) {
        var o;
        o = new $window.irisLib.Chat({
          onMessage: function(msg,
    info) {
            return $scope.onChatMessage(msg,
    info,
    chat);
          },
          key: $scope.privateKey,
          gun: $scope.gun,
          participants: chat.idValue
        });
        o.myMsgsLastSeenTimePromise = new Promise(function(resolve) {
          o.getMyMsgsLastSeenTime(function(time) {
            return resolve(time);
          });
          return setTimeout(resolve,
    1000);
        });
        return o;
      };
      setIndex = function(i) {
        if (i.writable) {
          i.setOnline(true);
        }
        return i.ready.then(function() {
          var timeout;
          $scope.ids.list = [];
          $scope.msgs.list = [];
          $scope.msgs.seen = {};
          $scope.irisIndex = i;
          setTimeout(function() { // for some reason, dist version fails to show messages and identities without this
            $scope.search();
            return $scope.showMoreMsgs();
          },
    1000);
          $scope.trustedIndexes = [];
          $scope.chats = [];
          $scope.chatKeys = {};
          if (i.writable) {
            $scope.irisIndex.gun.user().get('iris').get('chatMessagesByUuid').map().on(function(node,
    key) {
              var chat;
              if ($scope.chatKeys['uuid' + key]) {
                return;
              }
              $scope.chatKeys['uuid' + key] = true;
              chat = {
                idValue: key,
                idType: 'uuid',
                latest: 0,
                unreadMsgs: 0
              };
              $scope.irisIndex.gun.user().get('iris').get('chatMessagesByUuid').get(key).get('msgsLastSeenTime').on(function(time) {
                return chat.myMsgsLastSeenTime = new Date(time);
              });
              return $scope.$apply(function() {
                var identity,
    onMessage;
                identity = $scope.irisIndex.get('uuid',
    key);
                $scope.setIdentityNames(identity);
                Object.assign(chat,
    {identity});
                $scope.chats.push(chat);
                onMessage = function(msg,
    info) {
                  return $scope.$apply(function() {
                    msg.getHash();
                    return $scope.onChatMessage(msg,
    info,
    chat);
                  });
                };
                return $scope.irisIndex.getChatMsgs(key,
    {
                  callback: onMessage
                });
              });
            });
            timeout = 0;
            $scope.irisIndex.getChats(function(key) {
              if ($scope.chatKeys['keyID' + key]) {
                return;
              }
              $scope.chatKeys['keyID' + key] = true;
              setTimeout(function() {
                return $scope.$apply(function() {
                  var chat,
    identity;
                  identity = $scope.irisIndex.get('keyID',
    key);
                  $scope.setIdentityNames(identity);
                  chat = {
                    idValue: key,
                    idType: 'keyID',
                    identity: identity,
                    latest: 0,
                    unreadMsgs: 0
                  };
                  chat.chat = $scope.getPrivateChat(chat);
                  return $scope.chats.push(chat);
                });
              },
    timeout); // TODO lol fix
              return timeout = timeout + 500;
            });
          }
          $scope.irisIndex.gun.get('trustedIndexes').open(function(r) {
            var k,
    results,
    v;
            results = [];
            for (k in r) {
              v = r[k];
              results.push($scope.trustedIndexes.push({
                index: k,
                attribute: new $window.irisLib.Attribute('keyID',
    k),
                identity: $scope.irisIndex.get('keyID',
    k)
              }));
            }
            return results;
          });
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    1000);
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    3000); // :---D
          setTimeout(function() {
            return $scope.$broadcast('rzSliderForceRender');
          },
    5000); // :---D
          console.log('Got index',
    $scope.irisIndex);
          $scope.viewpoint.identity = $scope.irisIndex.get($scope.viewpoint.type,
    $scope.viewpoint.value);
          $scope.setIdentityNames($scope.viewpoint.identity);
          return $scope.viewpoint.identity.gun.get('attrs').open(function(attrs) {
            $scope.viewpoint.attrs = attrs;
            return $scope.viewpoint.mostVerifiedAttributes = $window.irisLib.Identity.getMostVerifiedAttributes(attrs);
          });
        });
      };
      $scope.loadDefaultIndex = function() {
        var i;
        $scope.irisIndex = null;
        $scope.viewpoint = {
          type: 'keyID',
          value: $scope.defaultIndexKeyID
        };
        i = new $window.irisLib.Index({
          gun: $scope.gun,
          pubKey: $scope.defaultIndexKeyID,
          ipfs: $scope.ipfs
        });
        return setIndex(i);
      };
      $scope.loginWithKey = function(privateKeySerialized,
    self,
    previouslyExisting) {
        var i,
    keyID;
        $scope.irisIndex = null;
        $scope.loggingIn = true;
        $scope.privateKey = $window.irisLib.Key.fromString(privateKeySerialized);
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        if ($scope.readQRModal) {
          $scope.readQRModal.close();
        }
        localStorageService.set('irisKey',
    privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $window.irisLib.Key.getId($scope.privateKey)
        };
        $scope.authentication.user.url = $scope.getIdUrl('keyID',
    $scope.authentication.user.idValue);
        keyID = $window.irisLib.Key.getId($scope.privateKey);
        $scope.viewpoint = {
          type: 'keyID',
          value: keyID
        };
        $scope.ids.list = [];
        $scope.msgs.list = [];
        $scope.msgs.seen = {};
        i = new $window.irisLib.Index({
          gun: $scope.gun,
          keypair: $scope.privateKey,
          self,
          ipfs: $scope.ipfs,
          debug: true
        });
        setIndex(i);
        return i.ready.then(function() {
          var startAt;
          $scope.loggingIn = false;
          $scope.authentication.identity = $scope.irisIndex.get('keyID',
    keyID);
          $scope.authentication.identity.gun.get('attrs').open(function(val,
    key,
    msg,
    eve) {
            var mva;
            mva = $window.irisLib.Identity.getMostVerifiedAttributes(val);
            $scope.authentication.identity.mva = mva;
            if (mva.profilePhoto) {
              return eve.off();
            }
          });
          startAt = new Date();
          $scope.authentication.identity.gun.get('received').map().once(function(m) {
            if (m.pubKey === $scope.viewpoint.value) {
              return;
            }
            console.log('you got a msg');
            return $window.irisLib.Message.fromSig(m).then(function(msg) {
              var author;
              if (new Date(msg.signedData.timestamp) > startAt) {
                author = msg.getAuthor($scope.irisIndex);
                return $scope.setIdentityNames(author).then(function(name) {
                  return NotificationService.create({
                    type: 'post',
                    from: name,
                    text: `${name} public messaged you!`,
                    onClick: function() {
                      return $state.go('identities.show',
    {
                        type: $scope.authentication.user.idType,
                        value: $scope.authentication.user.idValue
                      });
                    }
                  });
                });
              }
            });
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
      privateKey = localStorageService.get('irisKey') || localStorageService.get('identifiKey');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      } else {
        $scope.loadDefaultIndex();
      }
      $scope.openChatModal = function() {
        return $scope.openModal('chatModal',
    {
          templateUrl: 'app/identities/chat.modal.html',
          size: 'md'
        });
      };
      $scope.openVideoChatModal = function() {
        return $scope.openModal('videoChatModal',
    {
          templateUrl: 'app/identities/video.modal.html',
          size: 'md'
        });
      };
      $scope.openReadQRModal = function() {
        return $scope.openModal('readQRModal',
    {
          templateUrl: 'app/identities/readqr.modal.html',
          size: 'md'
        });
      };
      $scope.updateIpfsPeers = function() {
        return $scope.ipfs.swarm.peers(function(err,
    peerInfos) {
          if (err) {
            return console.error('failed to fetch ipfs peers',
    err);
          } else {
            return $scope.$apply(function() {
              if (Array.isArray(peerInfos)) {
                return $scope.ipfsPeers = peerInfos;
              }
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
      $scope.saveLocalSetting = function(key,
    value) {
        $scope.localSettings[key] = value;
        return localStorageService.set('localSettings',
    $scope.localSettings);
      };
      $scope.closeProfileUploadNotification = function() {
        return $scope.saveLocalSetting('profileUploadNotificationClosed',
    true);
      };
      $scope.openProfilePhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadProfilePhoto,
    'Upload profile photo',
    true);
      };
      $scope.uploadProfilePhoto = function(blob) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          recipient = {
            profilePhoto: '/ipfs/' + files[0].path
          };
          if ($state.is('identities.show')) {
            recipient[$stateParams.type] = $stateParams.value;
          } else {
            recipient.keyID = $scope.authentication.user.idValue;
            $scope.closeProfileUploadNotification();
          }
          return $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.hideProfilePhoto = true; // There's a weird bug where the profile identicon doesn't update
            $scope.irisIndex.addMessage(m).then(function() {
              $scope.hideProfilePhoto = false;
              if (!$state.is('identities.show')) {
                return $state.go('identities.show',
    {
                  type: $scope.authentication.user.idType,
                  value: $scope.authentication.user.idValue
                });
              }
            });
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Iris';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri,
    options = {}) {
        return new Promise(function(resolve) {
          var go;
          go = function() {
            return $scope.ipfs.cat(uri).then(function(file) {
              file = $scope.ipfs.types.Buffer(file);
              if (options.getJson) {
                file = JSON.parse(file.toString());
              }
              if (options.base64type) {
                file = 'data:' + options.base64type + ';base64,' + file.toString('base64');
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
      $scope.$watch('newMessage.rating',
    function(rating) {
        var alpha;
        if (rating > 0) {
          alpha = (rating - 0.5) / 3 / 1.25 + 0.2;
          return $scope.newMessage.style = {
            'border-color': 'rgba(223,240,216,' + alpha + ')'
          };
        } else if (rating < 0) {
          alpha = (rating + 0.5) / -3 / 1.25 + 0.2;
          return $scope.newMessage.style = {
            'border-color': 'rgba(242,222,222,' + alpha + ')'
          };
        } else {
          return $scope.newMessage.style = {
            'border-color': '#fcf8e3'
          };
        }
      });
      $scope.resetMsg = function() {
        $scope.newMessage = {
          rating: 1,
          comment: '',
          files: []
        };
        return $scope.newVerification = {
          type: '',
          value: ''
        };
      };
      $scope.resetMsg();
      $scope.vote = function(msg,
    vote) {
        console.log('vote added');
        return $scope.createMessage(null,
    {
          type: 'vote',
          replyTo: msg.getHash(),
          vote
        });
      };
      // Create new Message
      $scope.createMessage = function(event,
    msg,
    options = {}) {
        var addFile,
    file,
    fileUploads,
    j,
    len,
    ref;
        $scope.addingMessage = true;
        if (event) {
          event.stopPropagation();
        }
        if (msg.pollOptions === false) {
          delete msg.pollOptions;
        }
        fileUploads = [];
        if (options.files) { // upload to ipfs
          msg.attachments = [];
          addFile = function(file) {
            return $scope.uploadFile(file).then(function(res) {
              if (res && res.length && res.length > 0 && res[0].path) {
                return msg.attachments.push({
                  uri: '/ipfs/' + res[0].path,
                  size: file.size,
                  type: file.type,
                  name: file.name
                });
              }
            });
          };
          ref = options.files;
          for (j = 0, len = ref.length; j < len; j++) {
            file = ref[j];
            fileUploads.push(addFile(file));
          }
        }
        return Promise.all(fileUploads).then(function() {
          var message;
          console.log('msg.attachments',
    msg.attachments);
          // Create new Message object
          message = null;
          if (msg.files) {
            delete msg.files;
          }
          if ($state.is('identities.show')) {
            msg.recipient = msg.recipient || {};
            if (options.verifiedAttr && $stateParams.type === options.verifiedAttr.type) {
              msg.recipient[$stateParams.type] = [$stateParams.value,
    options.verifiedAttr.value];
            } else {
              msg.recipient[$stateParams.type] = $stateParams.value;
              if (options.verifiedAttr) {
                msg.recipient[options.verifiedAttr.type] = options.verifiedAttr.value;
              }
            }
          }
          if (msg.type === 'rating') {
            msg.maxRating |= 3;
            msg.minRating |= -3;
            message = $window.irisLib.Message.createRating(msg,
    $scope.privateKey);
          } else if (msg.type === 'verification') {
            message = $window.irisLib.Message.createVerification(msg,
    $scope.privateKey);
          } else {
            message = $window.irisLib.Message.create(msg,
    $scope.privateKey);
          }
          return message.then(function(m) {
            $scope.irisIndex.addMessage(m);
            $scope.msgs.seen[m.getHash()] = true;
            return $scope.processMessages([m]);
          }).then(function(messages) {
            var ref1;
            $scope.msgs.list.push(messages[0]);
            if (options.addTo && !options.addTo.seen[messages[0].getHash()]) {
              options.addTo.list.push(messages[0]);
              options.addTo.seen[messages[0].getHash()] = true;
            }
            if ((ref1 = $scope.filters.type) !== msg.type && ref1 !== null) {
              $scope.filters.type = msg.type;
            }
            $scope.resetMsg(); // why not resetting uploaded files? D:
            if (options.files) {
              options.files = [];
            }
            $scope.addingMessage = false;
            return message;
          }).catch(function(e) {
            console.error(e);
            $scope.error = e;
            $scope.addingMessage = false;
            return message;
          });
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.maxDistance = -1; // because the user doesn't have a trust index yet
      };
      $scope.openModal = function(modalName,
    options) {
        options = Object.assign({
          size: 'md',
          animation: true,
          scope: $scope
        },
    options);
        $scope[modalName] = $uibModal.open(options);
        $scope[modalName].result.then((function() {}),
    (function() {})); // avoid backdrop rejection console error
        $scope[modalName].rendered.then(function() {
          document.activeElement.blur();
          if (options.focusTo) {
            return focus(options.focusTo);
          }
        });
        return $transitions.onStart({},
    function() {
          return $scope[modalName].close();
        });
      };
      $scope.openLoginModal = function() {
        return $scope.openModal('loginModal',
    {
          templateUrl: 'app/main/login.modal.html',
          focusTo: 'newUser'
        });
      };
      $scope.openUploadModal = function(callback,
    modalButtonText,
    squarify) {
        $scope.uploadModalCallback = callback;
        $scope.modalButtonText = modalButtonText || 'Upload';
        $scope.squarify = squarify;
        return $scope.openModal('uploadModal',
    {
          templateUrl: 'app/identities/upload.modal.html'
        });
      };
      $scope.msgs.list = [];
      $scope.msgs.seen = {};
      $scope.filteredMsgs = [];
      $scope.showMoreMsgs = function(cursor) {
        var filter,
    found,
    limit,
    /*
    if $scope.filters.type == null
      filter = (m) ->
        r = m.signedData.type not in ['verification', 'unverification']
        console.log 'filterin', r
        return r
    else
      t = $scope.filters.type.split(':')[0]
      filter = (m) ->
        r = m.signedData.type == t
        console.log 'filterin', r
        return r
    */
    resultFound;
        limit = 20; // 10
        if (cursor === void 0 && $scope.msgs.last) {
          cursor = $scope.msgs.last;
        }
        console.log('cursor',
    cursor);
        found = 0;
        $scope.loadingMsgs = true;
        filter = false;
        resultFound = function(msg) {
          found += 1;
          if (found >= limit) {
            $scope.loadingMsgs = false;
          }
          if ($scope.msgs.seen[msg.getHash()]) {
            return;
          }
          if (!$scope.msgs.last || msg.signedData.timestamp < $scope.msgs.last) {
            $scope.msgs.last = msg.signedData.timestamp;
          }
          $scope.msgs.seen[msg.getHash()] = true;
          $scope.processMessages([msg]);
          return $scope.$apply(function() {
            return $scope.msgs.list.push(msg);
          });
        };
        $scope.filters.limit += limit;
        if ($scope.filters.limit > $scope.filteredMsgs.length) {
          return $scope.irisIndex.getMessagesByTimestamp(resultFound,
    void 0,
    cursor);
        }
      };
      $scope.uploadFile = function(blob) {
        return new Promise(function(resolve,
    reject) {
          var fileReader;
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            var buffer;
            buffer = $scope.ipfs.types.Buffer.from(event.target.result);
            return $scope.ipfs.add(buffer,
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
        var self;
        if (name.indexOf('{') !== -1 || name.indexOf('}') !== -1) { // prevent accidental private key paste
          return;
        }
        name = name.trim();
        $scope.creatingUser = true;
        self = {name};
        return $window.irisLib.Key.generate().then(function(key) {
          $scope.privateKey = key;
          $scope.privateKeySerialized = $window.irisLib.Key.toString($scope.privateKey);
          self.keyID = $window.irisLib.Key.getId($scope.privateKey);
          return $scope.loginWithKey($scope.privateKeySerialized,
    self);
        }).then(function(msg) {
          $scope.creatingUser = false;
          return $scope.createMessage(void 0,
    {
            type: 'rating',
            rating: 1,
            text: 'Trusted by default as a web of trust entry point.',
            recipient: {
              keyID: $scope.defaultIndexKeyID,
              name: 'Iris'
            }
          });
        }).catch(function(e) {
          console.error('failed to create user:',
    e);
          return $scope.creatingUser = false;
        });
      };
      $scope.generateKey = function() {
        return $window.irisLib.Key.generate().then(function(key) {
          return $scope.$apply(function() {
            $scope.privateKey = key;
            return $scope.privateKeySerialized = $window.irisLib.Key.toString($scope.privateKey);
          });
        });
      };
      $scope.download = function(filename,
    data,
    type,
    charset = 'utf-8',
    href) {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = href || `data:${type};charset=${charset},${encodeURI(data)}`;
        hiddenElement.target = '_blank';
        hiddenElement.download = filename;
        return hiddenElement.click();
      };
      $scope.downloadText = function(text) {
        return $scope.download('iris_private_key.txt',
    text,
    'text/csv',
    'utf-8');
      };
      $scope.openLogoutModal = function() {
        return $scope.openModal('logoutModal',
    {
          templateUrl: 'app/main/logout.modal.html'
        });
      };
      $scope.logout = function() {
        $scope.irisIndex.setOnline(false);
        $scope.filters.maxDistance = 0;
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
      $scope.msgFilter = function(msg,
    index,
    array) {
        var data,
    neutralRating,
    ref;
        data = msg.signedData;
        if (msg.signedData.replyTo) {
          return false;
        }
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
          } else if ($scope.filters.type === 'verification') {
            return (ref = data.type) === 'verification' || ref === 'unverification';
          } else if (data.type !== $scope.filters.type) {
            return false;
          }
        }
        if ($scope.filters.maxDistance > -1) {
          if (typeof msg.authorTrustDistance !== 'number') {
            return false;
          }
          if ($scope.filters.maxDistance > 0 && msg.authorTrustDistance > $scope.filters.maxDistance) {
            return false;
          }
          if ($scope.filters.maxDistance === 0 && msg.authorTrustDistance === 99) {
            return false;
          }
        }
        return true;
      };
      $scope.setMsgRawData = function(msg) {
        var showRawData;
        showRawData = {
          hash: msg.hash,
          data: msg.signedData,
          priority: msg.priority,
          jws: msg.jws
        };
        return msg.strData = JSON.stringify(showRawData,
    void 0,
    2);
      };
      $scope.shareMessage = function(msg,
    comment) {
        $scope.createMessage(null,
    {
          type: 'post',
          sharedMsg: msg.getHash(),
          comment
        }).then(function(r) {
          msg.shares = msg.shares || {};
          msg.shares[r.getHash()] = r;
          msg.sharesArr = msg.sharesArr || [];
          return msg.sharesArr.push(r);
        });
        return $scope.shareModal.close();
      };
      $scope.msgUtils = {
        like: function(msg) {
          if (msg.liked) {
            msg.liked = false;
            msg.likes = msg.likes ? msg.likes - 1 : 0;
            return $scope.irisIndex.setReaction(msg,
    null);
          } else {
            msg.liked = true;
            msg.likes = msg.likes ? msg.likes + 1 : 1;
            return $scope.irisIndex.setReaction(msg,
    'like');
          }
        },
        share: function(msg) {
          $scope.message = msg;
          return $scope.openModal('shareModal',
    {
            templateUrl: 'app/messages/share.modal.html',
            size: 'md'
          });
        },
        replyTo: function(msg,
    reply) {
          return $scope.createMessage(null,
    {
            type: 'post',
            replyTo: msg.getHash(),
            comment: reply
          }).then(function(r) {
            msg.replies = msg.replies || {};
            msg.replies[r.getHash()] = r;
            msg.repliesArr = msg.repliesArr || [];
            return msg.repliesArr.push(r);
          });
        }
      };
      $scope.openMessage = function(event,
    message,
    size) {
        var t;
        if (event) {
          event.stopPropagation();
        }
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        // TODO: check sig
        if (message.signedData.recipient) {
          $scope.message.recipient = $scope.message.getRecipient($scope.irisIndex);
          $scope.message.recipient.gun.get('attrs').open(function(d) {
            var mva;
            mva = $window.irisLib.Identity.getMostVerifiedAttributes(d);
            if (mva.name) {
              return $scope.$apply(function() {
                return $scope.message.recipient_name = mva.name.attribute.value;
              });
            } else if (mva.nickname) {
              return $scope.$apply(function() {
                return $scope.message.recipient_name = mva.nickname.attribute.value;
              });
            }
          });
        }
        $scope.message.signerKeyID = $scope.message.getSignerKeyID();
        $scope.message.verifiedBy = $scope.irisIndex.get('keyID',
    $scope.message.signerKeyID);
        $scope.message.verifiedByAttr = new $window.irisLib.Attribute('keyID',
    $scope.message.signerKeyID);
        return $scope.openModal('chatModal',
    {
          templateUrl: 'app/messages/show.modal.html',
          size
        });
      };
      if (!$scope.filters) {
        $scope.filters = Object.assign({},
    config.defaultFilters);
      }
      $scope.isCollapsed = false;
      // $scope.menu = Menus.getMenu('topbar')
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages,
    msgOptions = {},
    options = {}) {
        angular.forEach(messages,
    function(msg,
    key) {
          var k,
    v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          msg.author = msg.getAuthor($scope.irisIndex);
          return msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
        });
        return messages;
      };
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
      // should be moved to iris-lib?
      $scope.setIdentityNames = function(i,
    htmlSafe,
    setTitle) {
        i.wellVerified = false;
        return new Promise(function(resolve) {
          return i.gun.get('attrs').open(function(attrs) {
            return $scope.$apply(function() {
              var a,
    mva,
    ref;
              mva = $window.irisLib.Identity.getMostVerifiedAttributes(attrs);
              if (mva.name) {
                i.primaryName = mva.name.attribute.value;
                i.hasProperName = true;
                if (mva.name.wellVerified) {
                  i.wellVerified = true;
                }
              } else if (mva.nickname) {
                i.primaryName = mva.nickname.attribute.value;
                i.hasProperName = true;
              } else {
                a = Object.values(attrs)[0];
                i.primaryName = a.value;
                if ((ref = a.type) === 'keyID' || ref === 'uuid') {
                  i.primaryName = i.primaryName.slice(0,
    6) + '...';
                }
              }
              if (i.primaryName) {
                if (mva.nickname && mva.nickname.attribute.value !== i.primaryName) {
                  i.nickname = mva.nickname.attribute.value;
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
                $scope.setPageTitle(i.primaryName);
              }
              return resolve(i.primaryName);
            });
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
              $scope.ids.activeKey--;
              id = $scope.ids.activeKey > -1 ? 'result' + $scope.ids.activeKey : 'createIdRow';
              return document.getElementById(id).scrollIntoView();
            }
            break;
          case 40:
            event.preventDefault();
            if (($scope.ids.activeKey < $scope.ids.list.length - 1) && $scope.ids.activeKey < $scope.filters.limit) {
              $scope.ids.activeKey++;
            }
            return document.getElementById('result' + $scope.ids.activeKey).scrollIntoView();
          case 13:
            event.preventDefault();
            if ($scope.ids.activeKey === -1) {
              return $state.go('identities.create');
            } else {
              return document.getElementById('result' + $scope.ids.activeKey).click();
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
          type: item.linkTo.type,
          value: item.linkTo.value
        });
        return $scope.query.term = '';
      };
      $scope.addGunPeer = function(url) {
        return $scope.gun.opt({
          peers: [url]
        });
      };
      $scope.removeGunPeer = function(url) {
        var peer;
        peer = $scope.gun._.opt.peers[url];
        peer.url = peer.id = null; // this prevents reconnecting to URL
        peer.wire.close(); // if websocket interface
        return delete $scope.gun._.opt.peers[url];
      };
      $scope.addIpfsPeer = function(url) {
        $scope.ipfs.bootstrap.add(url);
        return $scope.ipfs.swarm.connect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
      $scope.addDefaultIpfsPeers = function() {
        return $scope.ipfs.bootstrap.add('',
    {
          default: true
        }).then(function() { // TODO: errors
          return $scope.updateIpfsPeers();
        });
      };
      $scope.removeIpfsPeer = function(url) {
        $scope.ipfs.bootstrap.rm(url);
        return $scope.ipfs.swarm.disconnect(url).then(function() {
          return $scope.updateIpfsPeers();
        });
      };
      $scope.onVideoError = function(error) {
        return console.error('video error',
    error);
      };
      $scope.muteChat = function(key) {
        var muted;
        muted = !($scope.localSettings.hasOwnProperty(key) && $scope.localSettings[key].muted);
        $scope.saveLocalSetting(key,
    {muted});
        return console.log($scope.localSettings);
      };
      $scope.desktopNotificationsAvailable = !!window.Notification;
      $scope.notificationsPermitted = window.Notification && Notification.permission === 'granted';
      NotificationService.desktopNotificationsDisabled = $scope.localSettings.desktopNotificationsDisabled;
      NotificationService.audioNotificationsDisabled = $scope.localSettings.audioNotificationsDisabled;
      $scope.setAudioNotificationsDisabled = function(disabled) {
        $scope.saveLocalSetting('audioNotificationsDisabled',
    disabled);
        return NotificationService.audioNotificationsDisabled = disabled;
      };
      return $scope.setDesktopNotificationsDisabled = function(disabled) {
        $scope.saveLocalSetting('desktopNotificationsDisabled',
    disabled);
        if (disabled) {
          $scope.saveLocalSetting('desktopNotificationsNotNow',
    false);
        }
        NotificationService.desktopNotificationsDisabled = disabled;
        if (!disabled) {
          if (window.Notification) {
            return Notification.requestPermission(function(status) {
              return $scope.$apply(function() {
                $scope.notificationsPermitted = status === 'granted';
                return $scope.enableNotificationsFailed = !$scope.notificationsPermitted;
              });
            });
          } else {
            return $scope.enableNotificationsFailed = true;
          }
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsZ0JBQXpDLEVBQTJEO0lBQ3pELFFBRHlEO0lBRXpELFlBRnlEO0lBR3pELFdBSHlEO0lBSXpELE9BSnlEO0lBS3pELFFBTHlEO0lBTXpELFFBTnlEO0lBT3pELHFCQVB5RDtJQVF6RCxXQVJ5RDtJQVN6RCxXQVR5RDtJQVV6RCxTQVZ5RDtJQVd6RCxjQVh5RDtJQVl6RCxjQVp5RDtJQWF6RCxJQWJ5RDtJQWN6RCxPQWR5RDtJQWV6RCxxQkFmeUQ7SUFnQnpELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLFNBRGhDO0lBQzJDLE9BRDNDO0lBQ29ELFlBRHBEO0lBRUEsWUFGQTtJQUVjLEVBRmQ7SUFFa0IsS0FGbEI7SUFFeUIsbUJBRnpCLENBQUE7QUFHRSxVQUFBLEdBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsR0FBQSxHQUNFO1FBQUEsS0FBQSxFQUFPLEVBQVA7UUFDQSxZQUFBLEVBQWM7TUFEZDtNQUVGLElBQUEsQ0FBQSxDQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBakIsS0FBNkIsV0FBN0IsSUFBNkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFqQixLQUF5QixNQUE3RSxDQUFBO1FBQ0UsR0FBRyxDQUFDLEtBQUosR0FBWTtVQUFDLGtDQUFEO1VBQXFDLGtDQUFyQztVQURkOztNQUVBLElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFqQixLQUE2QixRQUFoQztRQUNFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBVixDQUFlLDJC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LE1BQVAsQ0FBYyxRQUFBLENBQUEsQ0FBQTtnQkFDWixNQUFNLENBQUMsc0JBQVAsR0FBZ0MsTUFBQSxLQUFVO3VCQUMxQyxNQUFNLENBQUMseUJBQVAsR0FBbUMsQ0FBQyxNQUFNLENBQUM7Y0FGL0IsQ0FBZDtZQUQ2QixDQUEvQixFQURGO1dBQUEsTUFBQTttQkFNRSxNQUFNLENBQUMseUJBQVAsR0FBbUMsS0FOckM7V0FERjs7TUFKdUM7SUFweUIzQyxDQWhCeUQ7R0FBM0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJykuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICdjb25maWcnLFxuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJ2NsaXBib2FyZCdcbiAgJyR1aWJNb2RhbCdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckdHJhbnNpdGlvbnMnXG4gICckcSdcbiAgJ2ZvY3VzJ1xuICAnTm90aWZpY2F0aW9uU2VydmljZSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsIGNsaXBib2FyZCwgJHVpYk1vZGFsLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsXG4gICR0cmFuc2l0aW9ucywgJHEsIGZvY3VzLCBOb3RpZmljYXRpb25TZXJ2aWNlKSAtPlxuICAgIG9wdCA9XG4gICAgICBwZWVyczogW11cbiAgICAgIGxvY2FsU3RvcmFnZTogZmFsc2VcbiAgICB1bmxlc3MgJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PSAnbG9jYWxob3N0JyBhbmQgJHdpbmRvdy5sb2NhdGlvbi5wb3J0ID09ICczMDAwJ1xuICAgICAgb3B0LnBlZXJzID0gWydodHRwczovL2d1bi11cy5oZXJva3VhcHAuY29tL2d1bicsICdodHRwczovL2d1bi1ldS5oZXJva3VhcHAuY29tL2d1biddICMgJ2h0dHBzOi8vZ3VubWVldGluZ3NlcnZlci5oZXJva3VhcHAuY29tL2d1bidcbiAgICBpZiAkd2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9IFwiaHR0cHM6XCJcbiAgICAgIG9wdC5wZWVycy5wdXNoKCdodHRwOi8vbG9jYWxob3N0Ojg3NjUvZ3VuJylcbiAgICAkc2NvcGUuaXNFbGVjdHJvbiA9ICh1c2VyQWdlbnQuaW5kZXhPZignIGVsZWN0cm9uLycpID4gLTEpXG4gICAgb3B0LnN0b3JlID0gUmluZGV4ZWREQihvcHQpIHVubGVzcyAkc2NvcGUuaXNFbGVjdHJvblxuICAgICRzY29wZS5ndW4gPSAkd2luZG93LmlyaXNHdW4gPSBuZXcgR3VuKG9wdClcblxuICAgICMgVE9ETzogbW92ZSBldmVyeXRoaW5nIHRvIG1haW4gY29udHJvbGxlcj9cbiAgICAjIHNldCBhdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9ICMgQXV0aGVudGljYXRpb25cblxuICAgICRzY29wZS5vcGVuVGltZSA9IG5ldyBEYXRlKClcbiAgICAkc2NvcGUubm90aWZpY2F0aW9uU2VydmljZSA9IE5vdGlmaWNhdGlvblNlcnZpY2VcblxuICAgICRzY29wZS50cnVzdERpc3RhbmNlQ29tcGFyYXRvciA9IChhLCBiKSAtPlxuICAgICAgcmV0dXJuIDEgaWYgYS50eXBlICE9ICdudW1iZXInXG4gICAgICByZXR1cm4gLTEgaWYgYi50eXBlICE9ICdudW1iZXInXG4gICAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWVcblxuICAgICRzY29wZS5nZXRJZFVybCA9ICh0eXBlLCB2YWx1ZSkgLT5cbiAgICAgIGlmICR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignLicpID4gLTEgIyBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbG9jYWxob3N0IC8gY2hyb21lIHBsdWdpbiB1cmkgYW5kIEROUyBuYW1lXG4gICAgICAgIHJldHVybiAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGUsIHZhbHVlfSwge2Fic29sdXRlOiB0cnVlfSlcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuICdodHRwczovL2lyaXMudG8vJyArICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9KVxuXG4gICAgJHNjb3BlLmdldElkS2V5ID0gKGlkKSAtPlxuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZC50eXBlKSArICc6JyArIGVuY29kZVVSSUNvbXBvbmVudChpZC52YWx1ZSlcblxuICAgICRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRCA9ICdiOEJ5YVlOQkRDTUxOZFpxTWRhczVvVUZMQ3hCZjJWSDMtTmpVdWxEYVRvLkRWeklORXJSVnM2bTV0eWpBdXg2ZmNOZm5kYWRjZ1pWTjVoTFN3WVRDTGMnXG4gICAgJHNjb3BlLnF1ZXJ5ID0ge31cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gJydcbiAgICAkc2NvcGUuaWRzID1cbiAgICAgIGxpc3Q6IFtdXG4gICAgJHNjb3BlLm1zZ3MgPVxuICAgICAgbGlzdDogW11cbiAgICAgIHNlZW46IHt9XG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgc3RhcnQ6IHRydWVcbiAgICAgIHJlcG86ICdpcGZzNy1pcmlzJ1xuICAgIClcblxuICAgICRzY29wZS5jYXBpdGFsaXplV29yZHMgPSAocykgLT5cbiAgICAgIGlmIHMgYW5kIHMubGVuZ3RoXG4gICAgICAgIHJldHVybiAocy50cmltKCkuc3BsaXQoJyAnKS5tYXAgKHdvcmQpIC0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmRbMS4uLTFdLnRvTG93ZXJDYXNlKCkpLmpvaW4gJyAnXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBzXG5cbiAgICAkc2NvcGUuY29weVRvQ2xpcGJvYXJkID0gKHRleHQsIGV2ZW50KSAtPlxuICAgICAgb3JpZ2luYWxUZXh0ID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxuICAgICAgb3JpZ2luYWxXaWR0aCA9IGV2ZW50LnRhcmdldC5vZmZzZXRXaWR0aFxuICAgICAgb3JpZ2luYWxTdHlsZVdpZHRoID0gZXZlbnQudGFyZ2V0LnN0eWxlLndpZHRoXG4gICAgICBjbGlwYm9hcmQuY29weVRleHQgdGV4dFxuICAgICAgaWYgZXZlbnRcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9ICdDb3BpZWQnXG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS53aWR0aCA9IG9yaWdpbmFsV2lkdGggKyAncHgnXG4gICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICBldmVudC50YXJnZXQuaW5uZXJIVE1MID0gb3JpZ2luYWxUZXh0XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLndpZHRoID0gb3JpZ2luYWxTdHlsZVdpZHRoXG4gICAgICAgICwgMjAwMFxuXG4gICAgJHNjb3BlLmNvcHlDdXJyZW50TG9jYXRpb25Ub0NsaXBib2FyZCA9IChldmVudCkgLT5cbiAgICAgICRzY29wZS5jb3B5VG9DbGlwYm9hcmQgJ2h0dHBzOi8vaXJpcy50bycgKyAkd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJHdpbmRvdy5sb2NhdGlvbi5oYXNoLCBldmVudFxuXG4gICAgJHNjb3BlLnNlYXJjaCA9IChxdWVyeSwgbGltaXQpIC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pcmlzSW5kZXhcbiAgICAgIHEgPSBxdWVyeSBvciAkc2NvcGUucXVlcnkudGVybVxuICAgICAgaWYgcSBhbmQgcS50cmltKCkuaW5kZXhPZignaHR0cHM6Ly9pcmlzLnRvLyMvJykgPT0gMFxuICAgICAgICAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSBxLnJlcGxhY2UoJ2h0dHBzOi8vaXJpcy50by8nLCAnJylcbiAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICByZXR1cm5cbiAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5ID0gLTFcbiAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICBzZWFyY2hLZXkgPSAocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG4gICAgICAkc2NvcGUuc2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgMTBcbiAgICAgIGN1cnNvciA9ICcnXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG4gICAgICBzZWVuID0ge31cblxuICAgICAgcmVzdWx0Rm91bmQgPSAoaSkgLT5cbiAgICAgICAgcmV0dXJuIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUuc2VhcmNoS2V5XG4gICAgICAgIGkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgIGkuZGF0YSA9IGRhdGFcbiAgICAgICAgICBpLmd1bi5nZXQoJ2xpbmtUbycpLm9uIChsaW5rVG8pIC0+XG4gICAgICAgICAgICByZXR1cm4gaWYgaS5saW5rVG8gb3IgIWxpbmtUb1xuICAgICAgICAgICAgcyA9IGxpbmtUby50eXBlICsgbGlua1RvLnZhbHVlXG4gICAgICAgICAgICByZXR1cm4gaWYgc2VlbltzXVxuICAgICAgICAgICAgc2VlbltzXSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdC5wdXNoIGlcbiAgICAgICAgICAgIGkubGlua1RvID0gbGlua1RvXG4gICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGksIHRydWUpXG5cbiAgICAgICRzY29wZS5pcmlzSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCByZXN1bHRGb3VuZCwgbGltaXQsIGN1cnNvcilcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT4gIyBUT0RPOiB1aWItdHlwZWFoZWFkIGlzIGxpbWl0ZWQsIGJ1dCBzb21ldGhpbmcgYmV0dGVyIHBsc1xuICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgcmVzb2x2ZSgkc2NvcGUuaWRzLmxpc3QpXG4gICAgICAgICwgMTAwMFxuXG4gICAgJHNjb3BlLm9uQ2hhdE1lc3NhZ2UgPSAobXNnLCBpbmZvID0ge30sIGNoYXQpIC0+XG4gICAgICByZXR1cm4gdW5sZXNzIG1zZ1xuICAgICAgY2hhdC5zZWVuID0ge30gdW5sZXNzIGNoYXQuc2VlblxuICAgICAgcmV0dXJuIGlmIG1zZy5oYXNoIGFuZCBjaGF0LnNlZW5bbXNnLmhhc2hdXG4gICAgICBjaGF0LnNlZW5bbXNnLmhhc2hdID0gdHJ1ZVxuICAgICAgbXNnID0gbXNnLnNpZ25lZERhdGEgb3IgbXNnXG4gICAgICBtc2cudGltZSA9IG5ldyBEYXRlKG1zZy50aW1lKVxuICAgICAgY2hhdC5sYXRlc3QgPSBtc2cgaWYgKGNoYXQubGF0ZXN0ID09IDAgb3IgbXNnLnRpbWUgPiBjaGF0LmxhdGVzdC50aW1lKVxuXG4gICAgICBwcm9taXNlID0gY2hhdC5teU1zZ3NMYXN0U2VlblRpbWVQcm9taXNlIG9yIChjaGF0LmNoYXQgYW5kIGNoYXQuY2hhdC5teU1zZ3NMYXN0U2VlblRpbWVQcm9taXNlKVxuICAgICAgaWYgcHJvbWlzZVxuICAgICAgICBwcm9taXNlLnRoZW4gKG15TXNnc0xhc3RTZWVuVGltZSkgLT5cbiAgICAgICAgICBpZiAhJHN0YXRlLmlzKCdjaGF0cy5zaG93Jywge3ZhbHVlOmNoYXQuaWRWYWx1ZX0pIGFuZCAhaW5mby5zZWxmQXV0aG9yZWRcbiAgICAgICAgICAgIGlmIG15TXNnc0xhc3RTZWVuVGltZVxuICAgICAgICAgICAgICBpZiAobmV3IERhdGUobXlNc2dzTGFzdFNlZW5UaW1lKSA8IG1zZy50aW1lKVxuICAgICAgICAgICAgICAgIGNoYXQudW5yZWFkTXNncysrXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNoYXQudW5yZWFkTXNncysrXG5cbiAgICAgICAgICBzaG91bGROb3RpZnkgPSAoKSAtPlxuICAgICAgICAgICAgaWYgJHNjb3BlLmxvY2FsU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoY2hhdC5pZFZhbHVlKSBhbmQgJHNjb3BlLmxvY2FsU2V0dGluZ3NbY2hhdC5pZFZhbHVlXS5tdXRlZFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGlmIGluZm8uc2VsZkF1dGhvcmVkXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgaWYgJHN0YXRlLmlzKCdjaGF0cy5zaG93Jywge3ZhbHVlOmNoYXQuaWRWYWx1ZX0pIGFuZCBub3QgZG9jdW1lbnQuaGlkZGVuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgaWYgbXlNc2dzTGFzdFNlZW5UaW1lIGFuZCAobmV3IERhdGUobXlNc2dzTGFzdFNlZW5UaW1lKSA+PSBtc2cudGltZSlcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGlmIHNob3VsZE5vdGlmeSgpXG4gICAgICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLmNyZWF0ZVxuICAgICAgICAgICAgICB0eXBlOiAnY2hhdCdcbiAgICAgICAgICAgICAgZnJvbTogaWYgdHlwZW9mIG1zZy5hdXRob3IgPT0gJ3N0cmluZycgdGhlbiBtc2cuYXV0aG9yIGVsc2UgJydcbiAgICAgICAgICAgICAgdGV4dDogbXNnLnRleHRcbiAgICAgICAgICAgICAgb25DbGljazogKCkgLT5cbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28gJ2NoYXRzLnNob3cnLCB7IHR5cGU6IGNoYXQuaWRUeXBlLCB2YWx1ZTogY2hhdC5pZFZhbHVlIH1cblxuICAgICRzY29wZS5nZXRQcml2YXRlQ2hhdCA9IChjaGF0KSAtPlxuICAgICAgbyA9IG5ldyAkd2luZG93LmlyaXNMaWIuQ2hhdFxuICAgICAgICBvbk1lc3NhZ2U6IChtc2csIGluZm8pIC0+ICRzY29wZS5vbkNoYXRNZXNzYWdlKG1zZywgaW5mbywgY2hhdClcbiAgICAgICAga2V5OiAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICBndW46ICRzY29wZS5ndW5cbiAgICAgICAgcGFydGljaXBhbnRzOiBjaGF0LmlkVmFsdWVcbiAgICAgIG8ubXlNc2dzTGFzdFNlZW5UaW1lUHJvbWlzZSA9IG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBvLmdldE15TXNnc0xhc3RTZWVuVGltZSAodGltZSkgLT5cbiAgICAgICAgICByZXNvbHZlIHRpbWVcbiAgICAgICAgc2V0VGltZW91dCByZXNvbHZlLCAxMDAwXG4gICAgICByZXR1cm4gb1xuXG4gICAgc2V0SW5kZXggPSAoaSkgLT5cbiAgICAgIGkuc2V0T25saW5lKHRydWUpIGlmIGkud3JpdGFibGVcbiAgICAgIGkucmVhZHkudGhlbiAtPlxuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUubXNncy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLm1zZ3Muc2VlbiA9IHt9XG4gICAgICAgICRzY29wZS5pcmlzSW5kZXggPSBpXG4gICAgICAgIHNldFRpbWVvdXQgLT4gIyBmb3Igc29tZSByZWFzb24sIGRpc3QgdmVyc2lvbiBmYWlscyB0byBzaG93IG1lc3NhZ2VzIGFuZCBpZGVudGl0aWVzIHdpdGhvdXQgdGhpc1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICRzY29wZS5zaG93TW9yZU1zZ3MoKVxuICAgICAgICAsIDEwMDBcbiAgICAgICAgJHNjb3BlLnRydXN0ZWRJbmRleGVzID0gW11cbiAgICAgICAgJHNjb3BlLmNoYXRzID0gW11cbiAgICAgICAgJHNjb3BlLmNoYXRLZXlzID0ge31cbiAgICAgICAgaWYgaS53cml0YWJsZVxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguZ3VuLnVzZXIoKS5nZXQoJ2lyaXMnKS5nZXQoJ2NoYXRNZXNzYWdlc0J5VXVpZCcpLm1hcCgpLm9uIChub2RlLCBrZXkpIC0+XG4gICAgICAgICAgICByZXR1cm4gaWYgJHNjb3BlLmNoYXRLZXlzWyd1dWlkJyArIGtleV1cbiAgICAgICAgICAgICRzY29wZS5jaGF0S2V5c1sndXVpZCcgKyBrZXldID0gdHJ1ZVxuICAgICAgICAgICAgY2hhdCA9XG4gICAgICAgICAgICAgIGlkVmFsdWU6IGtleVxuICAgICAgICAgICAgICBpZFR5cGU6ICd1dWlkJ1xuICAgICAgICAgICAgICBsYXRlc3Q6IDBcbiAgICAgICAgICAgICAgdW5yZWFkTXNnczogMFxuICAgICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5ndW4udXNlcigpLmdldCgnaXJpcycpLmdldCgnY2hhdE1lc3NhZ2VzQnlVdWlkJykuZ2V0KGtleSkuZ2V0KCdtc2dzTGFzdFNlZW5UaW1lJykub24gKHRpbWUpIC0+XG4gICAgICAgICAgICAgIGNoYXQubXlNc2dzTGFzdFNlZW5UaW1lID0gbmV3IERhdGUodGltZSlcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgaWRlbnRpdHkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgndXVpZCcsIGtleSlcbiAgICAgICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMgaWRlbnRpdHlcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbiBjaGF0LCB7aWRlbnRpdHl9XG4gICAgICAgICAgICAgICRzY29wZS5jaGF0cy5wdXNoIGNoYXRcbiAgICAgICAgICAgICAgb25NZXNzYWdlID0gKG1zZywgaW5mbykgLT5cbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgICAgICBtc2cuZ2V0SGFzaCgpXG4gICAgICAgICAgICAgICAgICAkc2NvcGUub25DaGF0TWVzc2FnZShtc2csIGluZm8sIGNoYXQpXG4gICAgICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguZ2V0Q2hhdE1zZ3Moa2V5LCB7Y2FsbGJhY2s6IG9uTWVzc2FnZX0pXG4gICAgICAgICAgdGltZW91dCA9IDBcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmdldENoYXRzIChrZXkpIC0+XG4gICAgICAgICAgICByZXR1cm4gaWYgJHNjb3BlLmNoYXRLZXlzWydrZXlJRCcgKyBrZXldXG4gICAgICAgICAgICAkc2NvcGUuY2hhdEtleXNbJ2tleUlEJyArIGtleV0gPSB0cnVlXG4gICAgICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgICBpZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCdrZXlJRCcsIGtleSlcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyBpZGVudGl0eVxuICAgICAgICAgICAgICAgIGNoYXQgPVxuICAgICAgICAgICAgICAgICAgaWRWYWx1ZToga2V5XG4gICAgICAgICAgICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5OiBpZGVudGl0eVxuICAgICAgICAgICAgICAgICAgbGF0ZXN0OiAwXG4gICAgICAgICAgICAgICAgICB1bnJlYWRNc2dzOiAwXG4gICAgICAgICAgICAgICAgY2hhdC5jaGF0ID0gJHNjb3BlLmdldFByaXZhdGVDaGF0KGNoYXQpXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNoYXRzLnB1c2goY2hhdClcbiAgICAgICAgICAgICwgdGltZW91dCAjIFRPRE8gbG9sIGZpeFxuICAgICAgICAgICAgdGltZW91dCA9IHRpbWVvdXQgKyA1MDBcbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5ndW4uZ2V0KCd0cnVzdGVkSW5kZXhlcycpLm9wZW4gKHIpIC0+XG4gICAgICAgICAgZm9yIGssIHYgb2YgclxuICAgICAgICAgICAgJHNjb3BlLnRydXN0ZWRJbmRleGVzLnB1c2hcbiAgICAgICAgICAgICAgaW5kZXg6IGtcbiAgICAgICAgICAgICAgYXR0cmlidXRlOiBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgna2V5SUQnLCBrKVxuICAgICAgICAgICAgICBpZGVudGl0eTogJHNjb3BlLmlyaXNJbmRleC5nZXQoJ2tleUlEJywgaylcbiAgICAgICAgc2V0VGltZW91dCAoKSAtPlxuICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCdyelNsaWRlckZvcmNlUmVuZGVyJylcbiAgICAgICAgLCAxMDAwXG4gICAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgncnpTbGlkZXJGb3JjZVJlbmRlcicpXG4gICAgICAgICwgMzAwMCAjIDotLS1EXG4gICAgICAgIHNldFRpbWVvdXQgKCkgLT5cbiAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgncnpTbGlkZXJGb3JjZVJlbmRlcicpXG4gICAgICAgICwgNTAwMCAjIDotLS1EXG4gICAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCAkc2NvcGUuaXJpc0luZGV4XG4gICAgICAgICRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkgPSAkc2NvcGUuaXJpc0luZGV4LmdldCgkc2NvcGUudmlld3BvaW50LnR5cGUsICRzY29wZS52aWV3cG9pbnQudmFsdWUpXG4gICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkpXG4gICAgICAgICRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50LmF0dHJzID0gYXR0cnNcbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50Lm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcblxuICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4ID0gLT5cbiAgICAgICRzY29wZS5pcmlzSW5kZXggPSBudWxsXG4gICAgICAkc2NvcGUudmlld3BvaW50ID0ge3R5cGU6ICdrZXlJRCcsIHZhbHVlOiAkc2NvcGUuZGVmYXVsdEluZGV4S2V5SUR9XG4gICAgICBpID0gbmV3ICR3aW5kb3cuaXJpc0xpYi5JbmRleCh7Z3VuOiAkc2NvcGUuZ3VuLCBwdWJLZXk6ICRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRCwgaXBmczogJHNjb3BlLmlwZnN9KVxuICAgICAgc2V0SW5kZXgoaSlcblxuICAgICRzY29wZS5sb2dpbldpdGhLZXkgPSAocHJpdmF0ZUtleVNlcmlhbGl6ZWQsIHNlbGYsIHByZXZpb3VzbHlFeGlzdGluZykgLT5cbiAgICAgICRzY29wZS5pcmlzSW5kZXggPSBudWxsXG4gICAgICAkc2NvcGUubG9nZ2luZ0luID0gdHJ1ZVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSAkd2luZG93LmlyaXNMaWIuS2V5LmZyb21TdHJpbmcocHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpIGlmICRzY29wZS5sb2dpbk1vZGFsXG4gICAgICAkc2NvcGUucmVhZFFSTW9kYWwuY2xvc2UoKSBpZiAkc2NvcGUucmVhZFFSTW9kYWxcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdpcmlzS2V5JywgcHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG5cbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID1cbiAgICAgICAgaWRUeXBlOiAna2V5SUQnXG4gICAgICAgIGlkVmFsdWU6ICR3aW5kb3cuaXJpc0xpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci51cmwgPSAkc2NvcGUuZ2V0SWRVcmwgJ2tleUlEJywgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAga2V5SUQgPSAkd2luZG93LmlyaXNMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgJHNjb3BlLnZpZXdwb2ludCA9IHt0eXBlOiAna2V5SUQnLCB2YWx1ZToga2V5SUR9XG4gICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5zZWVuID0ge31cbiAgICAgIGkgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkluZGV4KHtndW46ICRzY29wZS5ndW4sIGtleXBhaXI6ICRzY29wZS5wcml2YXRlS2V5LCBzZWxmLCBpcGZzOiAkc2NvcGUuaXBmcywgZGVidWc6IHRydWV9KVxuICAgICAgc2V0SW5kZXgoaSlcbiAgICAgIGkucmVhZHkudGhlbiAtPlxuICAgICAgICAkc2NvcGUubG9nZ2luZ0luID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5ID0gJHNjb3BlLmlyaXNJbmRleC5nZXQoJ2tleUlEJywga2V5SUQpXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKHZhbCwga2V5LCBtc2csIGV2ZSkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyh2YWwpXG4gICAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5Lm12YSA9IG12YVxuICAgICAgICAgIGV2ZS5vZmYoKSBpZiBtdmEucHJvZmlsZVBob3RvXG4gICAgICAgIHN0YXJ0QXQgPSBuZXcgRGF0ZSgpXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5ndW4uZ2V0KCdyZWNlaXZlZCcpLm1hcCgpLm9uY2UgKG0pIC0+XG4gICAgICAgICAgcmV0dXJuIGlmIG0ucHViS2V5ID09ICRzY29wZS52aWV3cG9pbnQudmFsdWVcbiAgICAgICAgICBjb25zb2xlLmxvZyAneW91IGdvdCBhIG1zZydcbiAgICAgICAgICAkd2luZG93LmlyaXNMaWIuTWVzc2FnZS5mcm9tU2lnKG0pLnRoZW4gKG1zZykgLT5cbiAgICAgICAgICAgIGlmIG5ldyBEYXRlKG1zZy5zaWduZWREYXRhLnRpbWVzdGFtcCkgPiBzdGFydEF0XG4gICAgICAgICAgICAgIGF1dGhvciA9IG1zZy5nZXRBdXRob3IoJHNjb3BlLmlyaXNJbmRleClcbiAgICAgICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoYXV0aG9yKS50aGVuIChuYW1lKSAtPlxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UuY3JlYXRlXG4gICAgICAgICAgICAgICAgICB0eXBlOiAncG9zdCdcbiAgICAgICAgICAgICAgICAgIGZyb206IG5hbWVcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiI3tuYW1lfSBwdWJsaWMgbWVzc2FnZWQgeW91IVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSAtPlxuICAgICAgICAgICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlLCB2YWx1ZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSB9XG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5ndW4ub24gKGRhdGEpIC0+XG4gICAgICAgICAgaWYgZGF0YS5yZWNlaXZlZFBvc2l0aXZlIGFuZCAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkuZGF0YSBhbmQgbm90ICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhLnJlY2VpdmVkUG9zaXRpdmVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdncmVhdCwgeW91IGdvdCB5b3VyIGZpcnN0IHVwdm90ZSEnXG4gICAgICAgICAgICAjIFRPRE86IG5vdGlmaWNhdGlvblxuICAgICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eS5kYXRhID0gZGF0YVxuXG4gICAgcHJpdmF0ZUtleSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdpcmlzS2V5Jykgb3IgbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2lkZW50aWZpS2V5JylcbiAgICBpZiBwcml2YXRlS2V5XG4gICAgICAkc2NvcGUubG9naW5XaXRoS2V5KHByaXZhdGVLZXkpXG4gICAgZWxzZVxuICAgICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXgoKVxuXG4gICAgJHNjb3BlLm9wZW5DaGF0TW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAnY2hhdE1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL2NoYXQubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuXG4gICAgJHNjb3BlLm9wZW5WaWRlb0NoYXRNb2RhbCA9ICgpIC0+XG4gICAgICAkc2NvcGUub3Blbk1vZGFsICd2aWRlb0NoYXRNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy92aWRlby5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG5cbiAgICAkc2NvcGUub3BlblJlYWRRUk1vZGFsID0gKCkgLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwgJ3JlYWRRUk1vZGFsJywgeyB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3JlYWRxci5tb2RhbC5odG1sJywgc2l6ZTogJ21kJyB9XG5cbiAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzID0gKCkgLT5cbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLnBlZXJzIChlcnIsIHBlZXJJbmZvcykgLT5cbiAgICAgICAgaWYgZXJyXG4gICAgICAgICAgY29uc29sZS5lcnJvciAnZmFpbGVkIHRvIGZldGNoIGlwZnMgcGVlcnMnLCBlcnJcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICRzY29wZS5pcGZzUGVlcnMgPSBwZWVySW5mb3MgaWYgQXJyYXkuaXNBcnJheShwZWVySW5mb3MpXG5cbiAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgJHNjb3BlLmlwZnNSZWFkeSA9IHRydWVcbiAgICAgICR3aW5kb3cuaXBmcyA9ICRzY29wZS5pcGZzXG4gICAgICAkc2NvcGUudXBkYXRlSXBmc1BlZXJzKClcbiAgICAgIHNldEludGVydmFsICRzY29wZS51cGRhdGVJcGZzUGVlcnMsIDUwMDBcblxuICAgICRzY29wZS5sb2NhbFNldHRpbmdzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsU2V0dGluZ3MnKSB8fCB7fVxuXG4gICAgJHNjb3BlLnNhdmVMb2NhbFNldHRpbmcgPSAoa2V5LCB2YWx1ZSkgLT5cbiAgICAgICRzY29wZS5sb2NhbFNldHRpbmdzW2tleV0gPSB2YWx1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsU2V0dGluZ3MnLCAkc2NvcGUubG9jYWxTZXR0aW5ncylcblxuICAgICRzY29wZS5jbG9zZVByb2ZpbGVVcGxvYWROb3RpZmljYXRpb24gPSAtPlxuICAgICAgJHNjb3BlLnNhdmVMb2NhbFNldHRpbmcgJ3Byb2ZpbGVVcGxvYWROb3RpZmljYXRpb25DbG9zZWQnLCB0cnVlXG5cbiAgICAkc2NvcGUub3BlblByb2ZpbGVQaG90b1VwbG9hZE1vZGFsID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8sICdVcGxvYWQgcHJvZmlsZSBwaG90bycsIHRydWUpXG5cbiAgICAkc2NvcGUudXBsb2FkUHJvZmlsZVBob3RvID0gKGJsb2IpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgcmVjaXBpZW50ID1cbiAgICAgICAgICBwcm9maWxlUGhvdG86ICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aFxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICAgICByZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZWNpcGllbnQua2V5SUQgPSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLmNsb3NlUHJvZmlsZVVwbG9hZE5vdGlmaWNhdGlvbigpXG4gICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmhpZGVQcm9maWxlUGhvdG8gPSB0cnVlICMgVGhlcmUncyBhIHdlaXJkIGJ1ZyB3aGVyZSB0aGUgcHJvZmlsZSBpZGVudGljb24gZG9lc24ndCB1cGRhdGVcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmFkZE1lc3NhZ2UobSkudGhlbiAtPlxuICAgICAgICAgICAgJHNjb3BlLmhpZGVQcm9maWxlUGhvdG8gPSBmYWxzZVxuICAgICAgICAgICAgaWYgISRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlLCB2YWx1ZTogJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSB9XG4gICAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5zZXRQYWdlVGl0bGUgPSAodGl0bGUpIC0+XG4gICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSA9ICdJcmlzJ1xuICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSArPSAnIC0gJyArIHRpdGxlXG5cbiAgICAkc2NvcGUuaXBmc0dldCA9ICh1cmksIG9wdGlvbnMgPSB7fSkgLT5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT5cbiAgICAgICAgZ28gPSAtPlxuICAgICAgICAgICRzY29wZS5pcGZzLmNhdCh1cmkpLnRoZW4gKGZpbGUpIC0+XG4gICAgICAgICAgICBmaWxlID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGZpbGUpXG4gICAgICAgICAgICBpZiBvcHRpb25zLmdldEpzb25cbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZS50b1N0cmluZygpKVxuICAgICAgICAgICAgaWYgb3B0aW9ucy5iYXNlNjR0eXBlXG4gICAgICAgICAgICAgIGZpbGUgPSAnZGF0YTonICsgb3B0aW9ucy5iYXNlNjR0eXBlICsgJztiYXNlNjQsJyArIGZpbGUudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgICAgICAgICByZXNvbHZlIGZpbGVcblxuICAgICAgICBpZiAkc2NvcGUuaXBmc1JlYWR5XG4gICAgICAgICAgZ28oKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgICAgICAgIGdvKClcblxuICAgICRzY29wZS4kd2F0Y2ggJ25ld01lc3NhZ2UucmF0aW5nJywgKHJhdGluZykgLT5cbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gMC41KSAvIDMgLyAxLjI1ICsgMC4yXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnN0eWxlID0geydib3JkZXItY29sb3InOiAncmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSd9XG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgYWxwaGEgPSAocmF0aW5nICsgMC41KSAvIC0zIC8gMS4yNSArIDAuMlxuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5zdHlsZSA9IHsnYm9yZGVyLWNvbG9yJzogJ3JnYmEoMjQyLDIyMiwyMjIsJyArIGFscGhhICsgJyknfVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5zdHlsZSA9IHsnYm9yZGVyLWNvbG9yJzogJyNmY2Y4ZTMnfVxuXG4gICAgJHNjb3BlLnJlc2V0TXNnID0gLT5cbiAgICAgICRzY29wZS5uZXdNZXNzYWdlID1cbiAgICAgICAgcmF0aW5nOiAxXG4gICAgICAgIGNvbW1lbnQ6ICcnXG4gICAgICAgIGZpbGVzOiBbXVxuICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICAgIHR5cGU6ICcnXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICRzY29wZS5yZXNldE1zZygpXG5cbiAgICAkc2NvcGUudm90ZSA9IChtc2csIHZvdGUpIC0+XG4gICAgICBjb25zb2xlLmxvZyAndm90ZSBhZGRlZCdcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKG51bGwsIHt0eXBlOiAndm90ZScsIHJlcGx5VG86IG1zZy5nZXRIYXNoKCksIHZvdGV9KVxuXG4gICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2VcbiAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZSA9IChldmVudCwgbXNnLCBvcHRpb25zID0ge30pIC0+XG4gICAgICAkc2NvcGUuYWRkaW5nTWVzc2FnZSA9IHRydWVcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIGlmIGV2ZW50XG4gICAgICBkZWxldGUgbXNnLnBvbGxPcHRpb25zIGlmIG1zZy5wb2xsT3B0aW9ucyA9PSBmYWxzZVxuXG4gICAgICBmaWxlVXBsb2FkcyA9IFtdXG4gICAgICBpZiBvcHRpb25zLmZpbGVzICMgdXBsb2FkIHRvIGlwZnNcbiAgICAgICAgbXNnLmF0dGFjaG1lbnRzID0gW11cbiAgICAgICAgYWRkRmlsZSA9IChmaWxlKSAtPlxuICAgICAgICAgICRzY29wZS51cGxvYWRGaWxlKGZpbGUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgIGlmIHJlcyBhbmQgcmVzLmxlbmd0aCBhbmQgcmVzLmxlbmd0aCA+IDAgYW5kIHJlc1swXS5wYXRoXG4gICAgICAgICAgICAgIG1zZy5hdHRhY2htZW50cy5wdXNoXG4gICAgICAgICAgICAgICAgdXJpOiAnL2lwZnMvJyArIHJlc1swXS5wYXRoXG4gICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplXG4gICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lXG4gICAgICAgIGZpbGVVcGxvYWRzLnB1c2ggYWRkRmlsZShmaWxlKSBmb3IgZmlsZSBpbiBvcHRpb25zLmZpbGVzXG5cbiAgICAgIFByb21pc2UuYWxsKGZpbGVVcGxvYWRzKS50aGVuIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdtc2cuYXR0YWNobWVudHMnLCBtc2cuYXR0YWNobWVudHNcbiAgICAgICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2Ugb2JqZWN0XG4gICAgICAgIG1lc3NhZ2UgPSBudWxsXG4gICAgICAgIGRlbGV0ZSBtc2cuZmlsZXMgaWYgbXNnLmZpbGVzXG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgICAgIG1zZy5yZWNpcGllbnQgPSBtc2cucmVjaXBpZW50IHx8IHt9XG4gICAgICAgICAgaWYgb3B0aW9ucy52ZXJpZmllZEF0dHIgYW5kICRzdGF0ZVBhcmFtcy50eXBlID09IG9wdGlvbnMudmVyaWZpZWRBdHRyLnR5cGVcbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRbJHN0YXRlUGFyYW1zLnR5cGVdID0gWyRzdGF0ZVBhcmFtcy52YWx1ZSwgb3B0aW9ucy52ZXJpZmllZEF0dHIudmFsdWVdXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudFskc3RhdGVQYXJhbXMudHlwZV0gPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRbb3B0aW9ucy52ZXJpZmllZEF0dHIudHlwZV0gPSBvcHRpb25zLnZlcmlmaWVkQXR0ci52YWx1ZSBpZiBvcHRpb25zLnZlcmlmaWVkQXR0clxuICAgICAgICBpZiBtc2cudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICAgIG1zZy5tYXhSYXRpbmcgfD0gM1xuICAgICAgICAgIG1zZy5taW5SYXRpbmcgfD0gLTNcbiAgICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlUmF0aW5nKG1zZywgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIGVsc2UgaWYgbXNnLnR5cGUgPT0gJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKG1zZywgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlKG1zZywgJHNjb3BlLnByaXZhdGVLZXkpXG5cbiAgICAgICAgbWVzc2FnZS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguYWRkTWVzc2FnZShtKVxuICAgICAgICAgICRzY29wZS5tc2dzLnNlZW5bbS5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoW21dKVxuICAgICAgICAudGhlbiAobWVzc2FnZXMpIC0+XG4gICAgICAgICAgJHNjb3BlLm1zZ3MubGlzdC5wdXNoKG1lc3NhZ2VzWzBdKVxuICAgICAgICAgIGlmIG9wdGlvbnMuYWRkVG8gYW5kIG5vdCBvcHRpb25zLmFkZFRvLnNlZW5bbWVzc2FnZXNbMF0uZ2V0SGFzaCgpXVxuICAgICAgICAgICAgb3B0aW9ucy5hZGRUby5saXN0LnB1c2ggbWVzc2FnZXNbMF1cbiAgICAgICAgICAgIG9wdGlvbnMuYWRkVG8uc2VlblttZXNzYWdlc1swXS5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgbm90IGluIFttc2cudHlwZSwgbnVsbF1cbiAgICAgICAgICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBtc2cudHlwZVxuICAgICAgICAgICRzY29wZS5yZXNldE1zZygpICMgd2h5IG5vdCByZXNldHRpbmcgdXBsb2FkZWQgZmlsZXM/IEQ6XG4gICAgICAgICAgb3B0aW9ucy5maWxlcyA9IFtdIGlmIG9wdGlvbnMuZmlsZXNcbiAgICAgICAgICAkc2NvcGUuYWRkaW5nTWVzc2FnZSA9IGZhbHNlXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICAkc2NvcGUuZXJyb3IgPSBlXG4gICAgICAgICAgJHNjb3BlLmFkZGluZ01lc3NhZ2UgPSBmYWxzZVxuICAgICAgICAgIHJldHVybiBtZXNzYWdlXG5cbiAgICAkc2NvcGUuYWRkQXR0cmlidXRlID0gLT5cbiAgICAgICRsb2NhdGlvbi5wYXRoICcjL2lkZW50aXRpZXMvY3JlYXRlLycgKyAkc2NvcGUucXVlcnkudGVybVxuXG4gICAgJHNjb3BlLmxvZ2luID0gLT5cbiAgICAgICRzY29wZS5maWx0ZXJzLm1heERpc3RhbmNlID0gLTEgIyBiZWNhdXNlIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBhIHRydXN0IGluZGV4IHlldFxuXG4gICAgJHNjb3BlLm9wZW5Nb2RhbCA9IChtb2RhbE5hbWUsIG9wdGlvbnMpIC0+XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbiB7c2l6ZTogJ21kJywgYW5pbWF0aW9uOiB0cnVlLCBzY29wZTogJHNjb3BlfSwgb3B0aW9uc1xuICAgICAgJHNjb3BlW21vZGFsTmFtZV0gPSAkdWliTW9kYWwub3BlbihvcHRpb25zKVxuICAgICAgJHNjb3BlW21vZGFsTmFtZV0ucmVzdWx0LnRoZW4gKC0+KSwgKC0+KSAjIGF2b2lkIGJhY2tkcm9wIHJlamVjdGlvbiBjb25zb2xlIGVycm9yXG4gICAgICAkc2NvcGVbbW9kYWxOYW1lXS5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAgIGZvY3VzKG9wdGlvbnMuZm9jdXNUbykgaWYgb3B0aW9ucy5mb2N1c1RvXG4gICAgICAkdHJhbnNpdGlvbnMub25TdGFydCB7fSwgLT5cbiAgICAgICAgJHNjb3BlW21vZGFsTmFtZV0uY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5Mb2dpbk1vZGFsID0gLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ2xvZ2luTW9kYWwnLCB7dGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJywgZm9jdXNUbzogJ25ld1VzZXInfSlcblxuICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwgPSAoY2FsbGJhY2ssIG1vZGFsQnV0dG9uVGV4dCwgc3F1YXJpZnkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWxDYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgICAkc2NvcGUubW9kYWxCdXR0b25UZXh0ID0gbW9kYWxCdXR0b25UZXh0IG9yICdVcGxvYWQnXG4gICAgICAkc2NvcGUuc3F1YXJpZnkgPSBzcXVhcmlmeVxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCgndXBsb2FkTW9kYWwnLCB7dGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy91cGxvYWQubW9kYWwuaHRtbCd9KVxuXG4gICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgJHNjb3BlLm1zZ3Muc2VlbiA9IHt9XG4gICAgJHNjb3BlLmZpbHRlcmVkTXNncyA9IFtdXG4gICAgJHNjb3BlLnNob3dNb3JlTXNncyA9IChjdXJzb3IpIC0+XG4gICAgICBsaW1pdCA9IDIwICMgMTBcbiAgICAgIGlmIGN1cnNvciA9PSB1bmRlZmluZWQgYW5kICRzY29wZS5tc2dzLmxhc3RcbiAgICAgICAgY3Vyc29yID0gJHNjb3BlLm1zZ3MubGFzdFxuICAgICAgY29uc29sZS5sb2cgJ2N1cnNvcicsIGN1cnNvclxuICAgICAgZm91bmQgPSAwXG4gICAgICAkc2NvcGUubG9hZGluZ01zZ3MgPSB0cnVlXG4gICAgICBmaWx0ZXIgPSBmYWxzZVxuICAgICAgIyMjXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09IG51bGxcbiAgICAgICAgZmlsdGVyID0gKG0pIC0+XG4gICAgICAgICAgciA9IG0uc2lnbmVkRGF0YS50eXBlIG5vdCBpbiBbJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmaWNhdGlvbiddXG4gICAgICAgICAgY29uc29sZS5sb2cgJ2ZpbHRlcmluJywgclxuICAgICAgICAgIHJldHVybiByXG4gICAgICBlbHNlXG4gICAgICAgIHQgPSAkc2NvcGUuZmlsdGVycy50eXBlLnNwbGl0KCc6JylbMF1cbiAgICAgICAgZmlsdGVyID0gKG0pIC0+XG4gICAgICAgICAgciA9IG0uc2lnbmVkRGF0YS50eXBlID09IHRcbiAgICAgICAgICBjb25zb2xlLmxvZyAnZmlsdGVyaW4nLCByXG4gICAgICAgICAgcmV0dXJuIHJcbiAgICAgICMjI1xuICAgICAgcmVzdWx0Rm91bmQgPSAobXNnKSAtPlxuICAgICAgICBmb3VuZCArPSAxXG4gICAgICAgICRzY29wZS5sb2FkaW5nTXNncyA9IGZhbHNlIGlmIGZvdW5kID49IGxpbWl0XG4gICAgICAgIHJldHVybiBpZiAkc2NvcGUubXNncy5zZWVuW21zZy5nZXRIYXNoKCldXG4gICAgICAgICRzY29wZS5tc2dzLmxhc3QgPSBtc2cuc2lnbmVkRGF0YS50aW1lc3RhbXAgaWYgISRzY29wZS5tc2dzLmxhc3Qgb3IgbXNnLnNpZ25lZERhdGEudGltZXN0YW1wIDwgJHNjb3BlLm1zZ3MubGFzdFxuICAgICAgICAkc2NvcGUubXNncy5zZWVuW21zZy5nZXRIYXNoKCldID0gdHJ1ZVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAkc2NvcGUubXNncy5saXN0LnB1c2ggbXNnXG5cbiAgICAgICRzY29wZS5maWx0ZXJzLmxpbWl0ICs9IGxpbWl0XG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5saW1pdCA+ICRzY29wZS5maWx0ZXJlZE1zZ3MubGVuZ3RoXG4gICAgICAgICRzY29wZS5pcmlzSW5kZXguZ2V0TWVzc2FnZXNCeVRpbWVzdGFtcChyZXN1bHRGb3VuZCwgdW5kZWZpbmVkLCBjdXJzb3IpXG5cbiAgICAkc2NvcGUudXBsb2FkRmlsZSA9IChibG9iKSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlLCByZWplY3QpIC0+XG4gICAgICAgIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gKGV2ZW50KSAtPlxuICAgICAgICAgIGJ1ZmZlciA9ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlci5mcm9tKGV2ZW50LnRhcmdldC5yZXN1bHQpXG4gICAgICAgICAgJHNjb3BlLmlwZnMuYWRkIGJ1ZmZlciwgKGVyciwgZmlsZXMpIC0+XG4gICAgICAgICAgICBpZiBlcnJcbiAgICAgICAgICAgICAgcmVqZWN0KCdhZGRpbmcgdG8gaXBmcyBmYWlsZWQnLCBlcnIpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nICdkb25lOicsIGVyciwgZmlsZXNcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXG4gICAgJHNjb3BlLmNyZWF0ZVVzZXIgPSAobmFtZSkgLT5cbiAgICAgIHJldHVybiBpZiBuYW1lLmluZGV4T2YoJ3snKSAhPSAtMSBvciBuYW1lLmluZGV4T2YoJ30nKSAhPSAtMSAjIHByZXZlbnQgYWNjaWRlbnRhbCBwcml2YXRlIGtleSBwYXN0ZVxuICAgICAgbmFtZSA9IG5hbWUudHJpbSgpXG4gICAgICAkc2NvcGUuY3JlYXRpbmdVc2VyID0gdHJ1ZVxuICAgICAgc2VsZiA9IHtuYW1lfVxuICAgICAgJHdpbmRvdy5pcmlzTGliLktleS5nZW5lcmF0ZSgpXG4gICAgICAudGhlbiAoa2V5KSAtPlxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleVxuICAgICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAkd2luZG93LmlyaXNMaWIuS2V5LnRvU3RyaW5nKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBzZWxmLmtleUlEID0gJHdpbmRvdy5pcmlzTGliLktleS5nZXRJZCgkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleSgkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQsIHNlbGYpXG4gICAgICAudGhlbiAobXNnKSAtPlxuICAgICAgICAkc2NvcGUuY3JlYXRpbmdVc2VyID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UgdW5kZWZpbmVkLFxuICAgICAgICAgIHR5cGU6ICdyYXRpbmcnXG4gICAgICAgICAgcmF0aW5nOiAxXG4gICAgICAgICAgdGV4dDogJ1RydXN0ZWQgYnkgZGVmYXVsdCBhcyBhIHdlYiBvZiB0cnVzdCBlbnRyeSBwb2ludC4nXG4gICAgICAgICAgcmVjaXBpZW50OlxuICAgICAgICAgICAga2V5SUQ6ICRzY29wZS5kZWZhdWx0SW5kZXhLZXlJRFxuICAgICAgICAgICAgbmFtZTogJ0lyaXMnXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWxlZCB0byBjcmVhdGUgdXNlcjonLCBlKVxuICAgICAgICAkc2NvcGUuY3JlYXRpbmdVc2VyID0gZmFsc2VcblxuICAgICRzY29wZS5nZW5lcmF0ZUtleSA9IC0+XG4gICAgICAkd2luZG93LmlyaXNMaWIuS2V5LmdlbmVyYXRlKCkudGhlbiAoa2V5KSAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBrZXlcbiAgICAgICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAkd2luZG93LmlyaXNMaWIuS2V5LnRvU3RyaW5nKCRzY29wZS5wcml2YXRlS2V5KVxuXG4gICAgJHNjb3BlLmRvd25sb2FkID0gKGZpbGVuYW1lLCBkYXRhLCB0eXBlLCBjaGFyc2V0ID0gJ3V0Zi04JywgaHJlZikgLT5cbiAgICAgIGhpZGRlbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGhpZGRlbkVsZW1lbnQuaHJlZiA9IGhyZWYgb3IgXCJkYXRhOiN7dHlwZX07Y2hhcnNldD0je2NoYXJzZXR9LCN7ZW5jb2RlVVJJKGRhdGEpfVwiXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gZmlsZW5hbWVcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmRvd25sb2FkVGV4dCA9ICh0ZXh0KSAtPlxuICAgICAgJHNjb3BlLmRvd25sb2FkKCdpcmlzX3ByaXZhdGVfa2V5LnR4dCcsIHRleHQsICd0ZXh0L2NzdicsICd1dGYtOCcpXG5cbiAgICAkc2NvcGUub3BlbkxvZ291dE1vZGFsID0gLT5cbiAgICAgICRzY29wZS5vcGVuTW9kYWwoJ2xvZ291dE1vZGFsJywge3RlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9nb3V0Lm1vZGFsLmh0bWwnfSlcblxuICAgICRzY29wZS5sb2dvdXQgPSAtPlxuICAgICAgJHNjb3BlLmlyaXNJbmRleC5zZXRPbmxpbmUoZmFsc2UpXG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA9IDBcbiAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICcnXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5jbGVhckFsbCgpXG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMubGlzdCcpXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IG51bGxcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBudWxsXG4gICAgICAkc2NvcGUubG9nb3V0TW9kYWwuY2xvc2UoKVxuICAgICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXgoKVxuICAgICAgJHNjb3BlLmxvY2FsU2V0dGluZ3MgPSB7fVxuXG4gICAgJHNjb3BlLm1zZ0ZpbHRlciA9IChtc2csIGluZGV4LCBhcnJheSkgLT5cbiAgICAgIGRhdGEgPSBtc2cuc2lnbmVkRGF0YVxuICAgICAgcmV0dXJuIGZhbHNlIGlmIG1zZy5zaWduZWREYXRhLnJlcGx5VG9cbiAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGVcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZS5tYXRjaCAvXnJhdGluZy9cbiAgICAgICAgICBpZiBkYXRhLnR5cGUgIT0gJ3JhdGluZydcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAoZGF0YS5tYXhSYXRpbmcgKyBkYXRhLm1pblJhdGluZykgLyAyXG4gICAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOnBvc2l0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPD0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmVnYXRpdmUnIGFuZCBkYXRhLnJhdGluZyA+PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZXV0cmFsJyBhbmQgZGF0YS5yYXRpbmcgIT0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgIHJldHVybiBkYXRhLnR5cGUgaW4gWyd2ZXJpZmljYXRpb24nLCAndW52ZXJpZmljYXRpb24nXVxuICAgICAgICBlbHNlIGlmIGRhdGEudHlwZSAhPSAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA+IC0xXG4gICAgICAgIGlmIHR5cGVvZiBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhEaXN0YW5jZSA+IDAgYW5kIG1zZy5hdXRob3JUcnVzdERpc3RhbmNlID4gJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPT0gMCBhbmQgbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPT0gOTlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSA9IChtc2cpIC0+XG4gICAgICBzaG93UmF3RGF0YSA9XG4gICAgICAgIGhhc2g6IG1zZy5oYXNoXG4gICAgICAgIGRhdGE6IG1zZy5zaWduZWREYXRhXG4gICAgICAgIHByaW9yaXR5OiBtc2cucHJpb3JpdHlcbiAgICAgICAgandzOiBtc2cuandzXG4gICAgICBtc2cuc3RyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNob3dSYXdEYXRhLCB1bmRlZmluZWQsIDIpXG5cbiAgICAkc2NvcGUuc2hhcmVNZXNzYWdlID0gKG1zZywgY29tbWVudCkgLT5cbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKG51bGwsIHsgdHlwZTogJ3Bvc3QnLCBzaGFyZWRNc2c6IG1zZy5nZXRIYXNoKCksIGNvbW1lbnQgfSkudGhlbiAocikgLT5cbiAgICAgICAgbXNnLnNoYXJlcyA9IG1zZy5zaGFyZXMgb3Ige31cbiAgICAgICAgbXNnLnNoYXJlc1tyLmdldEhhc2goKV0gPSByXG4gICAgICAgIG1zZy5zaGFyZXNBcnIgPSBtc2cuc2hhcmVzQXJyIG9yIFtdXG4gICAgICAgIG1zZy5zaGFyZXNBcnIucHVzaChyKVxuICAgICAgJHNjb3BlLnNoYXJlTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm1zZ1V0aWxzID1cbiAgICAgIGxpa2U6IChtc2cpIC0+XG4gICAgICAgIGlmIG1zZy5saWtlZFxuICAgICAgICAgIG1zZy5saWtlZCA9IGZhbHNlXG4gICAgICAgICAgbXNnLmxpa2VzID0gaWYgbXNnLmxpa2VzIHRoZW4gbXNnLmxpa2VzIC0gMSBlbHNlIDBcbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LnNldFJlYWN0aW9uKG1zZywgbnVsbClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1zZy5saWtlZCA9IHRydWVcbiAgICAgICAgICBtc2cubGlrZXMgPSBpZiBtc2cubGlrZXMgdGhlbiBtc2cubGlrZXMgKyAxIGVsc2UgMVxuICAgICAgICAgICRzY29wZS5pcmlzSW5kZXguc2V0UmVhY3Rpb24obXNnLCAnbGlrZScpXG4gICAgICBzaGFyZTogKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtc2dcbiAgICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAnc2hhcmVNb2RhbCcsIHsgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hhcmUubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuICAgICAgcmVwbHlUbzogKG1zZywgcmVwbHkpIC0+XG4gICAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKG51bGwsIHtcbiAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgcmVwbHlUbzogbXNnLmdldEhhc2goKVxuICAgICAgICAgIGNvbW1lbnQ6IHJlcGx5XG4gICAgICAgIH0pLnRoZW4gKHIpIC0+XG4gICAgICAgICAgbXNnLnJlcGxpZXMgPSBtc2cucmVwbGllcyBvciB7fVxuICAgICAgICAgIG1zZy5yZXBsaWVzW3IuZ2V0SGFzaCgpXSA9IHJcbiAgICAgICAgICBtc2cucmVwbGllc0FyciA9IG1zZy5yZXBsaWVzQXJyIG9yIFtdXG4gICAgICAgICAgbXNnLnJlcGxpZXNBcnIucHVzaChyKVxuXG4gICAgJHNjb3BlLm9wZW5NZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlLCBzaXplKSAtPlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgIGlmIG1lc3NhZ2Uuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50ID0gJHNjb3BlLm1lc3NhZ2UuZ2V0UmVjaXBpZW50KCRzY29wZS5pcmlzSW5kZXgpXG4gICAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgICAgbXZhID0gJHdpbmRvdy5pcmlzTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRfbmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgIGVsc2UgaWYgbXZhLm5pY2tuYW1lXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQgPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gJHNjb3BlLmlyaXNJbmRleC5nZXQoJ2tleUlEJywgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SUQpXG4gICAgICAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5QXR0ciA9IG5ldyAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlKCdrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEKVxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCgnY2hhdE1vZGFsJywge3RlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cubW9kYWwuaHRtbCcsIHNpemV9KVxuXG4gICAgdW5sZXNzICRzY29wZS5maWx0ZXJzXG4gICAgICAkc2NvcGUuZmlsdGVycyA9IE9iamVjdC5hc3NpZ24ge30sIGNvbmZpZy5kZWZhdWx0RmlsdGVyc1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcbiAgICAjICRzY29wZS5tZW51ID0gTWVudXMuZ2V0TWVudSgndG9wYmFyJylcblxuICAgICRzY29wZS50b2dnbGVDb2xsYXBzaWJsZU1lbnUgPSAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gISRzY29wZS5pc0NvbGxhcHNlZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucyA9IHt9LCBvcHRpb25zID0ge30pIC0+XG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIG1zZy5hdXRob3IgPSBtc2cuZ2V0QXV0aG9yKCRzY29wZS5pcmlzSW5kZXgpXG4gICAgICAgIG1zZy5hdXRob3IuZ3VuLmdldCgndHJ1c3REaXN0YW5jZScpLm9uIChkKSAtPiBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSA9IGRcbiAgICAgIHJldHVybiBtZXNzYWdlc1xuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAjIHNob3VsZCBiZSBtb3ZlZCB0byBpcmlzLWxpYj9cbiAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyA9IChpLCBodG1sU2FmZSwgc2V0VGl0bGUpIC0+XG4gICAgICBpLndlbGxWZXJpZmllZCA9IGZhbHNlXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUpIC0+XG4gICAgICAgIGkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICBtdmEgPSAkd2luZG93LmlyaXNMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcbiAgICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgICAgaS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBpLndlbGxWZXJpZmllZCA9IHRydWUgaWYgbXZhLm5hbWUud2VsbFZlcmlmaWVkXG4gICAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgICBpLmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGEgPSBPYmplY3QudmFsdWVzKGF0dHJzKVswXVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gYS52YWx1ZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5zbGljZSgwLDYpICsgJy4uLicgaWYgYS50eXBlIGluIFsna2V5SUQnLCAndXVpZCddXG4gICAgICAgICAgICBpZiBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgIGlmIG12YS5uaWNrbmFtZSBhbmQgbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWx1ZSAhPSBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgICAgICBpLm5pY2tuYW1lID0gaS5uaWNrbmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuICAgICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSBpLnByaW1hcnlOYW1lIGlmIHNldFRpdGxlXG4gICAgICAgICAgICByZXNvbHZlIGkucHJpbWFyeU5hbWVcblxuICAgICRzY29wZS5zZWFyY2hLZXlkb3duID0gKGV2ZW50KSAtPlxuICAgICAgc3dpdGNoIChpZiBldmVudCB0aGVuIGV2ZW50LndoaWNoIGVsc2UgLTEpXG4gICAgICAgIHdoZW4gMzhcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPiAtMVxuICAgICAgICAgICAgJHNjb3BlLmFkZEVudHJ5QWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5LS1cbiAgICAgICAgICAgIGlkID0gaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPiAtMSB0aGVuICdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkgZWxzZSAnY3JlYXRlSWRSb3cnXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICgkc2NvcGUuaWRzLmFjdGl2ZUtleSA8ICgkc2NvcGUuaWRzLmxpc3QubGVuZ3RoKSAtIDEpIGFuZCAkc2NvcGUuaWRzLmFjdGl2ZUtleSA8ICRzY29wZS5maWx0ZXJzLmxpbWl0XG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSsrXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSkuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID09IC0xXG4gICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpLmNsaWNrKClcbiAgICAgICAgd2hlbiAtMVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgIHdoZW4gMzMsIDM0LCAzNSwgMzYsIDM3LCAzOVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZWwgPSBhbmd1bGFyLmVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgd2FpdCA9IHNldFRpbWVvdXQoKC0+XG4gICAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9IGVsLnZhbCgpXG4gICAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICksIDMwMClcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSB3YWl0XG4gICAgICAgICAgYnJlYWtcblxuICAgICRzY29wZS5kcm9wZG93blNlYXJjaFNlbGVjdCA9IChpdGVtKSAtPlxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGl0ZW0ubGlua1RvLnR5cGUsIHZhbHVlOiBpdGVtLmxpbmtUby52YWx1ZSB9KVxuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuXG4gICAgJHNjb3BlLmFkZEd1blBlZXIgPSAodXJsKSAtPlxuICAgICAgJHNjb3BlLmd1bi5vcHQoe3BlZXJzOiBbdXJsXX0pOyAjIFRPRE86IHZhbGlkYXRlIHVybFxuXG4gICAgJHNjb3BlLnJlbW92ZUd1blBlZXIgPSAodXJsKSAtPlxuICAgICAgcGVlciA9ICRzY29wZS5ndW4uXy5vcHQucGVlcnNbdXJsXSAjIGdldCB0aGUgcGVlciB5b3Ugd2FudFxuICAgICAgcGVlci51cmwgPSBwZWVyLmlkID0gbnVsbCAjIHRoaXMgcHJldmVudHMgcmVjb25uZWN0aW5nIHRvIFVSTFxuICAgICAgcGVlci53aXJlLmNsb3NlKCkgIyBpZiB3ZWJzb2NrZXQgaW50ZXJmYWNlXG4gICAgICBkZWxldGUgJHNjb3BlLmd1bi5fLm9wdC5wZWVyc1t1cmxdICMgcmVtb3ZlIGZyb20gcGVlciBsaXN0XG5cbiAgICAkc2NvcGUuYWRkSXBmc1BlZXIgPSAodXJsKSAtPlxuICAgICAgJHNjb3BlLmlwZnMuYm9vdHN0cmFwLmFkZCB1cmxcbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLmNvbm5lY3QodXJsKS50aGVuIC0+XG4gICAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuXG4gICAgJHNjb3BlLmFkZERlZmF1bHRJcGZzUGVlcnMgPSAtPlxuICAgICAgJHNjb3BlLmlwZnMuYm9vdHN0cmFwLmFkZCgnJywge2RlZmF1bHQ6IHRydWV9KS50aGVuIC0+ICMgVE9ETzogZXJyb3JzXG4gICAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuXG4gICAgJHNjb3BlLnJlbW92ZUlwZnNQZWVyID0gKHVybCkgLT5cbiAgICAgICRzY29wZS5pcGZzLmJvb3RzdHJhcC5ybSB1cmxcbiAgICAgICRzY29wZS5pcGZzLnN3YXJtLmRpc2Nvbm5lY3QodXJsKS50aGVuIC0+XG4gICAgICAgICRzY29wZS51cGRhdGVJcGZzUGVlcnMoKVxuXG4gICAgJHNjb3BlLm9uVmlkZW9FcnJvciA9IChlcnJvcikgLT5cbiAgICAgIGNvbnNvbGUuZXJyb3IgJ3ZpZGVvIGVycm9yJywgZXJyb3JcblxuICAgICRzY29wZS5tdXRlQ2hhdCA9IChrZXkpIC0+XG4gICAgICBtdXRlZCA9ICEoJHNjb3BlLmxvY2FsU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoa2V5KSBhbmQgJHNjb3BlLmxvY2FsU2V0dGluZ3Nba2V5XS5tdXRlZClcbiAgICAgICRzY29wZS5zYXZlTG9jYWxTZXR0aW5nIGtleSwge211dGVkfVxuICAgICAgY29uc29sZS5sb2cgJHNjb3BlLmxvY2FsU2V0dGluZ3NcblxuICAgICRzY29wZS5kZXNrdG9wTm90aWZpY2F0aW9uc0F2YWlsYWJsZSA9ICEhd2luZG93Lk5vdGlmaWNhdGlvblxuICAgICRzY29wZS5ub3RpZmljYXRpb25zUGVybWl0dGVkID0gd2luZG93Lk5vdGlmaWNhdGlvbiBhbmQgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnXG4gICAgTm90aWZpY2F0aW9uU2VydmljZS5kZXNrdG9wTm90aWZpY2F0aW9uc0Rpc2FibGVkID0gJHNjb3BlLmxvY2FsU2V0dGluZ3MuZGVza3RvcE5vdGlmaWNhdGlvbnNEaXNhYmxlZFxuICAgIE5vdGlmaWNhdGlvblNlcnZpY2UuYXVkaW9Ob3RpZmljYXRpb25zRGlzYWJsZWQgPSAkc2NvcGUubG9jYWxTZXR0aW5ncy5hdWRpb05vdGlmaWNhdGlvbnNEaXNhYmxlZFxuXG4gICAgJHNjb3BlLnNldEF1ZGlvTm90aWZpY2F0aW9uc0Rpc2FibGVkID0gKGRpc2FibGVkKSAtPlxuICAgICAgJHNjb3BlLnNhdmVMb2NhbFNldHRpbmcoJ2F1ZGlvTm90aWZpY2F0aW9uc0Rpc2FibGVkJywgZGlzYWJsZWQpXG4gICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLmF1ZGlvTm90aWZpY2F0aW9uc0Rpc2FibGVkID0gZGlzYWJsZWRcblxuICAgICRzY29wZS5zZXREZXNrdG9wTm90aWZpY2F0aW9uc0Rpc2FibGVkID0gKGRpc2FibGVkKSAtPlxuICAgICAgJHNjb3BlLnNhdmVMb2NhbFNldHRpbmcgJ2Rlc2t0b3BOb3RpZmljYXRpb25zRGlzYWJsZWQnLCBkaXNhYmxlZFxuICAgICAgJHNjb3BlLnNhdmVMb2NhbFNldHRpbmcoJ2Rlc2t0b3BOb3RpZmljYXRpb25zTm90Tm93JywgZmFsc2UpIGlmIGRpc2FibGVkXG4gICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLmRlc2t0b3BOb3RpZmljYXRpb25zRGlzYWJsZWQgPSBkaXNhYmxlZFxuICAgICAgaWYgIWRpc2FibGVkXG4gICAgICAgIGlmIHdpbmRvdy5Ob3RpZmljYXRpb25cbiAgICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24gKHN0YXR1cykgLT5cbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgJHNjb3BlLm5vdGlmaWNhdGlvbnNQZXJtaXR0ZWQgPSBzdGF0dXMgPT0gJ2dyYW50ZWQnXG4gICAgICAgICAgICAgICRzY29wZS5lbmFibGVOb3RpZmljYXRpb25zRmFpbGVkID0gISRzY29wZS5ub3RpZmljYXRpb25zUGVybWl0dGVkXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkc2NvcGUuZW5hYmxlTm90aWZpY2F0aW9uc0ZhaWxlZCA9IHRydWVcbl1cbiJdfQ==

(function() {
  angular.module('irisAngular').directive('scrollOnClick', function() {
    return function(scope, elem, attr) {
      return elem.on('click', function(e) {
        e.currentTarget.blur();
        return $("html,body").animate({
          scrollTop: 0
        }, "slow");
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9zY3JvbGxvbmNsaWNrLmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL3Njcm9sbG9uY2xpY2suY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0EsQ0FBQyxTQURELENBQ1csZUFEWCxFQUM0QixRQUFBLENBQUEsQ0FBQTtXQUMxQixRQUFBLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkLENBQUE7YUFDRSxJQUFJLENBQUMsRUFBTCxDQUFRLE9BQVIsRUFBaUIsUUFBQSxDQUFDLENBQUQsQ0FBQTtRQUNmLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBaEIsQ0FBQTtlQUNBLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxPQUFmLENBQXVCO1VBQUMsU0FBQSxFQUFXO1FBQVosQ0FBdkIsRUFBdUMsTUFBdkM7TUFGZSxDQUFqQjtJQURGO0VBRDBCLENBRDVCO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4uZGlyZWN0aXZlICdzY3JvbGxPbkNsaWNrJywgLT5cbiAgKHNjb3BlLCBlbGVtLCBhdHRyKSAtPlxuICAgIGVsZW0ub24gJ2NsaWNrJywgKGUpIC0+XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuYmx1cigpXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIFwic2xvd1wiKVxuIl19

(function() {
  'use strict';
  // Identities controller
  angular.module('irisAngular').controller('IdentitiesController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    '$document',
    '$stateParams',
    '$transitions',
    '$location',
    '$http',
    '$q',
    '$timeout',
    '$uibModal',
    // 'Authentication'
    'config',
    'localStorageService',
    'focus',
    'NotificationService',
    function($scope,
    $state,
    $rootScope,
    $window,
    $document,
    $stateParams,
    $transitions,
    $location,
    $http,
    $q,
    $timeout,
    $uibModal,
    config,
    localStorageService,
    focus,
    NotificationService) { //, Authentication
      var checkEmptyChats,
    load,
    loadChatMessages,
    s,
    thumbsDownObj,
    thumbsUpObj;
      $scope.newEntry = {};
      $scope.activeTab = 1;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.sent = [];
      $scope.received = {
        list: [],
        seen: {}
      };
      $scope.attributes = [];
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
        options: {
          floor: -3,
          ceil: 3,
          hidePointerLabels: true,
          hideLimitLabels: true,
          disableAnimation: true
        }
      };
      s = $location.search();
      if (s.share) {
        $scope.share = true;
      }
      if (s.stream) {
        $scope.stream = true;
      }
      if ($scope.query.term.length && $state.is('identities.list')) {
        $scope.query.term = '';
        $scope.search();
      }
      if ($state.is('identities.show')) {
        $scope.filters.maxDistance = 0;
        $scope.filters.type = null;
        if ($scope.stream && !$scope.videoChatModal) {
          $scope.openVideoChatModal();
        }
      }
      $scope.addEntry = function(event,
    entry) {
        var linkTo,
    params;
        if (entry.email) {
          linkTo = {
            type: 'email',
            value: entry.email
          };
        } else if (entry.url) {
          linkTo = {
            type: 'url',
            value: entry.url
          };
        } else {
          linkTo = $window.irisLib.Attribute.getUuid();
          entry.uuid = linkTo.value;
        }
        params = {
          type: 'verification',
          recipient: entry
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
      $scope.createChat = function(chatName) {
        var msg,
    uuid;
        if (!(chatName && chatName.length > 0)) {
          return;
        }
        uuid = $window.irisLib.Attribute.getUuid().value;
        $scope.irisIndex.gun.user().get('iris').get('chatMessagesByUuid').get(uuid).put({});
        msg = {
          type: 'verification',
          recipient: {
            uuid: uuid,
            name: chatName,
            type: 'group'
          }
        };
        $scope.createMessage(void 0,
    msg);
        return $state.go('chats.show',
    {
          type: 'uuid',
          value: uuid
        });
      };
      $scope.guessAttributeType = function() {
        if ($scope.newVerification.value.length) {
          $scope.newVerification.type = $window.irisLib.Attribute.guessTypeOf($scope.newVerification.value);
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
          recipient = {name};
          recipient[$scope.idType] = $scope.idValue;
          $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            return $scope.irisIndex.addMessage(m);
          });
          return $scope.nameAdded = true;
        } else {
          $scope.addingName = true;
          return focus('addNameFocus');
        }
      };
      $scope.getAttributes = function() {
        return $scope.identity.gun.get('attrs').open(function(attrs) {
          var a,
    alpha,
    attributes,
    c,
    i,
    len,
    mostConfirmations,
    percentage,
    ref;
          attributes = attrs || [];
          if (attributes.length > 0) {
            c = attributes[0];
            mostConfirmations = c.verifications;
          } else {
            mostConfirmations = 1;
          }
          $scope.attributes = Object.values(attributes);
          ref = $scope.attributes;
          for (i = 0, len = ref.length; i < len; i++) {
            a = ref[i];
            if (!(a.type && a.value)) {
              return;
            }
            a.attr = new $window.irisLib.Attribute(a.type,
    a.value);
            a.isCurrent = new $window.irisLib.Attribute($scope.idType,
    $scope.idValue).equals(a.attr);
            a.order = a.isCurrent ? 2e308 : (a.verifications || a.conf) - 2 * (a.unverifications || a.ref);
            if (a.isCurrent) {
              a.rowClass = 'cursor-default';
            }
            switch (a.type) {
              case 'email':
                a.iconStyle = 'glyphicon glyphicon-envelope';
                a.btnStyle = 'btn-success';
                a.link = 'mailto:' + a.value;
                a.quickContact = true;
                break;
              case 'bitcoin_address':
              case 'bitcoin':
                a.iconStyle = 'fa fa-bitcoin';
                a.btnStyle = 'btn-primary';
                a.link = 'https://blockchain.info/address/' + a.value;
                a.quickContact = true;
                break;
              case 'gpg_fingerprint':
              case 'gpg_keyid':
                a.iconStyle = 'fa fa-key';
                a.btnStyle = 'btn-default';
                a.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + a.value;
                break;
              case 'account':
                a.iconStyle = 'fa fa-at';
                break;
              case 'nickname':
                $scope.identity.hasProperName = true;
                a.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'name':
                $scope.identity.hasProperName = true;
                a.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'tel':
              case 'phone':
                a.iconStyle = 'glyphicon glyphicon-earphone';
                a.btnStyle = 'btn-success';
                a.link = 'tel:' + a.value;
                a.quickContact = true;
                break;
              case 'keyID':
                a.iconStyle = 'fa fa-key';
                break;
              case 'coverPhoto':
                if (a.value.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                  $scope.ipfsGet(a.value).then(function(coverPhoto) {
                    return $scope.coverPhoto = $scope.coverPhoto || {
                      'background-image': 'url(data:image;base64,' + coverPhoto.toString('base64') + ')'
                    };
                  });
                }
                break;
              case 'url':
                a.link = a.value;
                if (a.value.indexOf('facebook.com/') > -1) {
                  a.iconStyle = 'fab fa-facebook';
                  a.btnStyle = 'btn-facebook';
                  a.link = a.value;
                  a.linkName = a.value.split('facebook.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('twitter.com/') > -1) {
                  a.iconStyle = 'fab fa-twitter';
                  a.btnStyle = 'btn-twitter';
                  a.link = a.value;
                  a.linkName = a.value.split('twitter.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('plus.google.com/') > -1) {
                  a.iconStyle = 'fab fa-google-plus';
                  a.btnStyle = 'btn-google-plus';
                  a.link = a.value;
                  a.linkName = a.value.split('plus.google.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('linkedin.com/') > -1) {
                  a.iconStyle = 'fab fa-linkedin';
                  a.btnStyle = 'btn-linkedin';
                  a.link = a.value;
                  a.linkName = a.value.split('linkedin.com/')[1];
                  a.quickContact = true;
                } else if (a.value.indexOf('github.com/') > -1) {
                  a.iconStyle = 'fab fa-github';
                  a.btnStyle = 'btn-github';
                  a.link = a.value;
                  a.linkName = a.value.split('github.com/')[1];
                  a.quickContact = true;
                } else {
                  a.iconStyle = 'glyphicon glyphicon-link';
                  a.btnStyle = 'btn-default';
                }
                break;
              default:
                a.iconStyle = 'glyphicon glyphicon-star';
            }
            if (a.value && a.value.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
              a.link = 'https://ipfs.io' + a.value;
              a.linkName = a.value;
              a.iconStyle = 'glyphicon glyphicon-link';
              a.btnStyle = 'btn-default';
            }
            if (a.verifications + a.unverifications > 0) {
              percentage = a.verifications * 100 / (a.verifications + a.unverifications);
              if (percentage >= 80) {
                alpha = a.verifications / mostConfirmations * 0.7 + 0.3;
              // a.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
              } else if (percentage >= 60) {
                a.rowClass = 'warning';
              } else {
                a.rowClass = 'danger';
              }
            }
            $scope.hasQuickContacts = $scope.hasQuickContacts || a.quickContact;
          }
          return $scope.attributesLength = $scope.attributes.length;
        });
      };
      $scope.attributeClicked = function(event,
    attr) {
        var a,
    hasAttr1,
    hasAttr2,
    i,
    j,
    len,
    len1,
    msg,
    ref,
    ref1,
    ref2;
        if (attr.connectingMsgs) {
          return attr.collapse = !attr.collapse;
        } else {
          attr.connectingMsgs = [];
          ref = $scope.received.list;
          for (i = 0, len = ref.length; i < len; i++) {
            msg = ref[i];
            if ((ref1 = msg.signedData.type) !== 'verification' && ref1 !== 'unverification' && ref1 !== 'verify_identity' && ref1 !== 'unverify_identity') {
              continue;
            }
            hasAttr1 = hasAttr2 = false;
            ref2 = msg.getRecipientArray();
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              a = ref2[j];
              hasAttr1 = hasAttr1 || a.type === attr.type && a.value === attr.value;
              hasAttr2 = hasAttr2 || a.type === $scope.idType && a.value === $scope.idValue;
              if (hasAttr1 && hasAttr2) {
                attr.connectingMsgs.push(msg);
                break;
              }
            }
          }
          return attr.collapse = !attr.collapse;
        }
      };
      $scope.getSentMsgs = function() {
        var callback,
    cursor;
        if (!($scope.identity && $scope.irisIndex)) {
          return;
        }
        $scope.sent = [];
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        callback = function(msg) {
          $scope.processMessages([msg],
    {
            authorIsSelf: true
          });
          return $scope.sent.push(msg);
        };
        return $scope.identity.sent({callback});
      };
      $scope.getReceivedMsgs = function() {
        var callback,
    cursor;
        if (!($scope.identity && $scope.irisIndex)) {
          return;
        }
        $scope.received = {
          list: [],
          seen: {}
        };
        cursor = $scope.received.list.length ? $scope.received.list[$scope.received.list.length - 1].cursor : '';
        callback = function(msg) {
          if ($scope.received.seen[msg.getHash()]) {
            return;
          }
          $scope.processMessages([msg],
    {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            var a,
    i,
    len,
    ref;
            if (msg.isPositive()) {
              if (!msg.linkToAuthor) {
                msg.authorArray = msg.getAuthorArray();
                ref = msg.authorArray;
                for (i = 0, len = ref.length; i < len; i++) {
                  a = ref[i];
                  if (!msg.linkToAuthor) {
                    msg.linkToAuthor = a;
                  }
                }
              }
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
            $scope.received.list.push(msg);
            return $scope.received.seen[msg.getHash()] = true;
          });
        };
        return $scope.identity.received({callback,
    cursor});
      };
      $scope.setFilters = function(filters) {
        return angular.extend($scope.filters,
    filters);
      };
      $scope.uploadCoverPhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          recipient = {
            coverPhoto: '/ipfs/' + files[0].path
          };
          recipient[$scope.idType] = $scope.idValue;
          return $window.irisLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.irisIndex.addMessage(m);
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.openSharePageModal = function() {
        return $scope.openModal('sharePageModal',
    {
          templateUrl: 'app/identities/share.modal.html',
          size: 'md'
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
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.showChatButton = !$scope.isCurrentUser && ($scope.idType === 'keyID' || $scope.idType === 'uuid');
      $scope.findOne = function() {
        if (!$scope.irisIndex) {
          return;
        }
        $scope.idAttr = new $window.irisLib.Attribute($scope.idType,
    $scope.idValue);
        $scope.idUrl = $scope.getIdUrl($scope.idType,
    $scope.idValue);
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        if ($scope.isCurrentUser && $state.is('identities.show')) {
          NotificationService.markPostsSeen();
        }
        if ($state.includes('chats')) {
          NotificationService.markChatsSeen();
        }
        $scope.isUniqueType = function() {
          return $window.irisLib.Attribute.isUniqueType($scope.idType) || $scope.idType === 'channel';
        };
        if (!$scope.isUniqueType) {
          $state.go('identities.list',
    {
            search: $scope.idValue
          });
          if ($scope.tabs) {
            $scope.tabs[2].active = true;
          }
        }
        if ($state.is('identities.show')) {
          $scope.setPageTitle($scope.idValue);
        }
        $scope.identity = $scope.irisIndex.get($scope.idType,
    $scope.idValue); // , true)
        $scope.setIdentityNames($scope.identity,
    false,
    true);
        $scope.identity.gun.on(function(data) {
          return $scope.identity.data = data;
        });
        $scope.getAttributes();
        $scope.getSentMsgs();
        $scope.getReceivedMsgs();
        return $scope.identity.gun.get('scores').open(function(scores) {
          return $scope.scores = scores;
        });
      };
      checkEmptyChats = function() { // hack for resetting broken chats
        var chat,
    i,
    len,
    ref,
    results;
        ref = $scope.chats;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          chat = ref[i];
          if (chat.idType === 'keyID' && chat.chat && !chat.latest) {
            results.push(chat.chat = $scope.getPrivateChat(chat));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      loadChatMessages = function() {
        var onMessage,
    setUuidLastSeenTime,
    visibilityChanged;
        checkEmptyChats();
        $scope.chatMessages = [];
        $scope.seenChatMessages = {};
        setUuidLastSeenTime = function() {
          var time;
          time = new Date().toISOString();
          return $scope.irisIndex.gun.user().get('iris').get('chatMessagesByUuid').get($scope.idValue).get('msgsLastSeenTime').put(time);
        };
        onMessage = function(msg) {
          return $scope.$apply(function() {
            if (msg.hash) {
              if ($scope.seenChatMessages[msg.hash]) {
                return;
              }
              $scope.seenChatMessages[msg.hash] = true;
            }
            if (msg) {
              $scope.chatMessages.push(msg);
            }
            if ($scope.idType === 'uuid') {
              setUuidLastSeenTime();
            }
            if ($scope.chat && (msg.time > $scope.chat.myMsgsLastSeenTime) && !$document.hidden) {
              return $scope.chat.setMyMsgsLastSeenTime();
            }
          });
        };
        if ($scope.idType === 'keyID') {
          if ($scope.authentication.user) {
            $scope.chat = new $window.irisLib.Chat({
              onMessage: onMessage,
              key: $scope.privateKey,
              gun: $scope.gun,
              participants: $scope.idValue
            });
            $scope.chat.seen = {};
            visibilityChanged = function() {
              if ($document.visibilityState === 'visible') {
                return $scope.chat.setMyMsgsLastSeenTime();
              }
            };
            $document.on('visibilitychange',
    visibilityChanged);
            $scope.$on('$destroy',
    function() {
              return $document.off('visibilitychange',
    visibilityChanged);
            });
            $scope.chat.setMyMsgsLastSeenTime();
            $scope.chat.getMyMsgsLastSeenTime(function(time) {
              return $scope.$apply(function() {
                return $scope.chat.myMsgsLastSeenTime = time;
              });
            });
            $scope.chat.getTheirMsgsLastSeenTime(function(time) {
              return $scope.$apply(function() {
                return $scope.chat.theirMsgsLastSeenTime = time;
              });
            });
            $scope.sendChatMessage = function(text) {
              var m,
    t;
              t = new Date().toISOString();
              m = {
                author: $scope.viewpoint.identity.primaryName,
                text: text,
                time: t
              };
              return $scope.chat.send(m);
            };
          }
          $scope.irisIndex.getOnline($scope.idValue,
    function(res) {
            $scope.isOnline = res.isOnline;
            if (!res.isOnline) {
              return $scope.lastActive = res.lastActive;
            }
          });
        }
        if ($scope.idType === 'uuid') {
          $scope.irisIndex.getChatMsgs($scope.idValue,
    {
            callback: onMessage
          });
          $scope.sendChatMessage = function(text) {
            var msg;
            msg = {};
            msg.type = 'chat';
            msg.text = text;
            msg.recipient = {
              uuid: $scope.idValue
            };
            $scope.createMessage(void 0,
    msg);
            return console.log('send public chat msg',
    msg);
          };
          if ($scope.authentication.user) {
            visibilityChanged = function() {
              if ($document.visibilityState === 'visible') {
                return setUuidLastSeenTime();
              }
            };
            $document.on('visibilitychange',
    visibilityChanged);
            return setUuidLastSeenTime();
          }
        }
      };
      load = function() {
        if ($scope.irisIndex) {
          if ($state.is('identities.show')) {
            $scope.findOne();
          }
          if ($state.is('identities.create')) {
            focus('idNameFocus');
            $scope.newEntry.name = $scope.capitalizeWords($scope.query.term);
          }
          if ($state.is('chats.show')) {
            $scope.findOne();
            return loadChatMessages();
          }
        }
      };
      $scope.$watch('irisIndex',
    load);
      $scope.qrScanSuccess = function(data) {
        var a,
    json,
    type,
    value;
        a = data.split('/');
        if (a.length > 4) {
          type = decodeURIComponent(a[a.length - 2]);
          value = decodeURIComponent(a[a.length - 1].split('?')[0]);
          console.log('value',
    value);
          console.log('data',
    data);
          return $state.go('identities.show',
    {type,
    value});
        } else {
          json = JSON.parse(data);
          console.log('read qr json',
    json);
          if (json.priv && json.epriv && !$scope.authentication.user) {
            return $scope.loginWithKey(data,
    void 0,
    true);
          } else {
            return console.log('Unrecognized identity url',
    data);
          }
        }
      };
      return $scope.qrScanError = function(e) {};
    }
  ]);

  // this is called each time a QR code is not found on the camera
// console.error e

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQTZCLENBQUMsVUFBOUIsQ0FBeUMsc0JBQXpDLEVBQWlFO0lBQy9ELFFBRCtEO0lBRS9ELFFBRitEO0lBRy9ELFlBSCtEO0lBSS9ELFNBSitEO0lBSy9ELFdBTCtEO0lBTS9ELGNBTitEO0lBTy9ELGNBUCtEO0lBUS9ELFdBUitEO0lBUy9ELE9BVCtEO0lBVS9ELElBVitEO0lBVy9ELFVBWCtEO0lBWS9ELFdBWitEOztJQWMvRCxRQWQrRDtJQWUvRCxxQkFmK0Q7SUFnQi9ELE9BaEIrRDtJQWlCL0QscUJBakIrRDtJQWtCL0QsUUFBQSxDQUFDLE1BQUQ7SUFBUyxNQUFUO0lBQWlCLFVBQWpCO0lBQTZCLE9BQTdCO0lBQXNDLFNBQXRDO0lBQWlELFlBQWpEO0lBQStELFlBQS9EO0lBQTZFLFNBQTdFO0lBQXdGLEtBQXhGO0lBQStGLEVBQS9GO0lBQW1HLFFBQW5HO0lBQTZHLFNBQTdHO0lBQXdILE1BQXhIO0lBQ0EsbUJBREE7SUFDcUIsS0FEckI7SUFDNEIsbUJBRDVCLENBQUEsRUFBQTtBQUVFLFVBQUEsZUFBQTtJQUFBLElBQUE7SUFBQSxnQkFBQTtJQUFBLENBQUE7SUFBQSxhQUFBO0lBQUE7TUFBQSxNQUFNLENBQUMsUUFBUCxHQUFrQixDQUFBO01BQ2xCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQ25CLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFFBQUEsQ0FBQyxLQUFELENBQUE7ZUFBVyxNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUE5QjtNQUNyQixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FDRTtRQUFBLElBQUEsRUFBTSxFQUFOO1FBQ0Es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c2Ugc3RyaWN0J1xuIyBJZGVudGl0aWVzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpcmlzQW5ndWxhcicpLmNvbnRyb2xsZXIgJ0lkZW50aXRpZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHN0YXRlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckZG9jdW1lbnQnXG4gICckc3RhdGVQYXJhbXMnXG4gICckdHJhbnNpdGlvbnMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRxJ1xuICAnJHRpbWVvdXQnXG4gICckdWliTW9kYWwnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJ2ZvY3VzJ1xuICAnTm90aWZpY2F0aW9uU2VydmljZSdcbiAgKCRzY29wZSwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkZG9jdW1lbnQsICRzdGF0ZVBhcmFtcywgJHRyYW5zaXRpb25zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsICR1aWJNb2RhbCwgY29uZmlnLFxuICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLCBmb2N1cywgTm90aWZpY2F0aW9uU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUubmV3RW50cnkgPSB7fVxuICAgICRzY29wZS5hY3RpdmVUYWIgPSAxXG4gICAgJHNjb3BlLmFjdGl2YXRlVGFiID0gKHRhYklkKSAtPiAkc2NvcGUuYWN0aXZlVGFiID0gdGFiSWRcbiAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgJHNjb3BlLnJlY2VpdmVkID1cbiAgICAgIGxpc3Q6IFtdXG4gICAgICBzZWVuOiB7fVxuICAgICRzY29wZS5hdHRyaWJ1dGVzID0gW11cbiAgICB0aHVtYnNVcE9iaiA9IHt9XG4gICAgdGh1bWJzRG93bk9iaiA9IHt9XG4gICAgJHNjb3BlLnRodW1ic1VwID0gW11cbiAgICAkc2NvcGUudGh1bWJzRG93biA9IFtdXG4gICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMgPSBbXVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgJHNjb3BlLmNvbGxhcHNlTGV2ZWwgPSB7fVxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcbiAgICAkc2NvcGUuc2xpZGVyID1cbiAgICAgIG9wdGlvbnM6XG4gICAgICAgIGZsb29yOiAtM1xuICAgICAgICBjZWlsOiAzXG4gICAgICAgIGhpZGVQb2ludGVyTGFiZWxzOiB0cnVlXG4gICAgICAgIGhpZGVMaW1pdExhYmVsczogdHJ1ZVxuICAgICAgICBkaXNhYmxlQW5pbWF0aW9uOiB0cnVlXG5cbiAgICBzID0gJGxvY2F0aW9uLnNlYXJjaCgpXG4gICAgJHNjb3BlLnNoYXJlID0gdHJ1ZSBpZiBzLnNoYXJlXG4gICAgJHNjb3BlLnN0cmVhbSA9IHRydWUgaWYgcy5zdHJlYW1cblxuICAgIGlmICRzY29wZS5xdWVyeS50ZXJtLmxlbmd0aCBhbmQgJHN0YXRlLmlzICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAkc2NvcGUuc2VhcmNoKClcblxuICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4RGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gbnVsbFxuICAgICAgJHNjb3BlLm9wZW5WaWRlb0NoYXRNb2RhbCgpIGlmICRzY29wZS5zdHJlYW0gYW5kIG5vdCAkc2NvcGUudmlkZW9DaGF0TW9kYWxcblxuICAgICRzY29wZS5hZGRFbnRyeSA9IChldmVudCwgZW50cnkpIC0+XG4gICAgICBpZiBlbnRyeS5lbWFpbFxuICAgICAgICBsaW5rVG8gPSB7dHlwZTonZW1haWwnLCB2YWx1ZTogZW50cnkuZW1haWx9XG4gICAgICBlbHNlIGlmIGVudHJ5LnVybFxuICAgICAgICBsaW5rVG8gPSB7dHlwZTondXJsJywgdmFsdWU6IGVudHJ5LnVybH1cbiAgICAgIGVsc2VcbiAgICAgICAgbGlua1RvID0gJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5nZXRVdWlkKClcbiAgICAgICAgZW50cnkudXVpZCA9IGxpbmtUby52YWx1ZVxuICAgICAgcGFyYW1zID1cbiAgICAgICAgdHlwZTogJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgcmVjaXBpZW50OiBlbnRyeVxuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UoZXZlbnQsIHBhcmFtcykudGhlbiAocmVzcG9uc2UpIC0+XG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgbGlua1RvXG4gICAgICAsIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgXCJlcnJvclwiLCBlcnJvclxuXG4gICAgJHNjb3BlLmNyZWF0ZUNoYXQgPSAoY2hhdE5hbWUpIC0+XG4gICAgICByZXR1cm4gdW5sZXNzIGNoYXROYW1lIGFuZCBjaGF0TmFtZS5sZW5ndGggPiAwXG4gICAgICB1dWlkID0gJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5nZXRVdWlkKCkudmFsdWVcbiAgICAgICRzY29wZS5pcmlzSW5kZXguZ3VuLnVzZXIoKS5nZXQoJ2lyaXMnKS5nZXQoJ2NoYXRNZXNzYWdlc0J5VXVpZCcpLmdldCh1dWlkKS5wdXQoe30pXG4gICAgICBtc2cgPVxuICAgICAgICB0eXBlOiAndmVyaWZpY2F0aW9uJ1xuICAgICAgICByZWNpcGllbnQ6XG4gICAgICAgICAgdXVpZDogdXVpZFxuICAgICAgICAgIG5hbWU6IGNoYXROYW1lXG4gICAgICAgICAgdHlwZTogJ2dyb3VwJ1xuICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UodW5kZWZpbmVkLCBtc2cpXG4gICAgICAkc3RhdGUuZ28gJ2NoYXRzLnNob3cnLCB7IHR5cGU6ICd1dWlkJywgdmFsdWU6IHV1aWQgfVxuXG4gICAgJHNjb3BlLmd1ZXNzQXR0cmlidXRlVHlwZSA9IC0+XG4gICAgICBpZiAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlLmxlbmd0aFxuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAkd2luZG93LmlyaXNMaWIuQXR0cmlidXRlLmd1ZXNzVHlwZU9mKCRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUpXG4gICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGVcbiAgICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5tYXRjaCAvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXCR8XFwlfFxcXnxcXCZ8XFwqfFxcKHxcXCl8XFwrfFxcPXxcXFt8XFx7fFxcXXxcXH18XFx8fFxcXFx8XFwnfFxcPHxcXCx8XFwufFxcPnxcXD98XFwvfFxcXCJcInxcXDt8XFw6L1xuICAgICAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJ25hbWUnXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkTmFtZSA9IChuYW1lKSAtPlxuICAgICAgaWYgbmFtZVxuICAgICAgICByZWNpcGllbnQgPSB7bmFtZX1cbiAgICAgICAgcmVjaXBpZW50WyRzY29wZS5pZFR5cGVdID0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgJHdpbmRvdy5pcmlzTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaXJpc0luZGV4LmFkZE1lc3NhZ2UobSlcbiAgICAgICAgJHNjb3BlLm5hbWVBZGRlZCA9IHRydWVcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmFkZGluZ05hbWUgPSB0cnVlXG4gICAgICAgIGZvY3VzKCdhZGROYW1lRm9jdXMnKVxuXG4gICAgJHNjb3BlLmdldEF0dHJpYnV0ZXMgPSAtPlxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgIGF0dHJpYnV0ZXMgPSBhdHRycyBvciBbXVxuICAgICAgICBpZiBhdHRyaWJ1dGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICBjID0gYXR0cmlidXRlc1swXVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gYy52ZXJpZmljYXRpb25zXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IDFcbiAgICAgICAgJHNjb3BlLmF0dHJpYnV0ZXMgPSBPYmplY3QudmFsdWVzKGF0dHJpYnV0ZXMpXG4gICAgICAgIGZvciBhIGluICRzY29wZS5hdHRyaWJ1dGVzXG4gICAgICAgICAgcmV0dXJuIHVubGVzcyBhLnR5cGUgYW5kIGEudmFsdWVcbiAgICAgICAgICBhLmF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZShhLnR5cGUsIGEudmFsdWUpXG4gICAgICAgICAgYS5pc0N1cnJlbnQgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSkuZXF1YWxzKGEuYXR0cilcbiAgICAgICAgICBhLm9yZGVyID0gaWYgYS5pc0N1cnJlbnQgdGhlbiBJbmZpbml0eSBlbHNlIChhLnZlcmlmaWNhdGlvbnMgb3IgYS5jb25mKSAtIDIgKiAoYS51bnZlcmlmaWNhdGlvbnMgb3IgYS5yZWYpXG4gICAgICAgICAgYS5yb3dDbGFzcyA9ICdjdXJzb3ItZGVmYXVsdCcgaWYgYS5pc0N1cnJlbnRcbiAgICAgICAgICBzd2l0Y2ggYS50eXBlXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgYS5saW5rID0gJ21haWx0bzonICsgYS52YWx1ZVxuICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2JpdGNvaW5fYWRkcmVzcycsICdiaXRjb2luJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYSBmYS1iaXRjb2luJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1wcmltYXJ5J1xuICAgICAgICAgICAgICBhLmxpbmsgPSAnaHR0cHM6Ly9ibG9ja2NoYWluLmluZm8vYWRkcmVzcy8nICsgYS52YWx1ZVxuICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2dwZ19maW5nZXJwcmludCcsICdncGdfa2V5aWQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgICAgYS5saW5rID0gJ2h0dHBzOi8vcGdwLm1pdC5lZHUvcGtzL2xvb2t1cD9vcD1nZXQmc2VhcmNoPTB4JyArIGEudmFsdWVcbiAgICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSAndGVsOicgKyBhLnZhbHVlXG4gICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAna2V5SUQnXG4gICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgIHdoZW4gJ2NvdmVyUGhvdG8nXG4gICAgICAgICAgICAgIGlmIGEudmFsdWUubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgICAkc2NvcGUuaXBmc0dldChhLnZhbHVlKS50aGVuIChjb3ZlclBob3RvKSAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChkYXRhOmltYWdlO2Jhc2U2NCwnICsgY292ZXJQaG90by50b1N0cmluZygnYmFzZTY0JykgKyAnKScgfVxuICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgIGlmIGEudmFsdWUuaW5kZXhPZignZmFjZWJvb2suY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYWIgZmEtZmFjZWJvb2snXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZmFjZWJvb2snXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ3R3aXR0ZXIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdmYWIgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgndHdpdHRlci5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBhLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBhLnZhbHVlLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmFiIGZhLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICAgIGEubGluayA9IGEudmFsdWVcbiAgICAgICAgICAgICAgICBhLmxpbmtOYW1lID0gYS52YWx1ZS5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgYS52YWx1ZS5pbmRleE9mKCdsaW5rZWRpbi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2ZhYiBmYS1saW5rZWRpbidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1saW5rZWRpbidcbiAgICAgICAgICAgICAgICBhLmxpbmsgPSBhLnZhbHVlXG4gICAgICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWUuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGEucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGEudmFsdWUuaW5kZXhPZignZ2l0aHViLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZmFiIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgICBhLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgICAgYS5saW5rID0gYS52YWx1ZVxuICAgICAgICAgICAgICAgIGEubGlua05hbWUgPSBhLnZhbHVlLnNwbGl0KCdnaXRodWIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgYS5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICAgICAgYS5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgYS5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyJ1xuICAgICAgICAgIGlmIGEudmFsdWUgYW5kIGEudmFsdWUubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgIGEubGluayA9ICdodHRwczovL2lwZnMuaW8nICsgYS52YWx1ZVxuICAgICAgICAgICAgYS5saW5rTmFtZSA9IGEudmFsdWVcbiAgICAgICAgICAgIGEuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgIGEuYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgaWYgYS52ZXJpZmljYXRpb25zICsgYS51bnZlcmlmaWNhdGlvbnMgPiAwXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gYS52ZXJpZmljYXRpb25zICogMTAwIC8gKGEudmVyaWZpY2F0aW9ucyArIGEudW52ZXJpZmljYXRpb25zKVxuICAgICAgICAgICAgaWYgcGVyY2VudGFnZSA+PSA4MFxuICAgICAgICAgICAgICBhbHBoYSA9IGEudmVyaWZpY2F0aW9ucyAvIG1vc3RDb25maXJtYXRpb25zICogMC43ICsgMC4zXG4gICAgICAgICAgICAgICMgYS5yb3dTdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpJ1xuICAgICAgICAgICAgZWxzZSBpZiBwZXJjZW50YWdlID49IDYwXG4gICAgICAgICAgICAgIGEucm93Q2xhc3MgPSAnd2FybmluZydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgYS5yb3dDbGFzcyA9ICdkYW5nZXInXG4gICAgICAgICAgJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgPSAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyBvciBhLnF1aWNrQ29udGFjdFxuICAgICAgICAkc2NvcGUuYXR0cmlidXRlc0xlbmd0aCA9ICRzY29wZS5hdHRyaWJ1dGVzLmxlbmd0aFxuXG4gICAgJHNjb3BlLmF0dHJpYnV0ZUNsaWNrZWQgPSAoZXZlbnQsIGF0dHIpIC0+XG4gICAgICBpZiBhdHRyLmNvbm5lY3RpbmdNc2dzXG4gICAgICAgIGF0dHIuY29sbGFwc2UgPSAhYXR0ci5jb2xsYXBzZVxuICAgICAgZWxzZVxuICAgICAgICBhdHRyLmNvbm5lY3RpbmdNc2dzID0gW11cbiAgICAgICAgZm9yIG1zZyBpbiAkc2NvcGUucmVjZWl2ZWQubGlzdFxuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBtc2cuc2lnbmVkRGF0YS50eXBlIGluIFsndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZpY2F0aW9uJywgJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddXG4gICAgICAgICAgaGFzQXR0cjEgPSBoYXNBdHRyMiA9IGZhbHNlXG4gICAgICAgICAgZm9yIGEgaW4gbXNnLmdldFJlY2lwaWVudEFycmF5KClcbiAgICAgICAgICAgIGhhc0F0dHIxID0gaGFzQXR0cjEgb3IgYS50eXBlID09IGF0dHIudHlwZSBhbmQgYS52YWx1ZSA9PSBhdHRyLnZhbHVlXG4gICAgICAgICAgICBoYXNBdHRyMiA9IGhhc0F0dHIyIG9yIGEudHlwZSA9PSAkc2NvcGUuaWRUeXBlIGFuZCBhLnZhbHVlID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgICBpZiBoYXNBdHRyMSBhbmQgaGFzQXR0cjJcbiAgICAgICAgICAgICAgYXR0ci5jb25uZWN0aW5nTXNncy5wdXNoIG1zZ1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICBhdHRyLmNvbGxhcHNlID0gIWF0dHIuY29sbGFwc2VcblxuICAgICRzY29wZS5nZXRTZW50TXNncyA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGl0eSBhbmQgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnNlbnQubGVuZ3RoIHRoZW4gJHNjb3BlLnNlbnRbJHNjb3BlLnNlbnQubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgIGNhbGxiYWNrID0gKG1zZykgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbbXNnXSwgeyBhdXRob3JJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuc2VudC5wdXNoIG1zZ1xuXG4gICAgICAkc2NvcGUuaWRlbnRpdHkuc2VudCh7Y2FsbGJhY2t9KVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pZGVudGl0eSBhbmQgJHNjb3BlLmlyaXNJbmRleFxuICAgICAgJHNjb3BlLnJlY2VpdmVkID1cbiAgICAgICAgbGlzdDogW11cbiAgICAgICAgc2Vlbjoge31cbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5yZWNlaXZlZC5saXN0Lmxlbmd0aCB0aGVuICRzY29wZS5yZWNlaXZlZC5saXN0WyRzY29wZS5yZWNlaXZlZC5saXN0Lmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICBjYWxsYmFjayA9IChtc2cpIC0+XG4gICAgICAgIHJldHVybiBpZiAkc2NvcGUucmVjZWl2ZWQuc2Vlblttc2cuZ2V0SGFzaCgpXVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFttc2ddLCB7IHJlY2lwaWVudElzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBpZiBtc2cuaXNQb3NpdGl2ZSgpXG4gICAgICAgICAgICB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICAgICAgICBtc2cuYXV0aG9yQXJyYXkgPSBtc2cuZ2V0QXV0aG9yQXJyYXkoKVxuICAgICAgICAgICAgICBmb3IgYSBpbiBtc2cuYXV0aG9yQXJyYXlcbiAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gYSB1bmxlc3MgbXNnLmxpbmtUb0F1dGhvclxuICAgICAgICAgICAgaWYgJHNjb3BlLnRodW1ic1VwLmxlbmd0aCA8IDEyIGFuZCBub3QgdGh1bWJzVXBPYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV1cbiAgICAgICAgICAgICAgdGh1bWJzVXBPYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSB0cnVlXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNVcC5wdXNoIG1zZ1xuICAgICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzVXAgPSB0cnVlXG4gICAgICAgICAgZWxzZSBpZiBtc2cuaXNOZWdhdGl2ZSgpIGFuZCAkc2NvcGUudGh1bWJzRG93bi5sZW5ndGggPCAxMiBhbmQgbm90IHRodW1ic0Rvd25PYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV1cbiAgICAgICAgICAgIHRodW1ic0Rvd25PYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93bi5wdXNoIG1zZ1xuICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic0Rvd24gPSB0cnVlXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmxpc3QucHVzaCBtc2dcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuc2Vlblttc2cuZ2V0SGFzaCgpXSA9IHRydWVcbiAgICAgICRzY29wZS5pZGVudGl0eS5yZWNlaXZlZCh7Y2FsbGJhY2ssIGN1cnNvcn0pXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcblxuICAgICRzY29wZS51cGxvYWRDb3ZlclBob3RvID0gKGJsb2IsIGlkZW50aXR5KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoYmxvYikudGhlbiAoZmlsZXMpIC0+XG4gICAgICAgIHJlY2lwaWVudCA9IHtjb3ZlclBob3RvOiAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGh9XG4gICAgICAgIHJlY2lwaWVudFskc2NvcGUuaWRUeXBlXSA9ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICR3aW5kb3cuaXJpc0xpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpLnRoZW4gKG0pIC0+XG4gICAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5hZGRNZXNzYWdlKG0pXG4gICAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuU2hhcmVQYWdlTW9kYWwgPSAoKSAtPlxuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCAnc2hhcmVQYWdlTW9kYWwnLCB7IHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvc2hhcmUubW9kYWwuaHRtbCcsIHNpemU6ICdtZCcgfVxuXG4gICAgJHNjb3BlLm9wZW5Db3ZlclBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZENvdmVyUGhvdG8sICdVcGxvYWQgY292ZXIgcGhvdG8nLCBmYWxzZSlcblxuICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgJHNjb3BlLnNob3dDaGF0QnV0dG9uID0gISRzY29wZS5pc0N1cnJlbnRVc2VyICYmICgkc2NvcGUuaWRUeXBlID09ICdrZXlJRCcgfHwgJHNjb3BlLmlkVHlwZSA9PSAndXVpZCcpXG5cbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICRzY29wZS5pZEF0dHIgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZSgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSlcbiAgICAgICRzY29wZS5pZFVybCA9ICRzY29wZS5nZXRJZFVybCgkc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZSlcbiAgICAgICRzY29wZS5pc0N1cnJlbnRVc2VyID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uIGFuZFxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciBhbmRcbiAgICAgICAgJHNjb3BlLmlkVHlwZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgYW5kXG4gICAgICAgICRzY29wZS5pZFZhbHVlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UubWFya1Bvc3RzU2VlbigpIGlmICRzY29wZS5pc0N1cnJlbnRVc2VyIGFuZCAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UubWFya0NoYXRzU2VlbigpIGlmICRzdGF0ZS5pbmNsdWRlcyAnY2hhdHMnXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gKCkgLT5cbiAgICAgICAgJHdpbmRvdy5pcmlzTGliLkF0dHJpYnV0ZS5pc1VuaXF1ZVR5cGUoJHNjb3BlLmlkVHlwZSkgb3IgJHNjb3BlLmlkVHlwZSA9PSAnY2hhbm5lbCdcbiAgICAgIGlmICEkc2NvcGUuaXNVbmlxdWVUeXBlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0JywgeyBzZWFyY2g6ICRzY29wZS5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLnRhYnNbMl0uYWN0aXZlID0gdHJ1ZSBpZiAkc2NvcGUudGFic1xuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS5pZGVudGl0eSA9ICRzY29wZS5pcmlzSW5kZXguZ2V0KCRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlKSAjICwgdHJ1ZSlcbiAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5pZGVudGl0eSwgZmFsc2UsIHRydWUpXG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAkc2NvcGUuaWRlbnRpdHkuZGF0YSA9IGRhdGFcbiAgICAgICRzY29wZS5nZXRBdHRyaWJ1dGVzKClcbiAgICAgICRzY29wZS5nZXRTZW50TXNncygpXG4gICAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzKClcbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdzY29yZXMnKS5vcGVuIChzY29yZXMpIC0+XG4gICAgICAgICRzY29wZS5zY29yZXMgPSBzY29yZXNcblxuICAgIGNoZWNrRW1wdHlDaGF0cyA9IC0+ICMgaGFjayBmb3IgcmVzZXR0aW5nIGJyb2tlbiBjaGF0c1xuICAgICAgZm9yIGNoYXQgaW4gJHNjb3BlLmNoYXRzXG4gICAgICAgIGlmIGNoYXQuaWRUeXBlID09ICdrZXlJRCcgYW5kIGNoYXQuY2hhdCBhbmQgbm90IGNoYXQubGF0ZXN0XG4gICAgICAgICAgY2hhdC5jaGF0ID0gJHNjb3BlLmdldFByaXZhdGVDaGF0KGNoYXQpXG5cbiAgICBsb2FkQ2hhdE1lc3NhZ2VzID0gLT5cbiAgICAgIGNoZWNrRW1wdHlDaGF0cygpXG4gICAgICAkc2NvcGUuY2hhdE1lc3NhZ2VzID0gW11cbiAgICAgICRzY29wZS5zZWVuQ2hhdE1lc3NhZ2VzID0ge31cbiAgICAgIHNldFV1aWRMYXN0U2VlblRpbWUgPSAoKSAtPlxuICAgICAgICB0aW1lID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICRzY29wZS5pcmlzSW5kZXguZ3VuLnVzZXIoKS5nZXQoJ2lyaXMnKS5nZXQoJ2NoYXRNZXNzYWdlc0J5VXVpZCcpLmdldCgkc2NvcGUuaWRWYWx1ZSkuZ2V0KCdtc2dzTGFzdFNlZW5UaW1lJykucHV0KHRpbWUpXG4gICAgICBvbk1lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgaWYgbXNnLmhhc2hcbiAgICAgICAgICAgIHJldHVybiBpZiAkc2NvcGUuc2VlbkNoYXRNZXNzYWdlc1ttc2cuaGFzaF1cbiAgICAgICAgICAgICRzY29wZS5zZWVuQ2hhdE1lc3NhZ2VzW21zZy5oYXNoXSA9IHRydWVcbiAgICAgICAgICAkc2NvcGUuY2hhdE1lc3NhZ2VzLnB1c2gobXNnKSBpZiBtc2dcbiAgICAgICAgICBpZiAkc2NvcGUuaWRUeXBlID09ICd1dWlkJ1xuICAgICAgICAgICAgc2V0VXVpZExhc3RTZWVuVGltZSgpXG4gICAgICAgICAgaWYgJHNjb3BlLmNoYXQgYW5kIChtc2cudGltZSA+ICRzY29wZS5jaGF0Lm15TXNnc0xhc3RTZWVuVGltZSkgYW5kIG5vdCAkZG9jdW1lbnQuaGlkZGVuXG4gICAgICAgICAgICAkc2NvcGUuY2hhdC5zZXRNeU1zZ3NMYXN0U2VlblRpbWUoKVxuICAgICAgaWYgJHNjb3BlLmlkVHlwZSA9PSAna2V5SUQnXG4gICAgICAgIGlmICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyXG4gICAgICAgICAgJHNjb3BlLmNoYXQgPSBuZXcgJHdpbmRvdy5pcmlzTGliLkNoYXRcbiAgICAgICAgICAgIG9uTWVzc2FnZTogb25NZXNzYWdlXG4gICAgICAgICAgICBrZXk6ICRzY29wZS5wcml2YXRlS2V5XG4gICAgICAgICAgICBndW46ICRzY29wZS5ndW5cbiAgICAgICAgICAgIHBhcnRpY2lwYW50czogJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAkc2NvcGUuY2hhdC5zZWVuID0ge31cbiAgICAgICAgICB2aXNpYmlsaXR5Q2hhbmdlZCA9ICgpIC0+XG4gICAgICAgICAgICBpZiAkZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09ICd2aXNpYmxlJ1xuICAgICAgICAgICAgICAkc2NvcGUuY2hhdC5zZXRNeU1zZ3NMYXN0U2VlblRpbWUoKVxuICAgICAgICAgICRkb2N1bWVudC5vbigndmlzaWJpbGl0eWNoYW5nZScsIHZpc2liaWxpdHlDaGFuZ2VkKVxuICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgKCkgLT4gJGRvY3VtZW50Lm9mZigndmlzaWJpbGl0eWNoYW5nZScsIHZpc2liaWxpdHlDaGFuZ2VkKSlcbiAgICAgICAgICAkc2NvcGUuY2hhdC5zZXRNeU1zZ3NMYXN0U2VlblRpbWUoKVxuICAgICAgICAgICRzY29wZS5jaGF0LmdldE15TXNnc0xhc3RTZWVuVGltZSAodGltZSkgLT5cbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLmNoYXQubXlNc2dzTGFzdFNlZW5UaW1lID0gdGltZVxuICAgICAgICAgICRzY29wZS5jaGF0LmdldFRoZWlyTXNnc0xhc3RTZWVuVGltZSAodGltZSkgLT5cbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLmNoYXQudGhlaXJNc2dzTGFzdFNlZW5UaW1lID0gdGltZVxuICAgICAgICAgICRzY29wZS5zZW5kQ2hhdE1lc3NhZ2UgPSAodGV4dCkgLT5cbiAgICAgICAgICAgIHQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgIG0gPVxuICAgICAgICAgICAgICBhdXRob3I6ICRzY29wZS52aWV3cG9pbnQuaWRlbnRpdHkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgICB0aW1lOiB0XG4gICAgICAgICAgICAkc2NvcGUuY2hhdC5zZW5kKG0pXG4gICAgICAgICRzY29wZS5pcmlzSW5kZXguZ2V0T25saW5lICRzY29wZS5pZFZhbHVlLCAocmVzKSAtPlxuICAgICAgICAgICRzY29wZS5pc09ubGluZSA9IHJlcy5pc09ubGluZVxuICAgICAgICAgICRzY29wZS5sYXN0QWN0aXZlID0gcmVzLmxhc3RBY3RpdmUgdW5sZXNzIHJlcy5pc09ubGluZVxuICAgICAgaWYgJHNjb3BlLmlkVHlwZSA9PSAndXVpZCdcbiAgICAgICAgJHNjb3BlLmlyaXNJbmRleC5nZXRDaGF0TXNncygkc2NvcGUuaWRWYWx1ZSwge2NhbGxiYWNrOiBvbk1lc3NhZ2V9KVxuICAgICAgICAkc2NvcGUuc2VuZENoYXRNZXNzYWdlID0gKHRleHQpIC0+XG4gICAgICAgICAgbXNnID0ge31cbiAgICAgICAgICBtc2cudHlwZSA9ICdjaGF0J1xuICAgICAgICAgIG1zZy50ZXh0ID0gdGV4dFxuICAgICAgICAgIG1zZy5yZWNpcGllbnQgPSB7dXVpZDogJHNjb3BlLmlkVmFsdWV9XG4gICAgICAgICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UodW5kZWZpbmVkLCBtc2cpXG4gICAgICAgICAgY29uc29sZS5sb2cgJ3NlbmQgcHVibGljIGNoYXQgbXNnJywgbXNnXG4gICAgICAgIGlmICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyXG4gICAgICAgICAgdmlzaWJpbGl0eUNoYW5nZWQgPSAoKSAtPlxuICAgICAgICAgICAgaWYgJGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PSAndmlzaWJsZSdcbiAgICAgICAgICAgICAgc2V0VXVpZExhc3RTZWVuVGltZSgpXG4gICAgICAgICAgJGRvY3VtZW50Lm9uKCd2aXNpYmlsaXR5Y2hhbmdlJywgdmlzaWJpbGl0eUNoYW5nZWQpXG4gICAgICAgICAgc2V0VXVpZExhc3RTZWVuVGltZSgpXG5cbiAgICBsb2FkID0gLT5cbiAgICAgIGlmICRzY29wZS5pcmlzSW5kZXhcbiAgICAgICAgaWYgJHN0YXRlLmlzKCdpZGVudGl0aWVzLnNob3cnKVxuICAgICAgICAgICRzY29wZS5maW5kT25lKClcblxuICAgICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgICAgIGZvY3VzKCdpZE5hbWVGb2N1cycpXG4gICAgICAgICAgJHNjb3BlLm5ld0VudHJ5Lm5hbWUgPSAkc2NvcGUuY2FwaXRhbGl6ZVdvcmRzKCRzY29wZS5xdWVyeS50ZXJtKVxuXG4gICAgICAgIGlmICRzdGF0ZS5pcygnY2hhdHMuc2hvdycpXG4gICAgICAgICAgJHNjb3BlLmZpbmRPbmUoKVxuICAgICAgICAgIGxvYWRDaGF0TWVzc2FnZXMoKVxuICAgICRzY29wZS4kd2F0Y2ggJ2lyaXNJbmRleCcsIGxvYWRcblxuICAgICRzY29wZS5xclNjYW5TdWNjZXNzID0gKGRhdGEpIC0+XG4gICAgICBhID0gZGF0YS5zcGxpdCgnLycpXG4gICAgICBpZiBhLmxlbmd0aCA+IDRcbiAgICAgICAgdHlwZSA9IGRlY29kZVVSSUNvbXBvbmVudChhW2EubGVuZ3RoIC0gMl0pXG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGFbYS5sZW5ndGggLSAxXS5zcGxpdCgnPycpWzBdKVxuICAgICAgICBjb25zb2xlLmxvZyAndmFsdWUnLCB2YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyAnZGF0YScsIGRhdGFcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7dHlwZSwgdmFsdWV9XG4gICAgICBlbHNlXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nICdyZWFkIHFyIGpzb24nLCBqc29uXG4gICAgICAgIGlmIGpzb24ucHJpdiBhbmQganNvbi5lcHJpdiBhbmQgbm90ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyXG4gICAgICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleShkYXRhLCB1bmRlZmluZWQsIHRydWUpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjb25zb2xlLmxvZyAnVW5yZWNvZ25pemVkIGlkZW50aXR5IHVybCcsIGRhdGFcbiAgICAkc2NvcGUucXJTY2FuRXJyb3IgPSAoZSkgLT5cbiAgICAgICMgdGhpcyBpcyBjYWxsZWQgZWFjaCB0aW1lIGEgUVIgY29kZSBpcyBub3QgZm91bmQgb24gdGhlIGNhbWVyYVxuICAgICAgIyBjb25zb2xlLmVycm9yIGVcbl1cbiJdfQ==

(function() {
  angular.module('irisAngular').run(function($log, $transitions, $rootScope, $state, $stateParams, $window, localStorageService) {
    'ngInject';
    $log.debug('runBlock end');
    return $transitions.onSuccess({}, function(params) {
      $rootScope.pageTitle = $state.current.title || 'Iris';
      return $window.scrollTo(0, 0);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxHQURILENBQ08sUUFBQSxDQUFDLElBQUQsRUFBTyxZQUFQLEVBQXFCLFVBQXJCLEVBQWlDLE1BQWpDLEVBQXlDLFlBQXpDLEVBQXVELE9BQXZELEVBQWdFLG1CQUFoRSxDQUFBO0lBQ0g7SUFDQSxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVg7V0FDQSxZQUFZLENBQUMsU0FBYixDQUF1QixDQUFBLENBQXZCLEVBQTJCLFFBQUEsQ0FBQyxNQUFELENBQUE7TUFDekIsVUFBVSxDQUFDLFNBQVgsR0FBdUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLElBQXdCO2FBQy9DLE9BQU8sQ0FBQyxRQUFSLENBQWlCLENBQWpCLEVBQW1CLENBQW5CO0lBRnlCLENBQTNCO0VBSEcsQ0FEUDtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lyaXNBbmd1bGFyJ1xuICAucnVuICgkbG9nLCAkdHJhbnNpdGlvbnMsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkd2luZG93LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4gICAgJHRyYW5zaXRpb25zLm9uU3VjY2VzcyB7fSwgKHBhcmFtcykgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJHN0YXRlLmN1cnJlbnQudGl0bGUgfHwgJ0lyaXMnXG4gICAgICAkd2luZG93LnNjcm9sbFRvKDAsMClcbiJdfQ==

(function() {
  angular.module('irisAngular').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';
    $locationProvider.hashPrefix('');
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
      title: 'Iris - Contacts'
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
    }).state('chats', {
      url: '/chats',
      templateUrl: 'app/chats/index.html',
      abstract: true
    }).state('chats.create', {
      url: '/create',
      templateUrl: 'app/chats/create.html',
      controller: 'IdentitiesController',
      controllerAs: 'messages',
      title: 'Iris - Create chat'
    }).state('chats.list', {
      url: '',
      templateUrl: 'app/chats/default.html',
      controller: 'IdentitiesController',
      controllerAs: 'messages',
      title: 'Iris - Chats'
    }).state('chats.show', {
      url: '/:type/:value',
      templateUrl: 'app/chats/show.html',
      controller: 'IdentitiesController',
      controllerAs: 'messages',
      title: 'Iris - Chats'
    }).state('messages', {
      url: '',
      template: "<ui-view/>",
      abstract: true
    }).state('messages.list', {
      url: '',
      templateUrl: 'app/messages/list.html',
      controller: 'MessagesController',
      controllerAs: 'messages',
      title: 'Iris'
    }).state('messages.show', {
      url: '/messages/:id',
      templateUrl: 'app/messages/show.html',
      controller: 'MessagesController',
      controllerAs: 'messages'
    }).state('about', {
      url: '/about',
      templateUrl: 'app/main/about.html',
      title: 'Iris - About'
    }).state('settings', {
      url: '/settings',
      templateUrl: 'app/main/settings.html',
      title: 'Iris - Settings'
    }).state('privacy', {
      url: '/privacy',
      templateUrl: 'app/main/privacy-policy.html',
      title: 'Iris - Privacy policy'
    });
    return $urlRouterProvider.otherwise('');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxjQUFELEVBQWlCLGtCQUFqQixFQUFxQyxpQkFBckMsQ0FBQTtJQUNOO0lBQ0EsaUJBQWlCLENBQUMsVUFBbEIsQ0FBNkIsRUFBN0I7SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLFlBRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxXQUFMO01BQ0EsUUFBQSxFQUFVLFlBRFY7TUFFQSxRQUFBLEVBQVU7SUFGVixDQUZKLENBS0UsQ0FBQyxLQUxILENBS1MsaUJBTFQsRUFNSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLDBCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7TUFJQSxNQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVE7TUFBUixDQUxGO01BTUEsS0FBQSxFQUFPO0lBTlAsQ0FOSixDQWFFLENBQUMsS0FiSCxDQWFTLG1CQWJULEVBY0k7TUFBQSxHQUFBLEVBQUssU0FBTDtNQUNBLFdBQUEsRUFBYSw0QkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBZEosQ0FrQkUsQ0FBQyxLQWxCSCxDQWtCUyxpQkFsQlQsRUFtQkk7TUFBQSxHQUFBLEVBQUssZUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsT0F2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssUUFBTDtNQUNBLFdBQUEsRUFBYSxzQkFEYjtNQUVBLFFBQUEsRUFBVTtJQUZWLENBeEJKLENBMkJFLENBQUMsS0EzQkgsQ0EyQlMsY0EzQlQsRUE0Qkk7TUFBQSxHQUFBLEVBQUssU0FBTDtNQUNBLFdBQUEsRUFBYSx1QkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxVQUhkO01BSUEsS0FBQSxFQUFPO0lBSlAsQ0E1QkosQ0FpQ0UsQ0FBQyxLQWpDSCxDQWlDUyxZQWpDVCxFQWtDSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQWxDSixDQXVDRSxDQUFDLEtBdkNILENBdUNTLFlBdkNULEVBd0NJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxVQUFBLEVBQVksc0JBRlo7TUFHQSxZQUFBLEVBQWMsVUFIZDtNQUlBLEtBQUEsRUFBTztJQUpQLENBeENKLENBNkNFLENBQUMsS0E3Q0gsQ0E2Q1MsVUE3Q1QsRUE4Q0k7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0E5Q0osQ0FpREUsQ0FBQyxLQWpESCxDQWlEUyxlQWpEVCxFQWtESTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQWxESixDQXVERSxDQUFDLEtBdkRILENBdURTLGVBdkRULEVBd0RJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxVQUFBLEVBQVksb0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQXhESixDQTRERSxDQUFDLEtBNURILENBNERTLE9BNURULEVBNkRJO01BQUEsR0FBQSxFQUFLLFFBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQTdESixDQWdFRSxDQUFDLEtBaEVILENBZ0VTLFVBaEVULEVBaUVJO01BQUEsR0FBQSxFQUFLLFdBQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQWpFSixDQW9FRSxDQUFDLEtBcEVILENBb0VTLFNBcEVULEVBcUVJO01BQUEsR0FBQSxFQUFLLFVBQUw7TUFDQSxXQUFBLEVBQWEsOEJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQXJFSjtXQXlFQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixFQUE3QjtFQTVFTSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9jYXRpb25Qcm92aWRlci5oYXNoUHJlZml4KCcnKVxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMnLFxuICAgICAgICB1cmw6ICcvY29udGFjdHMnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICBzZWFyY2g6ICcnXG4gICAgICAgIHRpdGxlOiAnSXJpcyAtIENvbnRhY3RzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnLzp0eXBlLzp2YWx1ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnY2hhdHMnLFxuICAgICAgICB1cmw6ICcvY2hhdHMnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NoYXRzL2luZGV4Lmh0bWwnXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgICAuc3RhdGUgJ2NoYXRzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NoYXRzL2NyZWF0ZS5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lyaXMgLSBDcmVhdGUgY2hhdCdcbiAgICAgIC5zdGF0ZSAnY2hhdHMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY2hhdHMvZGVmYXVsdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgICB0aXRsZTogJ0lyaXMgLSBDaGF0cydcbiAgICAgIC5zdGF0ZSAnY2hhdHMuc2hvdycsXG4gICAgICAgIHVybDogJy86dHlwZS86dmFsdWUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NoYXRzL3Nob3cuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgICAgdGl0bGU6ICdJcmlzIC0gQ2hhdHMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dWktdmlldy8+XCJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgICAgdGl0bGU6ICdJcmlzJ1xuICAgICAgLnN0YXRlICdtZXNzYWdlcy5zaG93JyxcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzLzppZCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgIC5zdGF0ZSAnYWJvdXQnLFxuICAgICAgICB1cmw6ICcvYWJvdXQnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vYWJvdXQuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJcmlzIC0gQWJvdXQnXG4gICAgICAuc3RhdGUgJ3NldHRpbmdzJyxcbiAgICAgICAgdXJsOiAnL3NldHRpbmdzJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3NldHRpbmdzLmh0bWwnXG4gICAgICAgIHRpdGxlOiAnSXJpcyAtIFNldHRpbmdzJ1xuICAgICAgLnN0YXRlICdwcml2YWN5JyxcbiAgICAgICAgdXJsOiAnL3ByaXZhY3knXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vcHJpdmFjeS1wb2xpY3kuaHRtbCdcbiAgICAgICAgdGl0bGU6ICdJcmlzIC0gUHJpdmFjeSBwb2xpY3knXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcnXG4iXX0=

(function() {
  angular.module('irisAngular').constant('config', {
    defaultFilters: {
      type: 'post',
      limit: 10,
      maxDistance: 0
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxRQURILENBQ1ksUUFEWixFQUVJO0lBQUEsY0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLE1BQU47TUFDQSxLQUFBLEVBQU8sRUFEUDtNQUVBLFdBQUEsRUFBYTtJQUZiO0VBREYsQ0FGSjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2lyaXNBbmd1bGFyJylcbiAgLmNvbnN0YW50ICdjb25maWcnLFxuICAgIGRlZmF1bHRGaWx0ZXJzOlxuICAgICAgdHlwZTogJ3Bvc3QnXG4gICAgICBsaW1pdDogMTBcbiAgICAgIG1heERpc3RhbmNlOiAwXG4iXX0=

(function() {
  angular.module('irisAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLENBQ0UsQ0FBQyxNQURILENBQ1UsUUFBQSxDQUFDLFlBQUQsQ0FBQTtJQUNOLFdBQUE7O1dBRUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7RUFITSxDQURWOztFQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaXJpc0FuZ3VsYXInXG4gIC5jb25maWcgKCRsb2dQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgIyBFbmFibGUgbG9nXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCB0cnVlXG4gICAgIyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiJdfQ==

angular.module('irisAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/chats/create.html','<form ng-submit=createChat(chatName)><input type=text autofocus class=form-control placeholder="Group name" ng-model=chatName><br><input ng-disabled=!chatName type=submit class="btn btn-primary" value="Create public group"></form>');
$templateCache.put('app/chats/default.html','<p>Select a chat to start messaging</p><div ng-include="\'app/main/notificationsprompt.partial.html\'"></div>');
$templateCache.put('app/chats/index.html','<div class="container no-padding-xs"><section><div id=messages class=row><div class=col-sm-4 ng-class="{\'hidden-xs\': (\'chats.show\'|isState)}"><div style=cursor:pointer ui-sref=chats.create class="panel chat-row" ui-sref-active=active><div class=panel-body><span class="fa fa-edit mar-right15"></span>New</div></div><div class="panel chat-row" ng-repeat="chat in chats | orderBy:\'-latest.time\'" ui-sref="chats.show({value:chat.idValue, type:chat.idType})" ui-sref-active=active ng-click="chat.unreadMsgs = 0" style=cursor:pointer><div class=panel-body><notification-icon count=chat.unreadMsgs><identicon identity=chat.identity width=35 ipfs=ipfs show-distance=false></identicon></notification-icon><span ng-bind=chat.identity.primaryName class=mar-left15></span> <small class=pull-right ng-bind="chat.latest.time | date: \'yyyy-MM-dd HH:mm\'"></small><br><small class=pull-right>{{chat.latest.text|limitTo:35}}{{chat.latest.text.length > 35 ? \'...\':\'\'}} </small><span class="fa fa-volume-mute mar-left10" ng-if=localSettings[chat.idValue].muted></span></div></div></div><div class=col-sm-8 ng-class="{\'hidden-xs\': (\'chats.list\'|isState)}"><ui-view></div></div></section></div>');
$templateCache.put('app/chats/show.html','<div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/notificationsprompt.partial.html\'"></div><div ng-if="idType ==\'uuid\'" ng-include="\'app/messages/create.chat.partial.html\'"></div><div ng-if="idType == \'keyID\'" class="panel panel-default"><div class=panel-heading><div class=mar-bot15><p style=color:red;><small><b>private messages are encrypted, but anyone can see who are communicating with each other</b></small></p><div><span ui-sref="identities.show({type:idType, value:idValue})" style=cursor:pointer><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> </span><small class="positive mar-left15" ng-show=isOnline>online</small> <small class=mar-left15 ng-show="!isOnline && lastActive">last active {{ lastActive * 1000 | date : \'yyyy-M-d HH:mm\' }} </small><button class="btn btn-default pull-right" ng-click=muteChat(idValue)><span class=fa ng-class="{\'fa-volume-up\': localSettings[idValue].muted, \'fa-volume-mute\': !localSettings[idValue].muted}"></span> {{localSettings[idValue].muted ? \'Unmute\' : \'Mute\'}}</button></div></div><form class="form-inline mar-bot5" ng-submit="sendChatMessage(m);m = \'\'"><input ng-disabled=!authentication.user class=form-control type=text ng-model=m style="display:inline-block; width:80%"> <button ng-disabled=!authentication.user class="btn btn-default" type=submit style=display:inline-block><i class="glyphicon glyphicon-send"></i></button></form></div></div><div ng-if="idType == \'keyID\'" class=message ng-repeat="msg in chatMessages | orderBy:\'-time\'"><div class="panel msg"><div class="message-panel panel-body"><b ng-bind=msg.author></b> <small class=pull-right ng-bind="msg.time | date : \'yyyy-M-d HH:mm\'"></small><br><span ng-bind-html=msg.text|linky ng-class="{big: msg.text.length<=2}"></span> <small uib-tooltip=Seen class="pull-right fa fa-check positive" ng-if="msg.time <= chat.theirMsgsLastSeenTime"></small></div></div></div><div ng-if="idType == \'uuid\'"><message auth=authentication ipfs=ipfs ng-repeat="msg in chatMessages | orderBy:\'-signedData.time\' track by msg.hash" show-recipient=false msg=msg></message></div><div ng-include="\'app/main/getstarted.partial.html\'"></div>');
$templateCache.put('app/identities/chat.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div ng-include="\'app/chats/show.html\'" class=mar-top15></div></div>');
$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-8 col-sm-6 col-sm-offset-2"><h3>Add contact</h3></div><div class="col-xs-4 col-sm-2"><button ng-click=openReadQRModal() class="btn btn-default pull-right"><span class="glyphicon glyphicon-qrcode"></span> Scan QR</button></div></div><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add contacts.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="loggingIn || !(authentication.user && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public contact</button><p class=help-block>More details can be added afterwards.</p><p><a ui-sref=privacy>Privacy policy</a></p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top45-xs></div><div ng-if=!query.term ng-include="\'app/main/getstarted.partial.html\'"></div><table ng-init="filters.limit = 10" id=search-results class="table table-hover" infinite-scroll="filters.limit = filters.limit + 1" infinite-scroll-distance=1 infinite-scroll-disabled="!irisIndex || !ids || !ids.list || ids.list.length < filters.limit || filteredIds.length < filters.limit"><tbody><tr id=createIdRow ng-class="{active: ids.activeKey == -1}" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add contact<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list | orderBy:\'data.trustDistance\':false:trustDistanceComparator | limitTo:filters.limit as filteredIds track by (result.linkTo.value + result.linkTo.type)" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: ids.activeKey == $index}"><td class=gravatar-col><identicon identity=result border=3 width=50 ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance === 0" class="label label-default pull-right">{{authentication.user ? \'you\' : \'viewpoint\'}} </span><span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="result.data.trustDistance === false" class="label label-default pull-right">unconnected</span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.wellVerified></span> <small ng-if=!(result.mostVerifiedAttributes.type||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs.type.type|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if=!ids.list.length>No results</div></section></div>');
$templateCache.put('app/identities/readqr.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class="panel-heading text-center"><p><b>Scan QR from profile page</b></p><div><qr-scanner width=400 height=300 ng-success=qrScanSuccess(data) ng-error=qrScanError(error)></qr-scanner></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div></div></div>');
$templateCache.put('app/identities/share.modal.html','<div class="text-center mar-top5" ng-controller=IdentitiesController><p><button ng-click="copyToClipboard(idUrl, $event)" class="btn btn-primary mar-top10">Copy link to clipboard</button></p><div class="mar-top20 mar-bot10"><qrcode data={{idUrl}} size=400></qrcode></div><!-- <div class="mar-top15 mar-bot10"><button ng-click="shareModal.close()" class="btn btn-default">Close</button></div> --></div>');
$templateCache.put('app/identities/show.attributes.html','<!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="a in attributes | orderBy:\'order\':true" style="{{!a.isCurrent && a.rowStyle}}" ng-class="!a.isCurrent && a.rowClass" ng-click="!a.isCurrent && attributeClicked($event, a)" class=id-row><td><div><div class="pull-left mar-right15"><a ng-hide="a.type === \'keyID\' || a.type === \'uuid\'" style=min-width:45px class="btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span> <span ng-if=a.iconStyle&&!a.link class="pull-left btn btn-lg btn-social-icon" ng-class=a.btnStyle ng-href={{a.link}}><span ng-class=a.iconStyle></span></span></a><identicon identity=a.attr ng-show="a.attr && (a.type === \'keyID\' || a.type === \'uuid\')" width=45></identicon></div><div class=pull-left><a ui-sref="identities.show({ type: a.type, value: a.value })" ng-bind="a.linkName || a.value" class=id-link></a><br><small ng-bind=a.type></small></div><!--\n            <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n          --><div class=pull-right ng-if=!a.isCurrent><button autocomplete=off name=confirm class="btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{a.verifications||a.conf}}</button> <button autocomplete=off name=unverify class="btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverification\' }, {verifiedAttr: a})" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{a.unverifications||a.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!a.isCurrent class="active connectingmsgs"><td class=connectingmsgs data-style=zoom-in data-spinner-color=#000><div uib-collapse=!a.collapse><div ng-repeat="msg in a.connectingMsgs" ng-click="openMessage($event, msg)" class=confirmation-panel><span ng-if="msg.signedData.type === \'verification\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.signedData.type === \'unverification\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=30></identicon><span ng-bind=msg.author_name||msg.signedData.author.type.value></span> </a></strong>- <span ng-bind="msg.signedData.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span> <span ng-if=msg.signedData.comment>- {{msg.signedData.comment|limitTo:250}}</span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verification\' }, {verifiedAttr: newVerification})" class="btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row row-no-padding"><div class="col-md-8 col-md-offset-3"><h4 ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35 show-distance=false></identicon><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button> <button ng-if=showChatButton class="mar-left15 btn btn-default" ui-sref="chats.show({value:idValue, type:idType})"><span class="fa fa-comment mar-right5"></span> Chat</button> <button ng-if="authentication.user && idType === \'keyID\'" class="mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video mar-right5"></span> {{isCurrentUser ? \'Go live\' : \'Video\'}}</button> <small class="positive mar-left15" ng-show=isOnline>online</small></h4><h4 ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small><button class="btn btn-default mar-left15" ng-click=openSharePageModal()><span class="glyphicon glyphicon-qrcode mar-right5"></span> Share</button></h4></div></div><div class="row row-no-padding"><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.list.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 3 }" ng-click=activateTab(3)><span class=hidden-xs>Identity </span>(<span ng-bind="attributesLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div class="row row-no-padding"><div class="col-md-3 id-left-column"><div ng-if=isUniqueType ng-include="\'app/identities/show.stats.html\'"></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><div ng-include="\'app/main/createuser.partial.html\'"></div><uib-tabset active=activeTab><uib-tab index=1 ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-if=isCurrentUser ng-include="\'app/main/getstarted.partial.html\'"></div><div class="panel panel-info" ng-if="!isCurrentUser && authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive"><div class=panel-heading>Trust this user? Upvote them to see their posts!</div></div><div ng-include="\'app/messages/create.rating.partial.html\'" ng-show="!loggingIn && authentication.user && !isCurrentUser"></div><div ng-include="\'app/identities/show.received.html\'"></div><div ng-if="!isCurrentUser && receivedFiltered.length == 0" class="alert alert-info text-center">No messages yet</div></uib-tab><uib-tab index=2 ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div ng-include="\'app/identities/show.sent.html\'"></div></uib-tab><uib-tab index=3><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="attributesLength || 0"></span>)</uib-tab-heading><div ng-include="\'app/identities/show.attributes.html\'" id=attributes></div></uib-tab></uib-tabset></div></div></div>');
$templateCache.put('app/identities/show.received.html','<div infinite-scroll=getReceivedMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity || activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in received.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as receivedFiltered" ng-click="openMessage($event, msg)"></message></div>');
$templateCache.put('app/identities/show.sent.html','<div infinite-scroll=getSentMsgs() infinite-scroll-distance=2 infinite-scroll-disabled="true || !identity ||\xA0activeTab != 2"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message auth=authentication ipfs=ipfs msg-utils=msgUtils msg=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'signedData.timestamp\' : true as sentFiltered" ng-click="openMessage($event, msg)"></message></div><div ng-if="sentFiltered.length == 0" class="alert alert-info text-center">No messages yet</div>');
$templateCache.put('app/identities/show.stats.html','<div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a></small></p><div class=stats-box><div><div><p></p><div class="hidden-md align-center"><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></div><div class="visible-md align-center"><!-- because squeezed identicons don\'t scale properly --><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=180 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=180 ng-if=!hideProfilePhoto></identicon></div><p></p></div></div><div><div><h4><span class="visible-xs-inline-block visible-sm-inline-block mar-right15"><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.wellVerified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><button class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ng-click=openSharePageModal()><span class="glyphicon glyphicon-share"></span></button> <button ng-if=showChatButton class="mar-left15 visible-xs-inline-block visible-sm-inline-block btn btn-default" ui-sref="chats.show({value:idValue, type:idType})"><span class="fa fa-comment"></span></button> <button ng-if="authentication.user && idType === \'keyID\'" class="visible-xs-inline-block visible-sm-inline-block mar-left15 btn btn-default" ng-click=openVideoChatModal()><span class="glyphicon glyphicon-facetime-video"></span></button> <small class="positive mar-left15 visible-xs-inline-block visible-sm-inline-block" ng-show=isOnline>online</small> <span ng-if="identity.data.trustDistance === 0" class="label label-default pull-right">{{authentication.user ? \'you\' : \'viewpoint\'}} </span><span ng-if="identity.data.trustDistance > 0" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span> <span ng-if="identity.data.trustDistance === false" class="label label-default pull-right">unconnected</span></h4></div></div><div><div class="mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n          <p class="received-stats">\n          <div><strong>Received</strong></div>\n          <div>\n          <strong>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n          </strong>\n          </div>\n          </p>\n          <p>\n          <div>Sent</div>\n          <div>\n          <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n          <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n          <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n          </div>\n          </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="a in attributes" ng-if=a.quickContact><a ng-href={{a.link}}><span ng-class=a.iconStyle></span><span ng-bind="a.linkName || a.value"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class=mar-top10><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor.value }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/identities/video.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><div class=mar-bot15><div style=color:red;font-weight:bold ng-if="!isCurrentUser && !stream">currently this is unencrypted livestreaming :D</div><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> <small class="positive mar-left15" ng-show=isOnline>online</small><div class=mar-top5><videochat ng-if="idType === \'keyID\'" watch-only=stream gun=gun pubkey=idValue></videochat></div><p ng-if="isCurrentUser || stream"><button ng-click="copyToClipboard(idUrl + \'?stream\', $event)" class="btn btn-default mar-top10">Copy link to clipboard</button></p></div></div></div></div>');
$templateCache.put('app/main/about.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>About Iris</h3><p class=lead>Iris is a social networking application that stores everything on its users\' devices which communicate directly with each other &mdash; no corporate gatekeepers needed.</p><p>Longer description on <a href=https://github.com/irislib/iris/blob/master/README.md>GitHub</a>.</p><h4>Available at</h4><ul><li><a href=https://iris.to>iris.to</a></li><li><a href=https://iris.cx>iris.cx</a></li><li><a href=https://irislib.github.io>irislib.github.io</a></li><li>Browser extension: use Iris even if you are offline. In the future, can be used to sign in to websites.<ul><li><a href=https://chrome.google.com/webstore/detail/iris/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome</a></li><li><a href=https://addons.mozilla.org/en-US/firefox/addon/irisapp/ >Firefox</a></li></ul></li><!-- TODO: add dynamically updated /ipfs url --><li>Upcoming: Electrum desktop app with bluetooth and LAN peerfinding!</li></ul><h4>Privacy</h4><p>It\'s important to remember that as for now, <b>all posts, ratings and verifications are public</b>.</p><p>Private chats can\'t be read by others, but anyone can see who are communicating with each other. "Last online" status is publicly available.</p><p>See <a ui-sref=privacy>privacy policy</a> for more information.</p><h4>Support the cause?</h4><p><b>Donations</b> help keep the project going and are very much appreciated. You can donate via <a href=https://opencollective.com/iris-social>Open Collective</a> or <b>bitcoin</b>: 3GopC1ijpZktaGLXHb7atugPj9zPGyQeST</p></div></div></div></div>');
$templateCache.put('app/main/createuser.partial.html','<div class="panel panel-default" ng-if=!authentication.user><div class=panel-body><form class="form-inline createuser-form" ng-submit=createUser(newUserName)><div class=form-group><input focus-on=newUser style=min-width:200px type=text class=form-control ng-disabled=creatingUser ng-model=newUserName placeholder="What\'s your name?"></div><i class="hidden-xs mar-right5"></i> <button type=submit id=createUserBtn class="btn btn-primary" ng-disabled="!newUserName || creatingUser">Go!</button> <i class="mar-left15 hidden-xs"></i><div class=form-group>or <a ng-click=openLoginModal() href="">Log in</a></div></form></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/getstarted.partial.html','<div ng-if="authentication.user && authentication.identity.data && !authentication.identity.data.sentPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Welcome to social networking freedom!</p><p>Start by upvoting your friends: ask for their profile links or scan their QR codes (<b><a ui-sref=identities.create>Add contact</a></b>). That makes their posts visible to you.</p><p>Alternatively, you can upvote the maintainer of this Iris distribution as a starting point: <b><a ui-sref="identities.show({type:\'keyID\', value:defaultIndexKeyID})">Iris</a></b>.</p><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && !authentication.identity.data.receivedPositive" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>Great, you have trusted contacts!</p><p>Next you should <b>ask your friends to upvote your account</b>, so they and their network will see your messages.</p><p><button ng-click="copyToClipboard(authentication.user.url, $event)" class="btn btn-primary mar-top10">Copy link to your profile</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{authentication.user.url}} size=360></qrcode></div><br></div><div ng-if="authentication.user && authentication.identity.data && authentication.identity.data.sentPositive && authentication.identity.data.receivedPositive && localSettings && !localSettings.profileUploadNotificationClosed && authentication.identity.mva && !authentication.identity.mva.profilePhoto" class="alert alert-info text-center"><p class=h3 style=margin-bottom:15px>You\'re good to go!</p><p style="margin-bottom: 15px">Set a profile picture?</p><p><button class="btn btn-primary mar-right15" ng-click=openProfilePhotoUploadModal()>Yes</button> <button class="btn btn-default" ng-click=closeProfileUploadNotification()>Not now</button></p><br></div>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--><h3>New user</h3><form ng-submit=createUser(newUserName)><input focus-on=newUser type=text class=form-control ng-model=newUserName placeholder="Your name"><br><input type=submit value=Go! class="btn btn-primary" ng-disabled=!newUserName></form><hr style=border-color:#ddd><h3>Existing user</h3><form><textarea rows=6 class=form-control placeholder="Paste private key or drop file" ng-model=privateKeySerialized ng-change="loginWithKey(privateKeySerialized, undefined, true)"></textarea><br><button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, undefined, true)">Log in</button> <a class=pull-right href="" ng-click="lostKey = !lostKey">Lost your key?</a></form><div ng-if=lostKey class="mar-top30 panel panel-info"><div class=panel-heading>Don\'t worry: just go with "New user" and ask your trusted contacts to verify that your new key belongs to the already existing identity.</div></div></div></div></div>');
$templateCache.put('app/main/logout.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading>Log out?</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><a class="btn btn-default" ng-click=$dismiss()>Cancel</a> <a href=# class="btn btn-danger" id=logout ng-click=logout()>Log out</a></div></div></div>');
$templateCache.put('app/main/notificationsprompt.partial.html','<div ng-if="desktopNotificationsAvailable && !(notificationsPermitted && !localSettings.desktopNotificationsDisabled) && !localSettings.desktopNotificationsNotNow" class=mar-bot15><div ng-if=enableNotificationsFailed class="alert alert-warning" style="margin-bottom: 15px;">Failed to enable notifications - please check your browser settings</div><button class="btn btn-primary" ng-click=setDesktopNotificationsDisabled(false)>Get desktop notifications</button> <button class="btn btn-default" ng-click="saveLocalSetting(\'desktopNotificationsNotNow\', true)">Not now</button></div>');
$templateCache.put('app/main/privacy-policy.html','<div class="container mar-bot30 mar-top20-xs no-padding-xs"><div class=col-md-8><div class="panel panel-default"><div class=panel-body><h3>Privacy policy</h3><p>Iris is a peer-to-peer application like Bitcoin, not a corporate or other legal entity. All data is stored and indexed by the users who run the application. The application only makes connections to other decentralized network peers.</p><p>Please keep in mind that everything you post or add on Iris is <b>public</b> unless otherwise stated.</p><p>Iris\'s contact list feature can be compared to your mobile phone\'s address book, but with synchronization with others. Users can add contact details and attributes of arbitrary type.</p><p>Developers of the application have no control over content added by users and are not responsible for it. It is the user\'s responsibility to comply with applicable laws regarding public messaging and listing of personal information.</p><p>An Iris "account" is a cryptographic keypair generated and stored locally on the user\'s device (in browser or other application). It does not constitute a relationship with any corporate or other entity.</p></div></div></div></div>');
$templateCache.put('app/main/settings.html','<div class="container mar-top20-xs"><div class=col-md-8><h3>Settings</h3><div ng-if=authentication.user><p><b>For normal people</b></p><div class="panel panel-default"><div class=panel-heading>Log out</div><div class=panel-body><p>You cannot log in back to this account unless you have saved a backup of your private key.</p><p><button class="btn btn-danger" ng-click=openLogoutModal()>Log out</button></p></div></div><div class="panel panel-danger"><div class=panel-heading>Private key</div><div class=panel-body><p>Private key is used to log in to your account. Keep your private key safe!</p><p><button class="btn btn-danger" ng-click="copyToClipboard(privateKey|json, $event)">Copy to clipboard</button> <button class="btn btn-danger" ng-click=downloadText(privateKey|json)>Download</button> <button class="btn btn-danger" ng-click="showPrivateKeyQr = !showPrivateKeyQr">Show QR code</button></p><p ng-if=showPrivateKeyQr><qrcode data={{privateKey|json}} size=400></qrcode></p></div></div><div class="panel panel-default"><div class=panel-heading>Notifications</div><div class=panel-body><div ng-if=enableNotificationsFailed class="alert alert-warning" style="margin-bottom: 15px;">Failed to enable notifications - please check your browser settings</div><p ng-if=desktopNotificationsAvailable><button ng-if="!(notificationsPermitted && !localSettings.desktopNotificationsDisabled)" class="btn btn-primary" ng-click=setDesktopNotificationsDisabled(false)>Get desktop notifications</button> <button ng-if="notificationsPermitted && !localSettings.desktopNotificationsDisabled" class="btn btn-default" ng-click=setDesktopNotificationsDisabled(true)>Disable desktop notifications</button></p><p><button ng-if=localSettings.audioNotificationsDisabled ng-click=setAudioNotificationsDisabled(false) class="btn btn-primary">Enable notification sounds</button> <button ng-if=!localSettings.audioNotificationsDisabled ng-click=setAudioNotificationsDisabled(true) class="btn btn-default">Disable notification sounds</button></p></div></div></div><p><b>Geeky stuff</b></p><div class="panel panel-default"><div class=panel-heading>GUN peers</div><div class=panel-body><p><a href=https://gun.eco/ >GUN</a> stores dynamic content: indexes of messages and identities.</p></div><div class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="(key, value) in gun[\'_\'].opt.peers"><td><span ng-show="value.wire && value.wire.hied" class="positive fa fa-check-circle"></span> <span ng-hide="value.wire && value.wire.hied" class="negative fa fa-times-circle"></span> <small ng-bind=key></small></td><td><button ng-click=removeGunPeer(key) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addGunPeer(gunUrl)><input class=form-control type=text placeholder="Peer url" ng-model=gunUrl> <input class="btn btn-primary" type=submit value="Add GUN peer"></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>IPFS peers</div><div class=panel-body><p><a href=https://ipfs.io>IPFS</a> stores static content: messages and image files.</p><p ng-hide="ipfsPeers && ipfsPeers.length"><small>No IPFS peers</small></p></div><div ng-if="ipfsPeers && ipfsPeers.length" class=table-responsive><table class="table table-striped"><tbody><tr ng-repeat="peer in ipfsPeers"><td><span class="positive fa fa-check-circle"></span> <small ng-bind=peer.addr.toString()></small></td><td><button ng-click=removeIpfsPeer(peer.addr.toString()) class="pull-right btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr><td colspan=2><form class=form-inline ng-submit=addIpfsPeer(ipfsUrl)><input class=form-control type=text placeholder="Peer url" ng-model=ipfsUrl> <input class="btn btn-primary" type=submit value="Add IPFS peer"><!--<button ng-click="$event.preventDefault;addDefaultIpfsPeers()" class="btn btn-default pull-right">Add default peers</button>--></form></td></tr></tbody></table></div></div><div class="panel panel-default"><div class=panel-heading>Search indexes</div><div class=panel-body><p><small><b>query</b> = when you search for content on Iris, include results from the index</small></p><p><small><b>subscribe</b> = listen for new messages that are added to the index, potentially adding them to your own index</small></p><table class="table table-striped"><thead><tr><td>index</td><td>query</td><td>subscribe</td></tr></thead><tbody><tr ng-repeat="i in trustedIndexes"><td><identicon uib-tooltip={{i.attribute.value}} identity=i.attribute class=mar-right5 border=3 width=30></identicon><a ui-sref="identities.show({ type: i.attribute.type, value: i.attribute.value })"><identicon ipfs=ipfs identity=i.identity border=3 width=30></identicon></a></td><td><input type=checkbox checked></td><td><input type=checkbox checked></td></tr><tr><td colspan=4><form class=form-inline ng-submit=addTrustedIndex(trustedIndexKey)><input class=form-control type=text placeholder="public key" ng-model=trustedIndexKey> <input class="btn btn-primary" type=submit value="Add trusted index"></form></td></tr></tbody></table></div></div><!--\n    <div class="panel panel-default">\n      <div class="panel-heading">\n        Iris indexing settings\n      </div>\n      <div class="panel-body">\n        <p>\n          <pre ng-bind="irisIndex.options|json"></pre>\n        </p>\n      </div>\n    </div>--><p><b>Other stuff</b></p><div class="panel panel-default"><div class=panel-body><p><a ui-sref=about>About Iris</a></p><p><a ui-sref=privacy>Privacy policy</a></p></div></div></div></div>');
$templateCache.put('app/services/notification.template.html','<div class="ui-notification panel panel-info"><div class=panel-heading><h3 ng-show=title ng-bind-html=title></h3><div class=message ng-bind-html=message></div></div></div>');
$templateCache.put('app/messages/create.chat.partial.html','<div class="panel panel-default" ngf-drop ngf-keep="\'distinct\'" ngf-drop-disabled="addingMessage || loggingIn || !authentication.user" ng-model=newMessage.files ngf-drag-over-class="\'dragover\'" ngf-multiple=true><div class=panel-body><div class=mar-bot15><p style=color:red; class=pull-right><small><b>public chat</b></small></p><button class="btn btn-default pull-right" ng-click=muteChat(idValue)><span class=fa ng-class="{\'fa-volume-up\': localSettings[idValue].muted, \'fa-volume-mute\': !localSettings[idValue].muted}"></span> {{localSettings[idValue].muted ? \'Unmute\' : \'Mute\'}}</button><div><span ui-sref="identities.show({type:idType, value:idValue})" style=cursor:pointer><identicon identity=identity ipfs=ipfs width=35></identicon><span class=mar-right15><span ng-show="idType === \'keyID\' || idType === \'uuid\'"><identicon identity=idAttr width=35></identicon></span><span ng-hide="idType === \'keyID\' || idType === \'uuid\'"><span ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue class=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType class=idType></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType class=idType></a> </small></span></span></span><span ng-bind=identity.primaryName></span> </span><small class="positive mar-left15" ng-show=isOnline>online</small> <small class=mar-left15 ng-show="!isOnline && lastActive">last active {{ lastActive * 1000 | date : \'yyyy-M-d HH:mm\' }}</small></div></div><form autocomplete=off ng-submit="createMessage($event, { type: \'chat\', recipient: { uuid: idValue }, text: newMessage.text, pollOptions: createPoll && newMessage.pollOptions }, { files: newMessage.files });createPoll = false"><div class=row ng-if="newMessage.files && newMessage.files.length"><div class=col-xs-12><p ng-class="{\'align-center\': newMessage.files.length == 1}"><span ng-repeat="file in newMessage.files" class=attachment><button type=button class=close aria-label=Close ng-click=newMessage.files.splice($index,1)><span aria-hidden=true>&times;</span></button> <a ng-show="[\'video\',\'image\',\'audio\'].indexOf(file.type.substr(0,5)) == -1" ng-bind=file.name></a> <img ngf-thumbnail="file || \'/thumb.jpg\'" ng-style="{\'max-width\': newMessage.files.length > 1 ? \'150px\' : \'100%\', \'max-height\': newMessage.files.length > 1 ? \'150px\' : \'450px\'}"><audio controls ngf-src=file></audio><video controls ngf-src=file></video></span></p></div></div><div class=form-group><input type=text style="resize: vertical" ng-disabled="addingMessage || loggingIn || !authentication.user" name=text class=form-control id=text ng-model=newMessage.text placeholder="Type a message"></div><div class=row><div class=col-xs-12><button ng-disabled="addingMessage || loggingIn || !authentication.user || !(newMessage.text || newMessage.files.length)" type=submit class="btn btn-primary" data-style=zoom-out><span class="glyphicon glyphicon-send"></span></button> <button ngf-select ng-model=newMessage.files ngf-multiple=true href="" ng-disabled="addingMessage || loggingIn || !authentication.user" class="btn btn-default pull-right" data-style=zoom-out><span class="fa fa-paperclip"></span> Add files</button></div></div></form></div></div>');
$templateCache.put('app/messages/create.partial.html','<div class="panel panel-default" ngf-drop ngf-keep="\'distinct\'" ngf-drop-disabled="addingMessage || loggingIn || !authentication.user" ng-model=newMessage.files ngf-drag-over-class="\'dragover\'" ngf-multiple=true><div class=panel-body><form ng-submit="createMessage($event, { type: \'post\', text: newMessage.text, pollOptions: createPoll && newMessage.pollOptions }, { files: newMessage.files });createPoll = false"><div class=row ng-if="newMessage.files && newMessage.files.length"><div class=col-xs-12><p class=attachments ng-class="{\'align-center\': newMessage.files.length == 1}"><span ng-repeat="file in newMessage.files" class=attachment><button type=button class=close aria-label=Close ng-click=newMessage.files.splice($index,1)><span aria-hidden=true>&times;</span></button> <a ng-show="[\'video\',\'image\',\'audio\'].indexOf(file.type.substr(0,5)) == -1" ng-bind=file.name></a> <img ngf-thumbnail="file || \'/thumb.jpg\'" ng-style="{\'max-width\': newMessage.files.length > 1 ? \'150px\' : \'100%\', \'max-height\': newMessage.files.length > 1 ? \'150px\' : \'450px\'}"><audio controls ngf-src=file></audio><video controls ngf-src=file></video></span></p></div></div><div class=form-group><textarea style="resize: vertical" ng-disabled="addingMessage || loggingIn || !authentication.user" name=text class=form-control id=text ng-model=newMessage.text placeholder="What\'s on your mind?"></textarea></div><div ng-if=createPoll ng-include="\'app/messages/poll.create.html\'"></div><div class=row><div class=col-xs-12><button ng-disabled="addingMessage || loggingIn || !authentication.user || !(newMessage.text || newMessage.files.length)" type=submit class="btn btn-primary" data-style=zoom-out>Publish</button> <button ngf-select ng-model=newMessage.files ngf-multiple=true href="" ng-disabled="addingMessage || loggingIn || !authentication.user" class="btn btn-default pull-right" data-style=zoom-out><span class="fa fa-paperclip"></span> Add files</button> <button class="btn btn-default pull-right" ng-click="$event.preventDefault();newMessage.pollOptions=[{text: \'\'}, {text: \'\'}];createPoll = !createPoll"><span class="glyphicon glyphicon-stats"></span> Create poll</button></div></div></form></div></div>');
$templateCache.put('app/messages/create.rating.partial.html','<div ng-style=newMessage.style class="panel panel-default panel-success" id=newRatingPanel><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment }, {addTo: received})"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment ng-disabled=addingMessage placeholder="Comment (optional)"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button ng-disabled=addingMessage type=submit class="pull-right btn btn-primary" data-style=zoom-out><span ng-show="newMessage.rating == 0">Neutral</span> <span ng-show="newMessage.rating > 0">Upvote</span> <span ng-show="newMessage.rating < 0">Downvote</span></button></div></div></form></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info"><span ng-if=!authentication.user>Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.type, value: viewpoint.value })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint.identity border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.value></strong></a></span><br class=hidden-sm></span>Filter by trust distance: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({maxDistance: -1})" ng-class="{active: filters.maxDistance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 1})" ng-class="{active: filters.maxDistance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 2})" ng-class="{active: filters.maxDistance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 3})" ng-class="{active: filters.maxDistance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({maxDistance: 0})" ng-class="{active: filters.maxDistance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'post\') }" ng-click="setFilters({ type: \'post\' })"><a><span class="fa fa-pencil"></span> Post</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class="container no-padding-xs"><section><div ng-if=!authentication.user class=jumbotron><div class=align-center><h1>Social networking freedom</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-download fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-download"></i> Everything is stored on users\' devices &mdash; no corporate gatekeepers.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Filter all content using your web of trust.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div></div><p class="align-center mar-top15" style=margin-bottom:0><a ui-sref=about>Read more</a></p></div><div id=messages class=row><div class=col-md-4><div class="hidden-xs hidden-sm" ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div ng-include="\'app/main/createuser.partial.html\'"></div><div ng-include="\'app/main/getstarted.partial.html\'"></div><div ng-if=authentication.user ng-include="\'app/messages/create.partial.html\'"></div><div class="visible-xs visible-sm" ng-include="\'app/messages/filters.partial.html\'"></div><div infinite-scroll=showMoreMsgs(); infinite-scroll-distance=1 infinite-scroll-disabled="!msgs || !msgs.list || !irisIndex || loadingMsgs"><message auth=authentication ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'signedData.timestamp\' : true | limitTo:filters.limit as filteredMsgs track by msg.hash" msg=msg ng-click="openMessage($event, msg);$event.preventDefault()"></message></div><div class="alert alert-info text-center" ng-if=!filteredMsgs.length>No messages yet</div></div></div></section></div>');
$templateCache.put('app/messages/poll.create.html','<div class=row><div class=col-xs-12><ul><li ng-repeat="o in newMessage.pollOptions" class=mar-bot5><div class=form-inline><input class=form-control style="width: 200px;display: inline-block;" placeholder="option {{$index + 1}}" ng-model=o.text> <button class="btn btn-default" ng-if="$index > 1" ng-click="newMessage.pollOptions.splice($index, 1)"><i class="fa fa-times"></i></button></div></li><li><a ng-click="newMessage.pollOptions.push({text: \'\'})">Add option</a></li></ul></div></div>');
$templateCache.put('app/messages/share.modal.html','<div class="panel panel-default"><div class=panel-body><h3>Share message?</h3><form ng-submit="shareMessage(message, comment)"><p><input type=text class=form-control placeholder="Add comment" ng-model=comment></p><p><message auth=authentication ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message></p><button class="btn btn-primary">Share</button></form></div></div>');
$templateCache.put('app/messages/show.html','<div class="container no-padding-xs"><div class="col-md-8 col-md-offset-2 msg-col no-padding-xs" ng-include="\'app/messages/single.html\'"></div></div>');
$templateCache.put('app/messages/show.modal.html','<div ng-include="\'app/messages/single.html\'"></div>');
$templateCache.put('app/messages/single.html','<message auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading ng-if=!message>Looking for message...</div><div class=panel-heading ng-if=message>Message origin verified by <span ng-show=message.verifiedByAttr><identicon identity=message.verifiedByAttr class=mar-right5 border=3 width=35></identicon></span>which is associated with <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.primaryName></span></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default mar-right5" ng-click="collapseRawData = !collapseRawData">Show raw data</button> <button class="btn btn-default" ng-click=copyCurrentLocationToClipboard($event)>Copy link</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre><message ng-repeat="msg in message.repliesArr" auth=authentication msg-utils=msgUtils ipfs=ipfs show-recipient=true msg=msg page-info=info></message><!-- <div class="mar-top15 mar-bot10"><button ng-click="chatModal.close()" class="btn btn-default">Close</button></div> -->');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':msg.isVerification, \'panel-default\':msg.isPost}" style={{msg.bgColor}} ng-if=msg.signedData><div class=message-panel ng-class="{ \'panel-body\': !msg.isVerification, \'panel-heading\': msg.isVerification || msg.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=msg.iconStyle ng-repeat="n in msg.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=msg.local></span> <strong><a ui-sref="identities.show({ type: msg.linkToAuthor.type, value: msg.linkToAuthor.value })" class=id-link><identicon ipfs=ipfs identity=msg.author class=mar-right5 border=3 width=35></identicon><span ng-bind=msg.author_name></span> </a></strong><span ng-show="msg.signedData.type != \'chat\' && !msg.sameAuthorAndRecipient"><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: msg.linkToRecipient.type, value: msg.linkToRecipient.value })" class=id-link><identicon ng-if=showRecipient ipfs=ipfs identity=msg.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="(msg.recipientIsSelf && pageInfo.primaryName)||msg.recipient_name"></span> </a></span>- <a ui-sref="messages.show({ id: (msg.ipfsUri || msg.hash) })" ng-bind="(msg.signedData.time||msg.signedData.timestamp)|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><div ng-if="msg.isVerification || msg.isUnverification"><div ng-repeat="a in msg.recipientArray"><small><b ng-bind=a.type></b>: <span ng-if="a.type == \'email\' || a.type == \'url\'" ng-bind-html="a.value | linky"></span> <span ng-if="!(a.type == \'email\' || a.type == \'url\')" ng-bind=a.value></span></small></div></div><p ng-class="{\'align-center\': msg.attachments.length == 1}" class=attachments><span ng-repeat="attachment in msg.attachments" class=attachment><a ng-if="[\'video\',\'image\',\'audio\'].indexOf(attachment.typeSubstr) == -1" download={{attachment.name}} ng-click="download(attachment.name, null, null, null, attachment.src)"><i class="fa fa-download mar-right5"></i> {{attachment.name}} </a><img ng-if="attachment.type && attachment.typeSubstr == \'image\'" ng-click="msg.openAttachment = (attachment.uri != msg.openAttachment ? attachment.uri : null);msg.attachments.length > 1 ? $event.stopPropagation() : null" alt={{attachment.uri}} ng-src={{attachment.src}} ng-style="{\'max-width\': (msg.attachments.length > 1 && msg.openAttachment != attachment.uri) ? \'150px\' : \'100%\', \'max-height\': (msg.attachments.length > 1 && msg.openAttachment != attachment.uri) ? \'150px\' : \'80vh\'}"><videostream ng-if="attachment.typeSubstr == \'video\' || attachment.typeSubstr == \'audio\'" ipfs=ipfs uri=attachment.uri></videostream><span ng-bind-html=attachment.element ng-if=attachment.element></span></span></p><p style="white-space: pre-line;" ng-if="(msg.signedData.text || msg.signedData.comment)" ng-class="{big: msg.emojisOnly}" hm-read-more hm-limit=280 hm-text="{{ (msg.signedData.text || msg.signedData.comment)|linky }}" hm-more-text="Show more" hm-less-text="Show less"></p><form ng-if="msg.signedData.pollOptions && !msg.myVote" ng-submit="vote(msg, msg.choice)" ng-init="choice = \'asdf\'"><div class=radio ng-repeat="o in msg.signedData.pollOptions"><label><input ng-hide=msg.myVote ng-disabled=!authentication.user type=radio ng-model=msg.choice ng-value=o.text> <span ng-show=msg.myVote ng-bind=o.voteCount></span> {{o.text}}</label></div><button ng-disabled="!authentication.user || !msg.choice" class="btn btn-primary mar-right5">Vote</button> <small>{{msg.voteCount || 0}} votes</small></form><div ng-if=msg.voteResults><div ng-repeat="(k, v) in msg.voteResults"><b ng-bind=v style="width: 50px; display:inline-block"></b> <span ng-bind=k></span></div><small>{{msg.voteCount || 0}} votes</small></div><message ng-if="msg.sharedMsg && msgUtils" msg=msg.sharedMsg></message><span ng-class="{disabled: !authentication.user}" class=pull-right ng-if="msgUtils && msg.signedData.type == \'post\'"><a class=msg-reaction href="" ng-class="{active: msg.showCommentField}" ng-click="authentication.user && (msg.showCommentField = !msg.showCommentField)"><b ng-if=msg.repliesArr.length>{{msg.repliesArr.length}} </b><i class="glyphicon glyphicon-comment"></i> </a><a class=msg-reaction href="" ng-click="authentication.user && msgUtils.share(msg)"><b ng-if=msg.sharesArr.length>{{msg.sharesArr.length}} </b><i class="glyphicon glyphicon-retweet"></i> </a><a class=msg-reaction ng-class="{active: msg.liked}" href="" ng-click="authentication.user && msgUtils.like(msg)"><b ng-if="msg.likes || msg.liked">{{msg.likes || 1}} </b><i class=glyphicon ng-class="{\'glyphicon-heart-empty\': !msg.liked, \'glyphicon-heart\': msg.liked,}"></i></a></span><form class=form-inline ng-submit="msgUtils.replyTo(msg, reply)" ng-show="authentication.user && msg.showCommentField"><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=reply placeholder="Write a reply"></div><button type=submit class="btn btn-primary">Post</button></form></div></div>');}]);