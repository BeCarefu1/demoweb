<template>
  <div>
    <div class="site_content">
      <div class="ProseMirror" contenteditable="false" tabindex="0">
        <h1>Распределительный пункт БКТП</h1>
        <p>
          Блочные комплектные распределительные пункты БКРП в бетонной оболочке
          и блочные комплектные трансформаторные распределительные пункты БКРТП
          в бетонной оболочке, совмещенные с трансформаторной подстанцией с
          одним или двумя силовыми трансформаторами служат для приема, передачи
          и преобразования электрической энергии трехфазного переменного тока
          частотой 50 Гц напряжением до 35 кВ, и предназначены для
          электроснабжения городских жилищно-коммунальных, общественных,
          инфраструктурных объектов, коттеджных поселков
        </p>
        <div class="tableWrapper">
          <table class="undefined" style="min-width: 183px;">
            <colgroup>
              <col style="width: 158px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td data-colwidth="158">
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
                    В условиях динамично развивающихся электрических сетей
                    города, применение БКРП и БКРТП является оптимальным
                    решением, как с технической, так и с экономической точек
                    зрения за счет снижение сроков строительства, монтажа и
                    пусконаладки.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1>КОНСТРУКТИВ</h1>
        <div class="tableWrapper">
          <table class="undefined" style="min-width: 205px;">
            <colgroup>
              <col style="width: 180px;" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td data-colwidth="180">
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
                    Распределительные подстанции БКРТП и БКРП состоят из трех
                    основных частей
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

        <div class="row">
          <div class="col">
            <p>
              Конструкция бетонной оболочки представляет собой
              железобетонную оболочку состоящую из стен, пола и крыши.
              Стены и пол являются несущими и ограждающими элементами,
              выполняются из тяжелого бетона с объемным армированием.
              Класс бетона по прочности на сжатие В25, морозостойкость не
              менее F150, марка бетона по водонепроницаемости W8.
            </p>
            <p>
              Конструкция кабельного сооружения представляет собой
              объемную железобетонную оболочку с монолитными стенками и
              дном. Кабельное сооружение является заглубленным фундаментом
              для БКРТП или БКРП, через который осуществляется ввод/вывод
              силовых кабелей. Для ввода/вывода силовых кабелей кабельное
              сооружение имеет специальные отверстия диаметром 160 мм по
              всему периметру.
            </p>
            <p>
              Толщина стен конструкции бетонной оболочки и кабельного
              сооружения 100 мм
            </p>
            <p>
              Внутренний объем бетонных оболочек разделен перегородкой на
              отсеки:
            </p>
            <ul>
              <li><p>отсек силового трансформатора</p></li>
              <li><p>отсек распределительных устройств</p></li>
            </ul>
          </div>
          <div class="col-3">
            <img :src="getUrl(images[0])" @click="previewImage(images[0])" />
            <img :src="getUrl(images[1])" @click="previewImage(images[1])" />
          </div>
        </div>

        <p>
          Отсек силового трансформатора имеет отдельный вход с металлическими
          воротами. Отсек распределительных устрйоств имеет отдельный вход с
          дверьми.
        </p>
        <p>
          В состав распределительных трансформаторных подстанций БКРТП входит
          железобетонный маслосборник под каждый силовой трансформатор (при
          установке маслонаполненного силового трансформатора), изготавливаемый
          в заводских условиях. Пол в помещении силового трансформатора выполнен
          с уклоном 2° к проему с установленным маслоприемником.
        </p>
        <p>
          Распределительные подстанции БКРТП возможно реализовать с двумя и
          более силовыми трансформаторами, как с выделенной абонентской частью,
          так и без выделенной абонентской части.
        </p>
        <h2>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
        <div class="tableWrapper">
          <table class="kursTable" style="min-width: 725px;">
            <colgroup>
              <col style="width: 675px;" />
              <col />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th data-colwidth="675"><p>Наименование параметра</p></th>
                <th><p>БКТРП</p></th>
                <th><p>БКРП</p></th>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Мощность силового трансформатора*, кВА</p>
                </td>
                <td>
                  <p>
                    16; 25; 40; 63; 100; 160; 250; 400; 630; 1000; 1250; 1600;
                    2500
                  </p>
                </td>
                <td><p>х (не устанавливается)</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Номинальное напряжение на стороне ВН, кВ</p>
                </td>
                <td><p>6; 6,3; 6,6; 10; 10,5; 20</p></td>
                <td><p>6; 6,3; 6,6;10; 10,5; 20</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Рабочее напряжение на стороне ВН, кВ</p>
                </td>
                <td><p>7,2; 12; 24;</p></td>
                <td><p>7,2; 12; 24;</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Номинальное напряжение на стороне НН, кВ</p>
                </td>
                <td><p>0,4</p></td>
                <td><p>x</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Номинальный ток сборных шин ВН, А</p>
                </td>
                <td><p>630; 1000; 1250; 1600; 2000</p></td>
                <td><p>630;1000; 1250; 1600; 2000</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Номинальный ток сборных шин НН, А</p>
                </td>
                <td>
                  <p>
                    400; 630; 800; 1000; 1250; 1600; 2000; 2500; 3200; 4000;
                    5000
                  </p>
                </td>
                <td><p>x</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>
                    Ток термической стойкости сборных шин на стороне ВН, кА/1с
                  </p>
                </td>
                <td><p>20; 25; 31,5</p></td>
                <td><p>20; 25; 31,5</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>
                    Ток электродинамической стойкости сборных шин на стороне ВН,
                    кА
                  </p>
                </td>
                <td><p>51; 64; 81</p></td>
                <td><p>51; 64; 81</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>
                    Ток термической стойкости сборных шин на стороне НН, кА/1с
                  </p>
                </td>
                <td><p>20; 50;100</p></td>
                <td><p>x</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>
                    Ток электродинамической стойкости сборных шин на стороне НН,
                    кА
                  </p>
                </td>
                <td><p>44; 110; 220</p></td>
                <td><p>x</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>
                    Номинальное напряжение цепей гарантированного оперативного
                    питания блоков РЗиА и управления силовых выключателей, В
                  </p>
                </td>
                <td><p>переменное/постоянное 220</p></td>
                <td><p>переменное/постоянн 220</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>
                    Номинальное напряжение цепей электромагнитных блокировок
                    ячеек КСО, В
                  </p>
                </td>
                <td><p>постоянное 220</p></td>
                <td><p>постоянное 220</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Номинальное напряжение цепей сигнализации и обогрева, В</p>
                </td>
                <td><p>переменное 220</p></td>
                <td><p>переменное 220</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Номинальное напряжение цепей освещения, В</p>
                </td>
                <td><p>переменное 24</p></td>
                <td><p>переменное 24</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Уровень изоляции по ГОСТ 1516.1:</p>
                  <p>с маслонаполненным герметичным трансформатором</p>
                  <p>с трансформатором с сухой изоляцией обмоток</p>
                </td>
                <td>
                  <p><br /></p>
                  <p>нормальная</p>
                  <p>облегченная</p>
                </td>
                <td>
                  <p><br /></p>
                  <p>нормальная</p>
                  <p>облегченная</p>
                </td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Климатическое исполнение по ГОСТ 15150</p>
                </td>
                <td><p>У1; УХЛ1</p></td>
                <td><p>У1; УХЛ1</p></td>
              </tr>
              <tr>
                <td data-colwidth="675"><p>Степень защиты по ГОСТ 14254</p></td>
                <td><p>IP23</p></td>
                <td><p>IP23</p></td>
              </tr>
              <tr>
                <td data-colwidth="675">
                  <p>Масса БК(Р)(Т)П, кг:</p>
                  <p>оболочка с оборудованием, без трансформатора</p>
                  <p>кабельное сооружение</p>
                  <p>маслосборник</p>
                </td>
                <td>
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
                <td data-colwidth="675"><p>Срок службы, лет</p></td>
                <td><p>не менее 25</p></td>
                <td><p>не менее 25</p></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><br /></p>
      </div>
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
export default class DistributionPointPage extends Vue {
  private imageBaseUrl: string = "https://kursufa.ru/js/static/page/distributionPoint/";

  private activeImage: string = "";
  private activeIndex: number = -1;
  private dialogVisible: boolean = false;

  private images: Image[] = [
    new Image("1s", "1"),
    new Image("2s", "2"),
  ];

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
