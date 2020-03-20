/**
 * Giving widget version 3.0
 */

var create_tithely_campus_widget = function (config) {
    if (!config) {
      config = {};
    }
    var campus_btns;
    var give_btns;
    var campus_btn;
    var give_btn;
    var selected_id;
    if (
      document.querySelectorAll(
        "div.tithely-campus-selector select.tithely-campus-dropdown"
      ) &&
      document.querySelectorAll(
        "div.tithely-campus-selector button.tithely-give-btn"
      )
    ) {
      campus_btns = document.querySelectorAll(
        "div.tithely-campus-selector select.tithely-campus-dropdown"
      );
      give_btns = document.querySelectorAll(
        "div.tithely-campus-selector button.tithely-give-btn"
      );
      var i = 0;
      for (var i = 0; i < campus_btns.length; i++) {
        give_btn = give_btns[i];
        campus_btn = campus_btns[i];
        campus_btn.onchange = function (e) {
          selected_id = this.options[this.selectedIndex].value;
          give_btn.dataset.churchId = selected_id;
          config.church_id = selected_id;
          //console.log(selected_id);
          create_tithely_widget(config);
        };
      }
    }
  
    create_tithely_widget(config);
  };
  
  /**
   * Get the host of this script so we know where we should be loading resources
   * from.
   */
  var getScriptHost = function (params) {
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = "";
    [].forEach.call(scripts, function (e) {
      if (e.src.indexOf("v3/give.js") > -1) {
        currentScriptPath = e.src;
      }
    });
  
    // Neat trick to grab just the domain.
    var tmp = document.createElement("a");
    tmp.href = currentScriptPath;
    return tmp.hostname;
  };
  
  /**
   * Create the widget.
   */
  var create_tithely_widget = function (config) {
    if (!config) {
      config = {};
    }
  
    var global_url = "https://tithe.ly";
    var scriptHost = getScriptHost();
  
    if (scriptHost != "tithe.ly") {
      // Dev needs to work from other hosts for testing.
      if (scriptHost == 'tithelydev.com') {
        global_url = "https://" + scriptHost;
      } else {
        // We're on dev or local -- assume we want to load the scripts from the same
        // host as this one.
        global_url = "//" + scriptHost;
      }
    }
  
    var global = this;
  
    // Remember default page overflow value
    var current_doc_overflow_y = document.body.style.overflowY;
    if (current_doc_overflow_y.length < 0) {
      current_doc_overflow_y = "visible";
    }
  
    var give_btn;
    var give_btns;
    if (document.getElementsByClassName("tithely-give-btn")) {
      give_btns = document.getElementsByClassName("tithely-give-btn");
      for (var i = 0; i < give_btns.length; i++) {
        give_btns[i].onclick = function (e) {
          if (this.getAttribute("data-church-id")) {
            config.church_id = this.getAttribute("data-church-id");
          }
          // Other config options
          var extra_params = "?widget=1";
          if (this.getAttribute("data-amount")) {
            extra_params =
              extra_params + "&amount=" + this.getAttribute("data-amount");
          }
          if (this.getAttribute("data-action")) {
            extra_params =
              extra_params + "&action=" + this.getAttribute("data-action");
          }
          if (this.getAttribute("data-giving-to")) {
            extra_params =
              extra_params + "&giving_to=" + this.getAttribute("data-giving-to");
          }
          if (document.body.clientWidth < 740 || mobilecheck()) {
            // Redirect if smaller screensize
            window.location.href =
              global_url +
              "/give_new/www/#/tithely/give-one-time/" +
              config.church_id +
              extra_params;
          } else {
            create_tithely_iframe(extra_params);
          }
        };
      }
    }
    if (document.getElementById("tithely-give-btn")) {
      give_btn = document.getElementById("tithely-give-btn");
      give_btn.onclick = function (e) {
        if (this.getAttribute("data-church-id")) {
          config.church_id = this.getAttribute("data-church-id");
        }
        // Other config options
        var extra_params = "?widget=1";
        if (this.getAttribute("data-amount")) {
          extra_params =
            extra_params + "&amount=" + this.getAttribute("data-amount");
        }
        if (this.getAttribute("data-action")) {
          extra_params =
            extra_params + "&action=" + this.getAttribute("data-action");
        }
        if (this.getAttribute("data-giving-to")) {
          extra_params =
            extra_params + "&giving_to=" + this.getAttribute("data-giving-to");
        }
        if (document.body.clientWidth < 740 || mobilecheck()) {
          // Redirect if smaller screensize
          window.location.href =
            global_url +
            "/give_new/www/#/tithely/give-one-time/" +
            config.church_id +
            extra_params;
        } else {
          create_tithely_iframe(extra_params);
        }
      };
    }
  
    function mobilecheck() {
      var check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }
  
    function fade_out(element) {
      var op = 1; // initial opacity
      var timer = setInterval(function () {
        if (op <= 0.1) {
          clearInterval(timer);
          element.style.display = "none";
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op -= op * 0.1;
      }, 3);
    }
  
    function fade_in(element) {
      element.style.display = "flex";
      element.style.opacity = 0;
      element.style.filter = "alpha(opacity=0)";
      var op = 0; // initial opacity
      var timer = setInterval(function () {
        if (op >= 0.9) {
          clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op = op + 0.1;
      }, 10);
      // Load inner part of the widget
      setTimeout(function () {
        var loader = document.getElementById("tithely-web-widget-preloader");
        loader.style.display = "none";
        var innerElement = document.getElementById("tithely-web-widget-wrapper");
        var op = 0; // initial opacity
        var timer = setInterval(function () {
          if (op >= 0.9) {
            clearInterval(timer);
          }
          innerElement.style.opacity = op;
          innerElement.style.filter = "alpha(opacity=" + op * 100 + ")";
          op = op + 0.1;
        }, 10);
      }, 2000);
    }
  
    //Create Tithe.ly JS widget
    global.create_tithely_iframe = function (extra_params) {
      // Lock body into overflow hidden (so scroll in widget definitely works)
      document.body.style.setProperty("overflow-y", "hidden", "important");
      // Created widget
      var widget;
      if (document.getElementById("tithely-widget-wrapper")) {
        document.getElementById("tithely-widget-wrapper").remove();
      }
      widget = document.createElement("div");
      widget.id = "tithely-widget-wrapper";
      widget.style.width = "100%";
      widget.style.height = "100%";
      widget.style.position = "fixed";
      widget.style.top = 0;
      widget.style.left = 0;
      widget.style.zIndex = "99999";
      widget.style.background = "rgba(44,62,81,0.9)";
      widget.style.display = "none";
      widget.style.overflow = "auto";
      widget.style.flexDirection = "column";
  
      var height = '100%';
      if (config.church_id) {
        widget.innerHTML =
          '<div style="text-align: right; margin: 8px 15px 0; font-family: \'Helvetica Neue\', \'Roboto\', \'Segoe UI\', sans-serif; color: #fff;"><a style="color: #fff; text-decoration: none; font-size: 18px;" href="#">x</a></div><div id="tithely-web-widget-outer" style="position: relative; margin: 15px auto; width: 90%; height: 100%; min-width: 300px; max-width: 600px; font-family: \'Helvetica Neue\', \'Roboto\', \'Segoe UI\', sans-serif; color: #fff; font-size: 13px;"><div id="tithely-web-widget-preloader" style="text-align: center; margin-top: 150px; opacity: .3;"><embed style="width: 60px; height: 60px;" type="image/svg+xml" src="https://tithe.ly/widget/ripple.svg" /></div><div id="tithely-frame-wrap" style="height: 100%; width: 100%; max-width: 600px; max-height: 600px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"><iframe id="tithely-web-widget-wrapper" frameborder="0" src="' +
          global_url +
          "/give_new/www/#/tithely/give-one-time/" +
          config.church_id +
          extra_params +
          '" width="100%" height="' +
          height +
          '" style="overflow: hidden; box-shadow: 0 0 6px #333; background-color: #fff; border-radius: 3px; opacity: 0;"></iframe><div style="font-family: \'Helvetica Neue\', \'Roboto\', \'Segoe UI\', sans-serif; color: #fff; margin: 8px; text-align: center;">Powered by <a target="_blank" style="color: #fff; text-decoration: none;" href="https://tithe.ly">Tithe.ly</a></div></div></div>';
      } else {
        widget.innerHTML =
          '<div style="margin: 20px auto 0 auto; width: 80%; background-color: #fff; padding: 8px 20px; color: #333; font-family: arial; border-radius: 3px;">There was a problem pulling up this church.</div>';
      }
      fade_in(widget);
      widget.onclick = function (e) {
        // Reset default value of overflow-y
        document.body.style.setProperty("overflow-y", current_doc_overflow_y);
        fade_out(widget);
      };
      document.body.appendChild(widget);
    };
  };