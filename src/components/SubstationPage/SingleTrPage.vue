<template>
  <div class="site_content">
    <div class="ProseMirror" contenteditable="false" tabindex="0">
      <h1>Однотрансформаторная БКТП</h1>
      <p>
        Однотрансформаторные подстанции БКТП - блочные комплектные
        трансформаторные подстанции в бетонной оболочке с одним силовым
        трансформатором, служат для приема, передачи и преобразования
        электрической энергии трехфазного переменного тока частотой 50 Гц,
        напряжением до 20 кВ и предназначены для электроснабжения городских
        жилищно-коммунальных, общественных, инфраструктурных объектов,
        коттеджных поселков.
      </p>
      <div class="tableWrapper">
        <table class="layoutTable" style="min-width: 203px;">
          <colgroup>
            <col style="width: 178px;" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td data-colwidth="178">
                <p>
                  <img
                    src="data:image/png;base64,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"
                    contenteditable="false"
                    draggable="true"
                  /><br />
                </p>
              </td>
              <td>
                <p>
                  В условиях динамично развивающихся электрических сетей города,
                  применение однотрансформаторной блочной подстанции БКТП
                  является оптимальным решением, как с технической, так и с
                  технической, так и с экономической точек зрения, за счет
                  снижения сроков строительства, монтажа и пусконаладки
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col">
          <h2>КОНСТРУКТИВ</h2>
          <div class="tableWrapper">
            <table class="kursTable" style="min-width: 228px;">
              <colgroup>
                <col style="width: 203px;" />
                <col />
              </colgroup>
              <tbody>
              <tr>
                <td data-colwidth="203">
                  <p>
                    <img
                            src="data:image/png;base64,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"
                            contenteditable="false"
                            draggable="true"
                    /><br />
                  </p>
                </td>
                <td>
                  <p>
                    Однотрансформаторная БКТП состоит из трех основных частей:
                  </p>
                  <ul>
                    <li><p>Бетонная оболочка (надземная часть)</p></li>
                    <li><p>Кабельное сооружение (заглубленная часть)</p></li>
                    <li><p>Плита покрытия (фундаментная плита)</p></li>
                  </ul>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-4">
          <img :src="getUrl(images[0])" @click="previewImage(images[0])" />
        </div>
      </div>
      <p>
        Конструкция бетонной оболочки представляет собой железобетонную
        оболочку, состоящую из стен, пола и крыши. Стены и пол являются несущими
        и ограждающими элементами, выполняются из тяжелого бетона с объемным
        армированием. Класс бетона по прочности на сжатие В25, морозостойкость
        не менее F150, марка бетона по водонепроницаемости W8.
      </p>
      <p>
        Конструкция кабельного сооружения представляет собой объемную
        железобетонную оболочку с монолитными стенками и дном. Кабельное
        сооружение является заглубленным фундаментом для однотрансформаторной
        БКТП, через который осуществляется ввод/вывод силовых кабелей. Для
        ввода/вывода силовых кабелей сооружение имеет специальные отверстия
        диаметром 160 мм по всему периметру.
      </p>
      <p>Внутренний объем бетонных оболочек разделен перегородкой на отсеки:</p>
      <ul>
        <li><p>отсек силового трансформатора</p></li>
        <li><p>отсек распределительных устройств</p></li>
      </ul>
      <p>
        Отсек силового трансформатора имеет отдельный вход с металлическими
        воротами. Отсек распределительных устройств имеет отдельный вход с
        дверьми.
      </p>
      <p>
        В состав однотрансформаторной БКТП входит железобетонный маслосборник
        под каждый силовой трансформатор (при установке маслонаполненного
        силового трансформатора), изготавливаемый в заводских условиях. Пол в
        помещении силового трансформатора выполнен с уклоном 2° к проему с
        установленным маслоприемником.
      </p>
      <p>
        Однотрансформаторные подстанции БКТП возможно реализовать как с
        выделенной абонентской частью, так и без выделенной абонентской части.
      </p>
      <h2>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
      <div class="tableWrapper">
        <table class="kursTable" style="min-width: 852px;">
          <colgroup>
            <col style="width: 537px;" />
            <col style="width: 290px;" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th data-colwidth="537"><p>Наименование параметра</p></th>
              <th data-colwidth="290"><p>БКТРП</p></th>
              <th><p>БКРП</p></th>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Мощность силового трансформатора *, кВА</p>
              </td>
              <td data-colwidth="290">
                <p>
                  16; 25; 40; 63; 100; 160; 250; 400; 630; 1000; 1250; 1600;
                  2500
                </p>
              </td>
              <td><p>х (не устанавливается)</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Номинальное напряжение на стороне ВН, кВ</p>
              </td>
              <td data-colwidth="290"><p>6; 6,3; 6,6; 10; 10,5; 20</p></td>
              <td><p>6; 6,3; 6,6;10; 10,5; 20</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Рабочее напряжение на стороне ВН, кВ</p>
              </td>
              <td data-colwidth="290"><p>7,2; 12; 24;</p></td>
              <td><p>7,2; 12; 24;</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Номинальное напряжение на стороне НН, кВ</p>
              </td>
              <td data-colwidth="290"><p>0,4</p></td>
              <td><p>x</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Номинальный ток сборных шин ВН, А</p>
              </td>
              <td data-colwidth="290"><p>630; 1000; 1250; 1600; 2000</p></td>
              <td><p>630;1000; 1250; 1600; 2000</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Номинальный ток сборных шин НН, А</p>
              </td>
              <td data-colwidth="290">
                <p>
                  400; 630; 800; 1000; 1250; 1600; 2000; 2500; 3200; 4000; 5000
                </p>
              </td>
              <td><p>x</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>
                  Ток термической стойкости сборных шин на стороне ВН, кА/1с
                </p>
              </td>
              <td data-colwidth="290"><p>20; 25; 31,5</p></td>
              <td><p>20; 25; 31,5</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>
                  Ток электродинамической стойкости сборных шин на стороне ВН,
                  кА
                </p>
              </td>
              <td data-colwidth="290"><p>51; 64; 81</p></td>
              <td><p>51; 64; 81</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>
                  Ток термической стойкости сборных шин на стороне НН, кА/1с
                </p>
              </td>
              <td data-colwidth="290"><p>20; 50;100</p></td>
              <td><p>x</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>
                  Ток электродинамической стойкости сборных шин на стороне НН,
                  кА
                </p>
              </td>
              <td data-colwidth="290"><p>44; 110; 220</p></td>
              <td><p>x</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>
                  Номинальное напряжение цепей гарантированного оперативного
                  питания блоков РЗиА и управления силовых выключателей, В
                </p>
              </td>
              <td data-colwidth="290"><p>переменное/постоянное 220</p></td>
              <td><p>переменное/постоянн 220</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>
                  Номинальное напряжение цепей электромагнитных блокировок ячеек
                  КСО, В
                </p>
              </td>
              <td data-colwidth="290"><p>постоянное 220</p></td>
              <td><p>постоянное 220</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Номинальное напряжение цепей сигнализации и обогрева, В</p>
              </td>
              <td data-colwidth="290"><p>переменное 220</p></td>
              <td><p>переменное 220</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Номинальное напряжение цепей освещения, В</p>
              </td>
              <td data-colwidth="290"><p>переменное 24</p></td>
              <td><p>переменное 24</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Уровень изоляции по ГОСТ 1516.1:</p>
                <ul>
                  <li><p>с маслонаполненным герметичным трансформатором</p></li>
                  <li><p>с трансформатором с сухой изоляцией обмоток</p></li>
                </ul>
              </td>
              <td data-colwidth="290">
                <p><br /></p>
                <ul>
                  <li><p>нормальная</p></li>
                  <li><p>облегченная</p></li>
                </ul>
              </td>
              <td>
                <p><br /></p>
                <ul>
                  <li><p>нормальная</p></li>
                  <li><p>облегченная</p></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Климатическое исполнение по ГОСТ 15150</p>
              </td>
              <td data-colwidth="290"><p>У1; УХЛ1</p></td>
              <td><p>У1; УХЛ1</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p>Масса БК(Р)(Т)П, кг:</p>
                <p>оболочка с оборудованием,без трансформатора</p>
                <p>кабельное сооружение</p>
                <p>маслосборник</p>
              </td>
              <td data-colwidth="290">
                <p><br /></p>
                <p>не более 20000</p>
                <p>не более 7500/9500</p>
                <p>не более 250</p>
              </td>
              <td>
                <p><br /></p>
                <p>не более 20000</p>
                <p>не более 7500/9500</p>
                <p>не более 250</p>
              </td>
            </tr>
            <tr>
              <td data-colwidth="537"><p>Срок службы, лет</p></td>
              <td data-colwidth="290"><p>не менее 25</p></td>
              <td><p>не менее 25</p></td>
            </tr>
            <tr>
              <td data-colwidth="537">
                <p><br /></p>
              </td>
              <td data-colwidth="290">
                <p><br /></p>
              </td>
              <td>
                <p><br /></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><br /></p>
    </div>
    <ModalWindow
            :visible="dialogVisible"
            :image="activeImage"
            @close="dialogVisible = false"
            @nextSlide="nextSlide"
            @prevSlide="prevSlide"
            class="mt-2"
    />
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Image } from "@/models/ImageModel";

import ModalWindow from "@/components/Common/ModalWindow.vue";

@Component({
  components: {
    ModalWindow
  }
})
export default class SingleTrPage extends Vue {
  private imageBaseUrl: string = "https://kursufa.ru/js/static/page/singleTr/";

  private activeImage: string = "";
  private activeIndex: number = -1;
  private dialogVisible: boolean = false;

  private images: Image[] = [new Image("1s", "1")];

  private getUrl(image: Image, full?: boolean) {
    if (full) {
      return `${this.imageBaseUrl}${image.Full}.jpg`;
    }
    return `${this.imageBaseUrl}${image.Small}.jpg`;
  }

  previewImage(image: Image) {
    this.activeImage = this.getUrl(image, true);
    this.activeIndex = this.images.findIndex(x => x == image);
    this.dialogVisible = true;
  }

  prevSlide() {
    if (this.activeIndex != -1) {
      let image = this.images[this.activeIndex - 1];

      if (image) this.previewImage(image);
    }
  }

  nextSlide() {
    if (this.activeIndex != -1) {
      let image = this.images[this.activeIndex + 1];

      if (image) this.previewImage(image);
    }
  }
}
</script>
