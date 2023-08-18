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
    it("button click", () => {
        const inputControl = wrapper.find('[id="exampleInputPassword1"]')
        inputControl.setValue('12345678')
        inputControl.trigger("blur");
        expect(wrapper.text()).not.toContain("this is a required field");
    });
});
