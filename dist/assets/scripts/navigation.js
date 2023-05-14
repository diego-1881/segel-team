"use strict";
(self["webpackChunkproject_name"] = self["webpackChunkproject_name"] || []).push([["navigation"],{

/***/ "./templates/src/assets/scripts/components/vanilla/navigation.js":
/*!***********************************************************************!*\
  !*** ./templates/src/assets/scripts/components/vanilla/navigation.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Models_locker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/locker */ "./templates/src/assets/scripts/models/locker.js");

/* harmony default export */ __webpack_exports__["default"] = (element => {
  const elements = {
    mobileToggle: element.querySelector('.js-navigation__mobile-toggle')
  };
  const states = {
    mobileNavOpen: 'is-mobile-navigation-open'
  };
  function init() {
    addListeners();
  }
  function addListeners() {
    elements.mobileToggle.addEventListener('click', mobileToggleClickHandler);
  }
  function mobileToggleClickHandler() {
    element.classList.toggle(states.mobileNavOpen);
    if (element.classList.contains(states.mobileNavOpen)) {
      (0,Models_locker__WEBPACK_IMPORTED_MODULE_0__.lockPage)();
    } else {
      (0,Models_locker__WEBPACK_IMPORTED_MODULE_0__.unlockPage)();
    }
  }
  init();
});

/***/ }),

/***/ "./templates/src/assets/scripts/models/locker.js":
/*!*******************************************************!*\
  !*** ./templates/src/assets/scripts/models/locker.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lockPage": function() { return /* binding */ lockPage; },
/* harmony export */   "unlockPage": function() { return /* binding */ unlockPage; }
/* harmony export */ });
const states = {
  isLocked: 'is-locked'
};
const lockElement = document.querySelector('.page');
const documentElement = document.documentElement;
let locked = false;
let scrollPos = {
  x: 0,
  y: 0
};
function lockPage() {
  if (locked || !lockElement) {
    return false;
  }
  scrollPos = {
    x: window.scrollX,
    y: window.scrollY
  };
  locked = true;
  lockElement.style.top = -scrollPos.y + 'px';
  documentElement.classList.add(states.isLocked);
}
function unlockPage() {
  if (!locked) {
    return false;
  }
  documentElement.classList.remove(states.isLocked);
  // prevent smooth scroll behavior while jumping back
  documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(scrollPos.x, scrollPos.y);
  lockElement.style.top = 'auto';
  locked = false;
  documentElement.style.scrollBehavior = null;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNxRDtBQUVyRCwrREFBZUUsT0FBTyxJQUFJO0VBQ3pCLE1BQU1DLFFBQVEsR0FBRztJQUNoQkMsWUFBWSxFQUFFRixPQUFPLENBQUNHLGFBQWEsQ0FBQywrQkFBK0I7RUFDcEUsQ0FBQztFQUVELE1BQU1DLE1BQU0sR0FBRztJQUNkQyxhQUFhLEVBQUU7RUFDaEIsQ0FBQztFQUVELFNBQVNDLElBQUlBLENBQUEsRUFBSTtJQUNoQkMsWUFBWSxFQUFFO0VBQ2Y7RUFFQSxTQUFTQSxZQUFZQSxDQUFBLEVBQUk7SUFDeEJOLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLHdCQUF3QixDQUFDO0VBQzFFO0VBRUEsU0FBU0Esd0JBQXdCQSxDQUFBLEVBQUk7SUFDcENULE9BQU8sQ0FBQ1UsU0FBUyxDQUFDQyxNQUFNLENBQUNQLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDO0lBRTlDLElBQUlMLE9BQU8sQ0FBQ1UsU0FBUyxDQUFDRSxRQUFRLENBQUNSLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDLEVBQUU7TUFDckRQLHVEQUFRLEVBQUU7SUFDWCxDQUFDLE1BQU07TUFDTkMseURBQVUsRUFBRTtJQUNiO0VBQ0Q7RUFFQU8sSUFBSSxFQUFFO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JELE1BQU1GLE1BQU0sR0FBRztFQUNkUyxRQUFRLEVBQUU7QUFDWCxDQUFDO0FBRUQsTUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNaLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDbkQsTUFBTWEsZUFBZSxHQUFHRCxRQUFRLENBQUNDLGVBQWU7QUFFaEQsSUFBSUMsTUFBTSxHQUFHLEtBQUs7QUFDbEIsSUFBSUMsU0FBUyxHQUFHO0VBQ2ZDLENBQUMsRUFBRSxDQUFDO0VBQ0pDLENBQUMsRUFBRTtBQUNKLENBQUM7QUFFTSxTQUFTdEIsUUFBUUEsQ0FBQSxFQUFJO0VBQzNCLElBQUltQixNQUFNLElBQUksQ0FBQ0gsV0FBVyxFQUFFO0lBQzNCLE9BQU8sS0FBSztFQUNiO0VBQ0FJLFNBQVMsR0FBRztJQUNYQyxDQUFDLEVBQUVFLE1BQU0sQ0FBQ0MsT0FBTztJQUNqQkYsQ0FBQyxFQUFFQyxNQUFNLENBQUNFO0VBQ1gsQ0FBQztFQUNETixNQUFNLEdBQUcsSUFBSTtFQUNiSCxXQUFXLENBQUNVLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQUNQLFNBQVMsQ0FBQ0UsQ0FBQyxHQUFHLElBQUk7RUFDM0NKLGVBQWUsQ0FBQ04sU0FBUyxDQUFDZ0IsR0FBRyxDQUFDdEIsTUFBTSxDQUFDUyxRQUFRLENBQUM7QUFDL0M7QUFFTyxTQUFTZCxVQUFVQSxDQUFBLEVBQUk7RUFDN0IsSUFBSSxDQUFDa0IsTUFBTSxFQUFFO0lBQ1osT0FBTyxLQUFLO0VBQ2I7RUFDQUQsZUFBZSxDQUFDTixTQUFTLENBQUNpQixNQUFNLENBQUN2QixNQUFNLENBQUNTLFFBQVEsQ0FBQztFQUNqRDtFQUNBRyxlQUFlLENBQUNRLEtBQUssQ0FBQ0ksY0FBYyxHQUFHLE1BQU07RUFDN0NQLE1BQU0sQ0FBQ1EsUUFBUSxDQUFDWCxTQUFTLENBQUNDLENBQUMsRUFBRUQsU0FBUyxDQUFDRSxDQUFDLENBQUM7RUFDekNOLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDQyxHQUFHLEdBQUcsTUFBTTtFQUM5QlIsTUFBTSxHQUFHLEtBQUs7RUFDZEQsZUFBZSxDQUFDUSxLQUFLLENBQUNJLGNBQWMsR0FBRyxJQUFJO0FBQzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1uYW1lLy4vdGVtcGxhdGVzL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3ZhbmlsbGEvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW5hbWUvLi90ZW1wbGF0ZXMvc3JjL2Fzc2V0cy9zY3JpcHRzL21vZGVscy9sb2NrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBsb2NrUGFnZSwgdW5sb2NrUGFnZSB9IGZyb20gJ01vZGVscy9sb2NrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50ID0+IHtcblx0Y29uc3QgZWxlbWVudHMgPSB7XG5cdFx0bW9iaWxlVG9nZ2xlOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1uYXZpZ2F0aW9uX19tb2JpbGUtdG9nZ2xlJyksXG5cdH07XG5cblx0Y29uc3Qgc3RhdGVzID0ge1xuXHRcdG1vYmlsZU5hdk9wZW46ICdpcy1tb2JpbGUtbmF2aWdhdGlvbi1vcGVuJyxcblx0fTtcblxuXHRmdW5jdGlvbiBpbml0ICgpIHtcblx0XHRhZGRMaXN0ZW5lcnMoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZExpc3RlbmVycyAoKSB7XG5cdFx0ZWxlbWVudHMubW9iaWxlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9iaWxlVG9nZ2xlQ2xpY2tIYW5kbGVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1vYmlsZVRvZ2dsZUNsaWNrSGFuZGxlciAoKSB7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHN0YXRlcy5tb2JpbGVOYXZPcGVuKTtcblxuXHRcdGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhzdGF0ZXMubW9iaWxlTmF2T3BlbikpIHtcblx0XHRcdGxvY2tQYWdlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHVubG9ja1BhZ2UoKTtcblx0XHR9XG5cdH1cblxuXHRpbml0KCk7XG59O1xuIiwiY29uc3Qgc3RhdGVzID0ge1xuXHRpc0xvY2tlZDogJ2lzLWxvY2tlZCcsXG59O1xuXG5jb25zdCBsb2NrRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbmxldCBsb2NrZWQgPSBmYWxzZTtcbmxldCBzY3JvbGxQb3MgPSB7XG5cdHg6IDAsXG5cdHk6IDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9ja1BhZ2UgKCkge1xuXHRpZiAobG9ja2VkIHx8ICFsb2NrRWxlbWVudCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRzY3JvbGxQb3MgPSB7XG5cdFx0eDogd2luZG93LnNjcm9sbFgsXG5cdFx0eTogd2luZG93LnNjcm9sbFksXG5cdH07XG5cdGxvY2tlZCA9IHRydWU7XG5cdGxvY2tFbGVtZW50LnN0eWxlLnRvcCA9IC1zY3JvbGxQb3MueSArICdweCc7XG5cdGRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0YXRlcy5pc0xvY2tlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmxvY2tQYWdlICgpIHtcblx0aWYgKCFsb2NrZWQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0ZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc3RhdGVzLmlzTG9ja2VkKTtcblx0Ly8gcHJldmVudCBzbW9vdGggc2Nyb2xsIGJlaGF2aW9yIHdoaWxlIGp1bXBpbmcgYmFja1xuXHRkb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnYXV0byc7XG5cdHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxQb3MueCwgc2Nyb2xsUG9zLnkpO1xuXHRsb2NrRWxlbWVudC5zdHlsZS50b3AgPSAnYXV0byc7XG5cdGxvY2tlZCA9IGZhbHNlO1xuXHRkb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBudWxsO1xufVxuIl0sIm5hbWVzIjpbImxvY2tQYWdlIiwidW5sb2NrUGFnZSIsImVsZW1lbnQiLCJlbGVtZW50cyIsIm1vYmlsZVRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdGF0ZXMiLCJtb2JpbGVOYXZPcGVuIiwiaW5pdCIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2JpbGVUb2dnbGVDbGlja0hhbmRsZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsImlzTG9ja2VkIiwibG9ja0VsZW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImxvY2tlZCIsInNjcm9sbFBvcyIsIngiLCJ5Iiwid2luZG93Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzdHlsZSIsInRvcCIsImFkZCIsInJlbW92ZSIsInNjcm9sbEJlaGF2aW9yIiwic2Nyb2xsVG8iXSwic291cmNlUm9vdCI6IiJ9