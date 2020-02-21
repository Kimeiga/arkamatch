// tryna use vuexfire:
import { vuexfireMutations } from "vuexfire";

export default {
	namespaced: true,
	mutations: {
		...vuexfireMutations
	}
};
