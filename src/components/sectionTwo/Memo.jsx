import React from "react";
import styles from "./css/styles.module.css";

export function Memo() {
  return (
    <div className={styles.memo__app}>
      <h2>메모내용</h2>
      <h3>・프론트 주제</h3>
      <p className={styles.front__memo_p}>
        주제 : webrtc, webgl, storybook, sdk제작, tdd, pwa 만들어보기
      </p>
      <h3>・책 저장 (✅은 있음)</h3>
      <ul className={styles.memo__ul}>
        <li>Node.js 디자인 패턴 바이블</li>
        <li>쿠버네티스 완벽 가이드</li>
        <li>실전 카프카 개발부터 운영까지</li>
        <li>도메인 주도 설계로 시작하는 마이크로서비스 개발</li>
        <li>Node.js 마이크로서비스 코딩 공작소</li>
        <li>HTTP 완벽 가이드✅</li>
        <li>Git 교과서</li>
        <li>운영체제 10판</li>
        <li>밑바닥부터 만드는 인터프리터 in Go</li>
      </ul>
    </div>
  );
}