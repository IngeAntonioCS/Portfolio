const worksWrapper = document.querySelector('#works .wrapper');

const works = [
  {
    id: 1,
    name: 'BINARY X-RAY EMITTING SYSTEMS',
    description: 'Science IES (PIIISA), production of a research report, oral presentation of the work carried out in the project at a congress and preparation of a scientific poster.',
    fullDescription: 'Science IES (PIIISA), production of a research report, oral presentation of the work carried out in the project at a congress and preparation of a scientific poster. Promotion of early scientific vocations among ESO and Baccalaureate students from different institutes and educational centers in the province of Malaga.',
    LongDescription: 'Science IES (PIIISA), production of a research report, oral presentation of the work carried out in the project at a congress and preparation of a scientific poster. Promotion of early scientific vocations among ESO and Baccalaureate students from different institutes and educational centers in the province of Malaga.',
    image: {
      src: `./images/snapshoot/snapshoot_${this.id}.png`,
      alt: 'Project image',
    },
    info: {
      author: 'Antonio Chacón Salido',
      type: 'Participant',
      year: '2021',
    },
    technologies: ['Investigation Project', 'Analysis of Xray Emitting Systems'],
    buttons: {
      live: {
        text: 'see live',
        link: 'https://eventos.uma.es/59961/detail/proyecto-educativo-science-ies-2021.html',
        imgSrc: './images/arrow.svg',
      },
      source: {
        text: 'see certification',
        link: 'https://drive.google.com/file/d/18S9gdPipZKQkkrwKGwEt_YjWOZvZpZFc/view?usp=sharing',
        imgSrc: './images/arrow.svg',
      },
    },
  },
];

works.forEach((myWork) => {
  myWork.image = { src: `./images/snapshoot/snapshoot_${myWork.id}.png`, alt: 'Project image' };

  const article = document.createElement('article');
  article.classList.add('card', 'flex', 'flex-column', 'bg');

  const img = document.createElement('img');
  img.setAttribute('src', myWork.image.src);
  img.setAttribute('alt', myWork.image.alt);
  article.appendChild(img);

  const div = document.createElement('div');
  div.classList.add('content', 'hero');
  article.appendChild(div);

  const title = document.createElement('h3');
  title.classList.add('black', 'bold', 'cap');
  title.textContent = myWork.name;
  div.appendChild(title);

  const ul1 = document.createElement('ul');
  ul1.classList.add('info', 'flex');
  div.appendChild(ul1);

  const li1 = document.createElement('li');
  const a1 = document.createElement('a');
  a1.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'upper');
  a1.textContent = myWork.info.author;
  li1.appendChild(a1);
  ul1.appendChild(li1);

  const li2 = document.createElement('li');
  const a2 = document.createElement('a');
  a2.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'gray', 'cap');
  a2.textContent = myWork.info.type;
  li2.appendChild(a2);
  ul1.appendChild(li2);

  const li3 = document.createElement('li');
  li3.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'gray', 'cap');
  ul1.appendChild(li3);

  const time = document.createElement('time');
  time.classList.add('category', 'flex', 'cross-center', 'line-height', 'gray');
  time.setAttribute('datetime', '2015-10-22');
  time.textContent = myWork.info.year;
  li3.appendChild(time);

  const p = document.createElement('p');
  p.textContent = myWork.description;
  div.appendChild(p);

  const ul2 = document.createElement('ul');
  ul2.classList.add('tags', 'flex');

  myWork.technologies.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('line-height', 'round-borders');
    a.textContent = item;
    a.setAttribute('href', '#');
    li.appendChild(a);
    ul2.appendChild(li);
  });
  div.appendChild(ul2);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('see', 'bg', 'round-borders', 'cap');
  button.textContent = 'see project';
  div.appendChild(button);

  worksWrapper.appendChild(article);
});

const closeModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.remove();
};

const displayPopup = (work) => {
  const modal = document.createElement('div');
  modal.classList.add('modal-container', 'flex', 'cross-center', 'main-center');

  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('card', 'wrapper', 'bg', 'flex', 'flex-column');
  modal.appendChild(modalWrapper);

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('model-header', 'flex', 'space-between', 'cross-center');
  modalWrapper.appendChild(modalHeader);

  const modalTitle = document.createElement('h3');
  modalTitle.classList.add('black', 'bold', 'cap');
  modalTitle.innerHTML = work.name;
  modalHeader.appendChild(modalTitle);

  const modalClose = document.createElement('a');
  modalClose.classList.add('modal-close', 'flex', 'cross-center', 'main-center');
  modalClose.addEventListener('click', closeModal);
  modalHeader.appendChild(modalClose);

  const modalCloseIcon = document.createElement('img');
  modalCloseIcon.setAttribute('src', './images/cancel.svg');
  modalCloseIcon.setAttribute('alt', 'Close');
  modalClose.appendChild(modalCloseIcon);

  const infoList = document.createElement('ul');
  infoList.classList.add('info', 'flex');
  modalWrapper.appendChild(infoList);

  let infoItem = document.createElement('li');
  let infoItemLink = document.createElement('a');
  infoItemLink.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'upper');
  infoItemLink.innerText = work.info.author;
  infoItemLink.href = '#';
  infoItem.appendChild(infoItemLink);
  infoList.appendChild(infoItem);

  infoItem = document.createElement('li');
  infoItemLink = document.createElement('a');
  infoItemLink.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'upper');
  infoItemLink.innerText = work.info.type;
  infoItemLink.href = '#';
  infoItem.appendChild(infoItemLink);
  infoList.appendChild(infoItem);

  infoItem = document.createElement('li');
  infoItemLink = document.createElement('time');
  infoItemLink.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'cap');
  infoItemLink.innerHTML = work.info.year;
  infoItem.appendChild(infoItemLink);
  infoList.appendChild(infoItem);

  const modalImage = document.createElement('img');
  modalImage.setAttribute('src', work.image.src);
  modalImage.setAttribute('alt', work.image.alt);
  modalWrapper.appendChild(modalImage);

  const modalBottom = document.createElement('div');
  modalBottom.classList.add('modal-bottom', 'flex', 'flex-column');
  modalWrapper.appendChild(modalBottom);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalBottom.appendChild(modalContent);

  const modalHero = document.createElement('div');
  modalHero.classList.add('content', 'hero');
  modalContent.appendChild(modalHero);

  const modalDescription = document.createElement('p');   
  modalDescription.innerHTML = work.fullDescription;
  modalHero.appendChild(modalDescription);

  const modalSide = document.createElement('div');
  modalSide.classList.add('modal-side');
  modalBottom.appendChild(modalSide);

  const tagsList = document.createElement('ul');
  tagsList.classList.add('tags', 'flex');
  modalSide.appendChild(tagsList);

  const modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer', 'flex', 'space-between');
  modalSide.appendChild(modalFooter);

  for (let i = 0; i < 2; i += 1) {
    const modalFooterBtn = document.createElement('button');
    modalFooterBtn.classList.add('bg', 'round-borders', 'cap');
    modalFooterBtn.type = 'button';
    const textSpan = document.createElement('span');
    textSpan.innerHTML = work.buttons[Object.keys(work.buttons)[i]].text;
    if (i === 0) {
      modalFooterBtn.addEventListener('click', () => {
        window.location.href = work.buttons.live.link;
      });
    } else {
      modalFooterBtn.addEventListener('click', () => {
        window.location.href = work.buttons.source.link;
      });
    }
    modalFooterBtn.appendChild(textSpan);
    const imgSpan = document.createElement('img');
    imgSpan.setAttribute('src', work.buttons[Object.keys(work.buttons)[i]].imgSrc);
    imgSpan.setAttribute('alt', work.buttons[Object.keys(work.buttons)[i]].text);
    modalFooterBtn.appendChild(imgSpan);
    modalFooter.appendChild(modalFooterBtn);
  }

  document.body.appendChild(modal);
};

const seeButtons = document.querySelectorAll('.see');

seeButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    displayPopup(works[i]);
  });
});
