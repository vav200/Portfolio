let test_img = `<div class="statusbar">
  <div class="statusbar_filler"></div>
</div>
<p class="test__question">Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: </p>
<div class="header__imageblock">
<img src="./img/test-image.png" alt="Пирамида" class="test__image" />
</div>
<ul class="test__options">
  <li class="test__options-item bigger item_active">
    Оно остроконечное
    <input type="radio" value="rapid" class="test__options-radio" name="test_img" checked/>
  </li>
  <li class="test__options-item bigger">
    Оно устойчиво
    <input type="radio" value="sustainably" class="test__options-radio" name="test_img" />
  </li>
  <li class="test__options-item bigger">
    Оно находится в состоянии равновесия
    <input type="radio" value="balance" class="test__options-radio" name="test_img" />
  </li>
</ul>
<button class="button test-button" id="test_img">Далее</button>`;

export default test_img;
