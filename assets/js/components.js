export const Navbar = () => ({
    active: false,
    activeSubmenu: '',

    toggle(logtext) {
        this.active = !this.active;

        if (logtext) console.log(logtext);
    },

    toggleSubmenu(event, submenu) {
        if (
            !event.currentTarget.classList.contains(
                'navbar__link--has-children'
            )
        )
            return;

        event.preventDefault();

        if (this.activeSubmenu === submenu) {
            this.activeSubmenu = '';
        } else {
            this.activeSubmenu = submenu;
        }
    },
});

// If desktop, showMenu true
// If mobile && showMenu
// Or use dynamic class

export const TutorialsSidebar = () => ({
    activeCategories: [],
    showMenu: window.innerWidth > 768,

    handleResize() {
        if (window.innerWidth > 768) {
            this.showMenu = true;
        }
    },

    toggleMenu() {
        this.showMenu = !this.showMenu;
    },

    toggleCategory(category) {
        const categoryIndex = this.activeCategories.indexOf(category);

        if (categoryIndex === -1) {
            this.activeCategories.push(category);
        } else {
            this.activeCategories.splice(categoryIndex, 1);
        }
    },
});
