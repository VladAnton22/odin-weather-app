const requireIcons = require.context('../assets', false, /\.png$/);

const icons = {}

requireIcons.keys().forEach((filename) => {
    const key = filename.replace('./', '').replace('.png', '');
    icons[key] = requireIcons(filename);
})

export default icons;