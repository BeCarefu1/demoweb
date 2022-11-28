import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class BaseComponent extends Vue{
    protected loadingState: boolean = false;
    protected errorState: boolean = false;

    protected readonly MENU_ID: string = "5eb1009f2a253d2d90b64e91";

    showLoader(){
        this.loadingState = true;
    }

    hideLoader(){
        this.loadingState = false;
    }
}