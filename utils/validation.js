const setCookie = (date) => {
  document.cookie = `token=${date}; max-age=${24 * 60 * 60}; path=/`;
};

export { setCookie };
