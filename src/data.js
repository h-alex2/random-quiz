const data = {
  JS: [
    {
      quiz: "식별자란?",
      answer: `식별자는 어떤 대상을 유일하게 식별할 수 있는 이름을 말한다. 식별자에는 변수명, 함수명, 프로퍼티명, 클래스명 등이 있다.식별자는 데이터가 저장된 메모리 상의 주소를 기억한다. 따라서 식별자를 통해 메모리에 저장된 값을 참조할 수 있다.`,
    },
    {
      quiz: "변수란?",
      answer: `변수는 값의 위치(주소)를 기억하는 저장소. 즉 변수란 값이 위치하고 있는 메모리 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 명명한 식별자(identifier)이다.`,
    },
    {
      quiz: "undefined에 대해서 설명해주세요.",
      answer: `undefined 타입의 값은 undefined가 유일하다. 선언 이후 값을 할당하지 않은 변수는 undefined값을 가진다. 이는 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이루어질 때까지 빈 상태로 내버려두지 않고 자바스크립트 엔진이 undefined로 초기화 하기 때문이다.

      - undefined는 개발자가 의도적으로 할당한 값이 아니라 자바스크립트 엔진에 의해 초기화된 값이다. 변수를 참조했을 때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적이 없는 변수라는 것을 간파할 수 있다. 이 값을 개발자가 마음대로 할당한다면 본래이 취지와 어긋날 수 있으므로 권장하지 않는다. 변수의 값이 없다는 것을 명시하고 싶을 때는 null을 할당한다.`,
    },
  ],
  HTML: [
    {
      quiz: "DOM이란?",
    },
  ],
};

export default data;
