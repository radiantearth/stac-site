import 'core-js/features/dom-collections/for-each';
import 'core-js/stable/queue-microtask';

import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import { Navbar, TutorialsSidebar } from './components';

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('navbar', Navbar);
    Alpine.data('tutorialsSidebar', TutorialsSidebar);
});

Alpine.plugin(collapse);
Alpine.start();
