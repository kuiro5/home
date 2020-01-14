const tagEmojiMap = {
  coding: "\xF0\x9F\x92\xBB",
  books: "\xF0\x9F\x93\x9A",
};

const tagToEmoji = (tag) => {
  return tagEmojiMap[tag];
};

export default tagToEmoji;
