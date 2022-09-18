import { StyledAbout } from '../styled/styled-about/About.styled';

export const About = () => {
  return (
    <StyledAbout>
      <header>
        <h5>Jak to wszystko się zaczęło?</h5>
      </header>
      <div className="about-content-container">
        <figure>
          <img
            src="https://veganbanda.pl/wp-content/uploads/2019/03/DSC_7867-1.jpg"
            alt=""
          />
        </figure>
        <div className="about-content-text">
          <q>
            Boimy się tego, czego nie znamy. Jeśli coś jest skryte pod zasłoną
            ciemności i niepewności, jest tajemnicą. Pozwolenie, by światło
            przedarło się przez tą ciemność sprawia, że wszystko staje się
            jasne.
          </q>
          <p>
            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit.
            Morbi tempus orci eu arcu eleifend sodales. Cras fringilla dui eu
            ornare efficitur. Suspendisse eu neque vestibulum, condimentum urna
            ut, eleifend orci. Duis nec mi eros. Sed sed ornare eros, a
            porttitor eros.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nunc tristique quis eros vitae porttitor.
          </p>
          <p>
            Pellentesque et odio ut erat dictum faucibus eu quis sapien. Etiam
            in feugiat dui, ac iaculis lorem. Nunc ullamcorper dictum nunc, non
            suscipit sem tempor vel. Praesent mollis turpis neque, ut volutpat
            urna pulvinar in. Nulla eu lorem convallis, hendrerit leo ac,
            finibus arcu. Fusce ut faucibus elit. Aenean vel eros vel arcu
            tincidunt suscipit. Cras egestas nibh eros, at facilisis lectus
            elementum et.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};
