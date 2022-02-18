export const Navbar = () => ({
    active: false,
    activeSubmenu: null,

    toggle(logtext) {
        this.active = !this.active

        if (logtext) console.log(logtext);
    },

    toggleSubmenu(event, submenu) {
        if (!event.currentTarget.classList.contains('navbar__link--has-children')) return;
        
        event.preventDefault();

        if (this.activeSubmenu === submenu) {
            this.activeSubmenu = null;
        } else {
            this.activeSubmenu = submenu;
        }
    }
});

export const TutorialsSidebar = () => ({
    activeCategories: [],

    toggleCategory(category) {
        const categoryIndex = this.activeCategories.indexOf(category)
        
        if (categoryIndex === -1) {
            this.activeCategories.push(category);
        } else {
            this.activeCategories.splice(categoryIndex, 1);
        }
    }
})