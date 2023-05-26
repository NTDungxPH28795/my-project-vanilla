import Navigo from 'navigo';

const router = new Navigo("/",{ linksSelector: "a", hash: true });

const render = (content, container) => {
    container.innerHTML = content();
};

// export default render;
export { render, router };
// exports render, router;