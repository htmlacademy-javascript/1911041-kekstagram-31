const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  'Артем', 'Сергей', 'Аня', 'Тимур', 'Арсений', 'Юлия', 'Семен'
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
let commentsId = 0;
let discriptId = 0;
let urlId = 0;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getComment() {
  return ({
    return: {
      id: ++commentsId,
      avatar: `img/avatar-${getRandomInteger(0, 6)}.svg`,
      message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
      name: NAME[getRandomInteger(0, NAME.length - 1)],
    }
  });
}

const comments = Array.from({length: getRandomInteger(0, 30)}, getComment);
function toDiscript(){
  return{
    id: ++discriptId,
    url: `url/${++urlId}`,
    description: 'Это я пляже',
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    Comments: comments,};
}

const genDiscript = Array.from({length: 25}, toDiscript);

console.log(genDiscript);
