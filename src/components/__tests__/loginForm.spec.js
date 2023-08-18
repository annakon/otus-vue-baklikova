import {describe, it, expect, beforeEach, vi} from "vitest";
import { mount } from "@vue/test-utils";
import component from "@/components/login/loginForm.vue";

vi.mock('vue-router')
describe("loginForm", () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(component, { global: {
                stubs: ['RouterLink'],
            } });
    })

    it("mounts without errors", () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);
    });
    it("renders all", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
