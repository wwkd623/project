const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');

const slideCount = slideItems.length; // 2개
let index = 1;  // 실제 첫 슬라이드 위치

// 슬라이드 복제 (맨 앞에 마지막 슬라이드, 맨 뒤에 첫 슬라이드 붙임)
const firstClone = slideItems[0].cloneNode(true);
const lastClone = slideItems[slideCount - 1].cloneNode(true);

slides.appendChild(firstClone);
slides.insertBefore(lastClone, slideItems[0]);

// 페이지 번호 표시용 요소 추가
const slideCounter = document.createElement('div');
slideCounter.className = 'slide-counter';
slides.parentElement.appendChild(slideCounter);

// 현재 슬라이드 번호 업데이트 함수
function updateCounter(currentIndex) {
  let displayIndex = currentIndex;
  if (currentIndex === 0) displayIndex = slideCount;
  else if (currentIndex === slideCount + 1) displayIndex = 1;
  slideCounter.textContent = `${displayIndex} / ${slideCount}`;
}

// 위치 세팅 함수
function setPosition() {
  slides.style.transition = 'transform 0.3s ease-in-out';
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateCounter(index);
}

// 초기 위치 설정 및 번호 표시
setPosition();

// 다음 슬라이드 함수
function nextSlide() {
  index++;
  slides.style.transition = 'transform 0.3s ease-in-out';
  setPosition();
}

// 무한 루프 처리 (transitionend 이벤트)
slides.addEventListener('transitionend', () => {
  if (index === slideCount + 1) { // 마지막 클론에 도달했을 때
    slides.style.transition = 'none';
    index = 1;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateCounter(index);
  }
  if (index === 0) { // 첫 클론에 도달했을 때
    slides.style.transition = 'none';
    index = slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateCounter(index);
  }
});

// 자동 재생
let autoPlay = setInterval(nextSlide, 3000);

// 터치 스와이프 구현
let startX = 0;
let isDragging = false;

slides.parentElement.addEventListener('touchstart', e => {
  clearInterval(autoPlay);
  startX = e.touches[0].clientX;
  isDragging = true;
  slides.style.transition = 'none';
});

slides.parentElement.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;
  slides.style.transform = `translateX(${-index * 100 + (deltaX / window.innerWidth) * 100}%)`;
});

slides.parentElement.addEventListener('touchend', e => {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;
  const threshold = window.innerWidth / 4;

  slides.style.transition = 'transform 0.3s ease-in-out';

  if (diff > threshold) {
    index--;
  } else if (diff < -threshold) {
    index++;
  }

  setPosition();
  autoPlay = setInterval(nextSlide, 3000);
});
