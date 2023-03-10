import classes from './FooterBar.module.css';

export default function FooterBar() {
  const currYear = new Date().getFullYear();

  return (
    <footer className={classes.footerBar}>
      [SSAFY] 7기 대전 2반 빅데이터(추천) 도메인 특화 프로젝트 PetSure
      <br />
      [Fullstack | 김지수 권예슬 전지수] [Frontend | 이성재 김채윤]
      <br />
      &copy; {currYear} PetSure. All rights reserved.
    </footer>
  );
}
