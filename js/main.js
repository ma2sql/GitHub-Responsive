// 즉시 실행 함수
(function (window, document) {
    'use strict';

    // 요소를 담는 변수의 경우, $를 prefix로 붙여준다.
    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }

})(window, document);