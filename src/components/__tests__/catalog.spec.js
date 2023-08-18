import {describe, it, expect, beforeEach} from "vitest";
import {useCatalogStore} from "@/stores/catalog";
import {createPinia, setActivePinia} from "pinia";

describe('catalog', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    });
    it('request goods', async () => {
        const storeCatalog = useCatalogStore();
        const { data, error } = await storeCatalog.requestGoods();
        expect(error).toBe(null);
    })
})
