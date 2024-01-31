document.body.insertAdjacentHTML('beforeend', `
  <div id="weather-alert" class="ntf-alert p-red corner-box-1" style="top: ${window.innerHeight}px">
    <div class="corner-textbox-1" onclick="weatherNotifications.closeAlert()">
      <div class="ntf-alert-title">
        <div>Внимание!</div>
      </div>
      <br/>
      <div class="ntf-close ntf-alert-body-header" title="Закрыть">${message}</div>
    </div>
  </div>
`)
