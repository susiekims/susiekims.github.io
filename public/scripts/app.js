(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// random favicon on refresh
// random favicon on mousemove
var changeEmoji = function changeEmoji() {
  $(".favicon").attr("href", data.favicons[Math.floor(Math.random() * data.favicons.length)]);
  $(document).on("mousemove", function () {
    $("#emoji").text(data.emojis[Math.floor(Math.random() * data.emojis.length)]);
  });
}; // toggle dark mode/light mode if checkbox is checked


var lights = function lights() {
  $("input:checkbox").change(function () {
    if ($("input:checkbox").prop("checked")) {
      $("body").addClass("dark");

      if ($(window).width() > 600) {
        $(".susie").removeClass("dark-border-mobile");
        $(".susie").addClass("dark-border");
      } else {
        $(".susie").removeClass("dark-border");
        $(".susie").addClass("dark-border-mobile");
      }
    }

    if ($("input:checkbox").prop("checked") === false) {
      $("body").removeClass("dark");

      if ($(window).width() > 600) {
        $(".susie").removeClass("dark-border");
      } else {
        $(".susie").removeClass("dark-border-mobile");
      }
    }
  });
};

var showSection = function showSection(element) {
  if ($(window).width() > 600) {
    $(".".concat(element)).on("click", function (e) {
      e.stopPropagation();
      $("section").css({
        width: "10vw",
        height: "100vh"
      });
      $(".".concat(element)).css({
        width: "80vw"
      });
      $("section").removeClass("open");
      $("section").addClass("closed");
      $(".".concat(element)).removeClass("closed");
      $(".".concat(element)).addClass("open");
      $("section .content").toggle(false);
      $(".".concat(element, " .content")).toggle(true);
      $("section h1").toggle(true);

      if (element === "developer") {
        $("section h1").css({
          transform: "translate(-50%, -50%) rotate(90deg)"
        });
      } else if (element === "designer") {
        $("section h1").css({
          transform: "translate(-50%, -50%) rotate(-90deg)"
        });
      } else {
        $(".developer h1").css({
          transform: "translate(-50%, -50%) rotate(-90deg)"
        });
        $(".designer h1").css({
          transform: "translate(-50%, -50%) rotate(90deg)"
        });
      }

      $(".".concat(element, " h1")).toggle(false);
    });
  } else {
    $(".".concat(element)).on("click", function (e) {
      e.stopPropagation();
      $("section").css({
        width: "100vw",
        height: "33.333vh"
      });
      $("section h1").css({
        transform: "translate(-50%, -50%) rotate(0deg)"
      });
      $("section").css({
        height: "10vh"
      });
      $(".".concat(element)).css({
        height: "80vh"
      });
      $("section .content").toggle(false);
      $(".".concat(element, " .content")).toggle(true);
      $("section h1").toggle(true);
      $(".".concat(element, " h1")).toggle(false);
    });
  }
};

var hover = function hover() {
  $("section").hover(function () {
    if ($(window).width() > 600 && $("section").hasClass("open") === false) {
      $(this).css({
        width: "38%"
      });
    }
  }, function () {
    if ($(window).width() > 600 && $("section").hasClass("open") === false) {
      $(this).css({
        width: "33.333%"
      });
    }
  });
};

var closeViews = function closeViews() {
  $(".close").on("click", function (e) {
    e.stopPropagation();

    if ($(window).width() > 600) {
      $(".content").toggle(false);
      $("section").css({
        width: "33.33%"
      });
      $("section h1").toggle(true);
      $("section").removeClass("open");
      $("section").removeClass("closed");
      $("section h1").css({
        transform: "translate(-50%, -50%) rotate(0deg)"
      });
    } else {
      $(".content").toggle(false);
      $("section").css({
        height: "33.33vh"
      });
      $("section h1").toggle(true);
    }
  });
};

var displayIcons = function displayIcons() {
  data.icons.forEach(function (icon) {
    var altText = icon.split(".")[0];
    var iconHTML = "<li><img class=\"icon\" src=\"../public/assets/icons/".concat(icon, "\" alt=\"").concat(altText, "\" title=\"").concat(altText, "\"/></li>");
    $(".skills-list").append(iconHTML);
  });
};

var displayDev = function displayDev() {
  data.code.forEach(function (piece) {
    var newPiece = "<div class=\"piece scroll\">\n            <div class=\"piece-intro\">\n                <div class=\"piece-text\">\n                    <h2>".concat(piece.title, "</h2>\n                    <p>").concat(piece.desc, "</p>\n                    <div class=\"stack-roles\">\n                        <div class=\"column\">\n                            <h4>STACK</h4>\n                            <ul class=\"stack\">\n                            ").concat(piece.stack.map(function (skill) {
      return "<li>".concat(skill, "</li>");
    }).join(""), "\n                            </ul>\n                        </div>\n                        <div class=\"column\">\n                            <h4>ROLES</h4>\n                            <ul class=\"roles\">\n                            ").concat(piece.roles.map(function (role) {
      return "<li>".concat(role, "</li>");
    }).join(""), "\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <img src=\"../public/assets/dev/").concat(piece.img[0], "\"/>\n            </div>\n            <div class=\"images\">\n                ").concat(piece.img.slice(1).map(function (image) {
      return "<img src=\"../public/assets/dev/".concat(image, "\" />");
    }).join(""), "\n            </div>\n            <div class=\"links\">\n                <a class=\"link\" href=\"").concat(piece.live, "\">View Live</a>\n                <a class=\"link\" href=\"").concat(piece.github, "\">View on Gitub</a>\n            </div>\n        </div>");
    $(".developer .content").append(newPiece);
  });
};

var displayDesign = function displayDesign() {
  data.design.forEach(function (piece) {
    var newPiece = "<div class=\"piece scroll\">\n            <div class=\"piece-intro\">\n                <div class=\"piece-text\">\n                    <h2>".concat(piece.title, "</h2>\n                    <p>").concat(piece.desc, "</p>\n                    <div class=\"stack-roles\">\n                        <div class=\"column\">\n                            <h4>STACK</h4>\n                            <ul class=\"stack\">\n                            ").concat(piece.stack.map(function (skill) {
      return "<li>".concat(skill, "</li>");
    }).join(""), "\n                            </ul>\n                        </div>\n                        <div class=\"column\">\n                            <h4>ROLES</h4>\n                            <ul class=\"roles\">\n                            ").concat(piece.roles.map(function (role) {
      return "<li>".concat(role, "</li>");
    }).join(""), "\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <img src=\"").concat(piece.img[0], "\"/>\n            </div>\n            <div class=\"images\">\n                ").concat(piece.img.slice(1).map(function (image) {
      return "<img src=\"".concat(image, "\" />");
    }).join(""), "\n            </div>\n        </div>");
    $(".designer .content").append(newPiece);
  });
};

var events = function events() {
  document.addEventListener("keyup", function (e) {
    if (e.keyCode == 27) window.location.reload();
  });
  $(window).on("resize", function () {
    $("section h1").css({
      transform: "translate(-50%, -50%) rotate(0deg)"
    });
    $(".content").toggle(false);
    $(".wrapper h1").toggle(true);
    var windowWidth = $(window).width(); //mobile resize

    if (windowWidth < 600) {
      $("section").css({
        width: "100%",
        height: "33.333vh"
      });
      hover();
      showSection("developer");
      showSection("susie");
      showSection("designer");

      if ($("body").hasClass("dark")) {
        $(".susie").removeClass("dark-border");
        $(".susie").addClass("dark-border-mobile");
      } // desktop resize

    } else {
      $("section").css({
        width: "33.333%",
        height: "100vh"
      });
      hover();
      showSection("developer");
      showSection("susie");
      showSection("designer");

      if ($("body").hasClass("dark")) {
        $(".susie").removeClass("dark-border-mobile");
        $(".susie").addClass("dark-border");
      }
    }
  });
};

var init = function init() {
  hover();
  events();
  changeEmoji();
  closeViews();
  showSection("developer");
  showSection("susie");
  showSection("designer");
  displayDev();
  displayDesign();
  displayIcons();
  lights();
};

$(function () {
  init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQSxJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQWMsR0FBTTtBQUN4QixFQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYyxJQUFkLENBQ0UsTUFERixFQUVFLElBQUksQ0FBQyxRQUFMLENBQWMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxLQUFnQixJQUFJLENBQUMsUUFBTCxDQUFjLE1BQXpDLENBQWQsQ0FGRjtBQUlBLEVBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEVBQVosQ0FBZSxXQUFmLEVBQTRCLFlBQU07QUFDaEMsSUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksSUFBWixDQUNFLElBQUksQ0FBQyxNQUFMLENBQVksSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxLQUFnQixJQUFJLENBQUMsTUFBTCxDQUFZLE1BQXZDLENBQVosQ0FERjtBQUdELEdBSkQ7QUFLRCxDQVZELEMsQ0FZQTs7O0FBQ0EsSUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFTLEdBQU07QUFDbkIsRUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixNQUFwQixDQUEyQixZQUFXO0FBQ3BDLFFBQUksQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsSUFBcEIsQ0FBeUIsU0FBekIsQ0FBSixFQUF5QztBQUN2QyxNQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxRQUFWLENBQW1CLE1BQW5COztBQUNBLFVBQUksQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLEtBQVYsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0IsUUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksV0FBWixDQUF3QixvQkFBeEI7QUFDQSxRQUFBLENBQUMsQ0FBQyxRQUFELENBQUQs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LENBQVg7QUFDQSxNQUFBLFdBQVcsQ0FBQyxPQUFELENBQVg7QUFDQSxNQUFBLFdBQVcsQ0FBQyxVQUFELENBQVg7O0FBRUEsVUFBSSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsUUFBVixDQUFtQixNQUFuQixDQUFKLEVBQWdDO0FBQzlCLFFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLFdBQVosQ0FBd0Isb0JBQXhCO0FBQ0EsUUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksUUFBWixDQUFxQixhQUFyQjtBQUNEO0FBQ0Y7QUFDRixHQXRDRDtBQXVDRCxDQTVDRDs7QUE4Q0EsSUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFPLEdBQU07QUFDakIsRUFBQSxLQUFLO0FBQ0wsRUFBQSxNQUFNO0FBQ04sRUFBQSxXQUFXO0FBQ1gsRUFBQSxVQUFVO0FBQ1YsRUFBQSxXQUFXLENBQUMsV0FBRCxDQUFYO0FBQ0EsRUFBQSxXQUFXLENBQUMsT0FBRCxDQUFYO0FBQ0EsRUFBQSxXQUFXLENBQUMsVUFBRCxDQUFYO0FBQ0EsRUFBQSxVQUFVO0FBQ1YsRUFBQSxhQUFhO0FBQ2IsRUFBQSxZQUFZO0FBQ1osRUFBQSxNQUFNO0FBQ1AsQ0FaRDs7QUFjQSxDQUFDLENBQUMsWUFBVztBQUNYLEVBQUEsSUFBSTtBQUNMLENBRkEsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIHJhbmRvbSBmYXZpY29uIG9uIHJlZnJlc2hcbi8vIHJhbmRvbSBmYXZpY29uIG9uIG1vdXNlbW92ZVxuY29uc3QgY2hhbmdlRW1vamkgPSAoKSA9PiB7XG4gICQoXCIuZmF2aWNvblwiKS5hdHRyKFxuICAgIFwiaHJlZlwiLFxuICAgIGRhdGEuZmF2aWNvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5mYXZpY29ucy5sZW5ndGgpXVxuICApO1xuICAkKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCAoKSA9PiB7XG4gICAgJChcIiNlbW9qaVwiKS50ZXh0KFxuICAgICAgZGF0YS5lbW9qaXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5lbW9qaXMubGVuZ3RoKV1cbiAgICApO1xuICB9KTtcbn07XG5cbi8vIHRvZ2dsZSBkYXJrIG1vZGUvbGlnaHQgbW9kZSBpZiBjaGVja2JveCBpcyBjaGVja2VkXG5jb25zdCBsaWdodHMgPSAoKSA9PiB7XG4gICQoXCJpbnB1dDpjaGVja2JveFwiKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoXCJpbnB1dDpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiKSkge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJkYXJrXCIpO1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNjAwKSB7XG4gICAgICAgICQoXCIuc3VzaWVcIikucmVtb3ZlQ2xhc3MoXCJkYXJrLWJvcmRlci1tb2JpbGVcIik7XG4gICAgICAgICQoXCIuc3VzaWVcIikuYWRkQ2xhc3MoXCJkYXJrLWJvcmRlclwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIuc3VzaWVcIikucmVtb3ZlQ2xhc3MoXCJkYXJrLWJvcmRlclwiKTtcbiAgICAgICAgJChcIi5zdXNpZVwiKS5hZGRDbGFzcyhcImRhcmstYm9yZGVyLW1vYmlsZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCQoXCJpbnB1dDpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiZGFya1wiKTtcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDYwMCkge1xuICAgICAgICAkKFwiLnN1c2llXCIpLnJlbW92ZUNsYXNzKFwiZGFyay1ib3JkZXJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiLnN1c2llXCIpLnJlbW92ZUNsYXNzKFwiZGFyay1ib3JkZXItbW9iaWxlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzaG93U2VjdGlvbiA9IGVsZW1lbnQgPT4ge1xuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA2MDApIHtcbiAgICAkKGAuJHtlbGVtZW50fWApLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICQoYHNlY3Rpb25gKS5jc3Moe1xuICAgICAgICB3aWR0aDogXCIxMHZ3XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiXG4gICAgICB9KTtcbiAgICAgICQoYC4ke2VsZW1lbnR9YCkuY3NzKHsgd2lkdGg6IFwiODB2d1wiIH0pO1xuXG4gICAgICAkKFwic2VjdGlvblwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAkKFwic2VjdGlvblwiKS5hZGRDbGFzcyhcImNsb3NlZFwiKTtcblxuICAgICAgJChgLiR7ZWxlbWVudH1gKS5yZW1vdmVDbGFzcyhcImNsb3NlZFwiKTtcbiAgICAgICQoYC4ke2VsZW1lbnR9YCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuXG4gICAgICAkKGBzZWN0aW9uIC5jb250ZW50YCkudG9nZ2xlKGZhbHNlKTtcbiAgICAgICQoYC4ke2VsZW1lbnR9IC5jb250ZW50YCkudG9nZ2xlKHRydWUpO1xuICAgICAgJChgc2VjdGlvbiBoMWApLnRvZ2dsZSh0cnVlKTtcblxuICAgICAgaWYgKGVsZW1lbnQgPT09IFwiZGV2ZWxvcGVyXCIpIHtcbiAgICAgICAgJChcInNlY3Rpb24gaDFcIikuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg5MGRlZylcIlxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJkZXNpZ25lclwiKSB7XG4gICAgICAgICQoXCJzZWN0aW9uIGgxXCIpLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKVwiXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIi5kZXZlbG9wZXIgaDFcIikuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpXCJcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIuZGVzaWduZXIgaDFcIikuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg5MGRlZylcIlxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgJChgLiR7ZWxlbWVudH0gaDFgKS50b2dnbGUoZmFsc2UpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgICQoYC4ke2VsZW1lbnR9YCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgJChgc2VjdGlvbmApLmNzcyh7XG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgIGhlaWdodDogXCIzMy4zMzN2aFwiXG4gICAgICB9KTtcbiAgICAgICQoXCJzZWN0aW9uIGgxXCIpLmNzcyh7XG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDBkZWcpXCJcbiAgICAgIH0pO1xuICAgICAgJChgc2VjdGlvbmApLmNzcyh7IGhlaWdodDogXCIxMHZoXCIgfSk7XG4gICAgICAkKGAuJHtlbGVtZW50fWApLmNzcyh7IGhlaWdodDogXCI4MHZoXCIgfSk7XG4gICAgICAkKGBzZWN0aW9uIC5jb250ZW50YCkudG9nZ2xlKGZhbHNlKTtcbiAgICAgICQoYC4ke2VsZW1lbnR9IC5jb250ZW50YCkudG9nZ2xlKHRydWUpO1xuICAgICAgJChgc2VjdGlvbiBoMWApLnRvZ2dsZSh0cnVlKTtcbiAgICAgICQoYC4ke2VsZW1lbnR9IGgxYCkudG9nZ2xlKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgaG92ZXIgPSAoKSA9PiB7XG4gICQoXCJzZWN0aW9uXCIpLmhvdmVyKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNjAwICYmICQoXCJzZWN0aW9uXCIpLmhhc0NsYXNzKFwib3BlblwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoeyB3aWR0aDogXCIzOCVcIiB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNjAwICYmICQoXCJzZWN0aW9uXCIpLmhhc0NsYXNzKFwib3BlblwiKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoeyB3aWR0aDogXCIzMy4zMzMlXCIgfSk7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuY29uc3QgY2xvc2VWaWV3cyA9ICgpID0+IHtcbiAgJChcIi5jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDYwMCkge1xuICAgICAgJChcIi5jb250ZW50XCIpLnRvZ2dsZShmYWxzZSk7XG4gICAgICAkKFwic2VjdGlvblwiKS5jc3Moe1xuICAgICAgICB3aWR0aDogXCIzMy4zMyVcIlxuICAgICAgfSk7XG4gICAgICAkKGBzZWN0aW9uIGgxYCkudG9nZ2xlKHRydWUpO1xuICAgICAgJChcInNlY3Rpb25cIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgJChcInNlY3Rpb25cIikucmVtb3ZlQ2xhc3MoXCJjbG9zZWRcIik7XG4gICAgICAkKFwic2VjdGlvbiBoMVwiKS5jc3Moe1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKVwiXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5jb250ZW50XCIpLnRvZ2dsZShmYWxzZSk7XG4gICAgICAkKFwic2VjdGlvblwiKS5jc3Moe1xuICAgICAgICBoZWlnaHQ6IFwiMzMuMzN2aFwiXG4gICAgICB9KTtcbiAgICAgICQoYHNlY3Rpb24gaDFgKS50b2dnbGUodHJ1ZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlJY29ucyA9ICgpID0+IHtcbiAgZGF0YS5pY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgIGNvbnN0IGFsdFRleHQgPSBpY29uLnNwbGl0KFwiLlwiKVswXTtcbiAgICBjb25zdCBpY29uSFRNTCA9IGA8bGk+PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCIuLi9wdWJsaWMvYXNzZXRzL2ljb25zLyR7aWNvbn1cIiBhbHQ9XCIke2FsdFRleHR9XCIgdGl0bGU9XCIke2FsdFRleHR9XCIvPjwvbGk+YDtcbiAgICAkKFwiLnNraWxscy1saXN0XCIpLmFwcGVuZChpY29uSFRNTCk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheURldiA9ICgpID0+IHtcbiAgZGF0YS5jb2RlLmZvckVhY2gocGllY2UgPT4ge1xuICAgIGNvbnN0IG5ld1BpZWNlID0gYDxkaXYgY2xhc3M9XCJwaWVjZSBzY3JvbGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS1pbnRyb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWVjZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4ke3BpZWNlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cGllY2UuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFjay1yb2xlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TVEFDSzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic3RhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3BpZWNlLnN0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHNraWxsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8bGk+JHtza2lsbH08L2xpPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5ST0xFUzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicm9sZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3BpZWNlLnJvbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHJvbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxsaT4ke3JvbGV9PC9saT5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9wdWJsaWMvYXNzZXRzL2Rldi8ke3BpZWNlLmltZ1swXX1cIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAke3BpZWNlLmltZ1xuICAgICAgICAgICAgICAgICAgLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgICAubWFwKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIi4uL3B1YmxpYy9hc3NldHMvZGV2LyR7aW1hZ2V9XCIgLz5gO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua3NcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxpbmtcIiBocmVmPVwiJHtwaWVjZS5saXZlfVwiPlZpZXcgTGl2ZTwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxpbmtcIiBocmVmPVwiJHtwaWVjZS5naXRodWJ9XCI+VmlldyBvbiBHaXR1YjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICAgICQoXCIuZGV2ZWxvcGVyIC5jb250ZW50XCIpLmFwcGVuZChuZXdQaWVjZSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheURlc2lnbiA9ICgpID0+IHtcbiAgZGF0YS5kZXNpZ24uZm9yRWFjaChwaWVjZSA9PiB7XG4gICAgY29uc3QgbmV3UGllY2UgPSBgPGRpdiBjbGFzcz1cInBpZWNlIHNjcm9sbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLWludHJvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpZWNlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPiR7cGllY2UudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHtwaWVjZS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YWNrLXJvbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNUQUNLPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzdGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cGllY2Uuc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoc2tpbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxsaT4ke3NraWxsfTwvbGk+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJPTEVTPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyb2xlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cGllY2Uucm9sZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocm9sZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPGxpPiR7cm9sZX08L2xpPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGllY2UuaW1nWzBdfVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlc1wiPlxuICAgICAgICAgICAgICAgICR7cGllY2UuaW1nXG4gICAgICAgICAgICAgICAgICAuc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHtpbWFnZX1cIiAvPmA7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAkKFwiLmRlc2lnbmVyIC5jb250ZW50XCIpLmFwcGVuZChuZXdQaWVjZSk7XG4gIH0pO1xufTtcblxuY29uc3QgZXZlbnRzID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbiAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICQoXCJzZWN0aW9uIGgxXCIpLmNzcyh7XG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKVwiXG4gICAgfSk7XG4gICAgJChcIi5jb250ZW50XCIpLnRvZ2dsZShmYWxzZSk7XG4gICAgJChcIi53cmFwcGVyIGgxXCIpLnRvZ2dsZSh0cnVlKTtcbiAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vbW9iaWxlIHJlc2l6ZVxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDYwMCkge1xuICAgICAgJChcInNlY3Rpb25cIikuY3NzKHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzMuMzMzdmhcIlxuICAgICAgfSk7XG4gICAgICBob3ZlcigpO1xuICAgICAgc2hvd1NlY3Rpb24oXCJkZXZlbG9wZXJcIik7XG4gICAgICBzaG93U2VjdGlvbihcInN1c2llXCIpO1xuICAgICAgc2hvd1NlY3Rpb24oXCJkZXNpZ25lclwiKTtcbiAgICAgIGlmICgkKFwiYm9keVwiKS5oYXNDbGFzcyhcImRhcmtcIikpIHtcbiAgICAgICAgJChcIi5zdXNpZVwiKS5yZW1vdmVDbGFzcyhcImRhcmstYm9yZGVyXCIpO1xuICAgICAgICAkKFwiLnN1c2llXCIpLmFkZENsYXNzKFwiZGFyay1ib3JkZXItbW9iaWxlXCIpO1xuICAgICAgfVxuICAgICAgLy8gZGVza3RvcCByZXNpemVcbiAgICB9IGVsc2Uge1xuICAgICAgJChcInNlY3Rpb25cIikuY3NzKHtcbiAgICAgICAgd2lkdGg6IFwiMzMuMzMzJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIlxuICAgICAgfSk7XG4gICAgICBob3ZlcigpO1xuICAgICAgc2hvd1NlY3Rpb24oXCJkZXZlbG9wZXJcIik7XG4gICAgICBzaG93U2VjdGlvbihcInN1c2llXCIpO1xuICAgICAgc2hvd1NlY3Rpb24oXCJkZXNpZ25lclwiKTtcblxuICAgICAgaWYgKCQoXCJib2R5XCIpLmhhc0NsYXNzKFwiZGFya1wiKSkge1xuICAgICAgICAkKFwiLnN1c2llXCIpLnJlbW92ZUNsYXNzKFwiZGFyay1ib3JkZXItbW9iaWxlXCIpO1xuICAgICAgICAkKFwiLnN1c2llXCIpLmFkZENsYXNzKFwiZGFyay1ib3JkZXJcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGhvdmVyKCk7XG4gIGV2ZW50cygpO1xuICBjaGFuZ2VFbW9qaSgpO1xuICBjbG9zZVZpZXdzKCk7XG4gIHNob3dTZWN0aW9uKFwiZGV2ZWxvcGVyXCIpO1xuICBzaG93U2VjdGlvbihcInN1c2llXCIpO1xuICBzaG93U2VjdGlvbihcImRlc2lnbmVyXCIpO1xuICBkaXNwbGF5RGV2KCk7XG4gIGRpc3BsYXlEZXNpZ24oKTtcbiAgZGlzcGxheUljb25zKCk7XG4gIGxpZ2h0cygpO1xufTtcblxuJChmdW5jdGlvbigpIHtcbiAgaW5pdCgpO1xufSk7XG4iXX0=
