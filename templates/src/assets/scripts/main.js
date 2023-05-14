import domready from 'domready';
import { init } from 'Models/utils/app';
import { dispatch } from 'Models/utils/event-bus';
import 'Bootstrap';
import {} from './components/vanilla/team-list';

domready(() => {
	dispatch('domready');
	init();
});
