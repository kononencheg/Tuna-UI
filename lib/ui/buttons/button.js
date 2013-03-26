/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * @constructor
 * @extends {ui.Widget}
 * @param {!Node} target DOM-элемент.
 * @param {!ui.Container=} opt_container Контейнер.
 */
ui.buttons.Button = function(target, opt_container) {
  ui.Widget.call(this, target, opt_container);

  var self = this;

  /**
   * @param {Event} event Объект DOM-события.
   */
  this.__clickHandler = function(event) {
    util.dom.preventDefault(event);

    if (self.isEnabled()) {
      util.dom.stopPropagation(event);
      self.dispatch(new ui.buttons.ButtonEvent(
          self, ui.buttons.ButtonEvent.CLICK));
    }
  };
};

util.inherits(ui.buttons.Button, ui.Widget);


/**
 * @type {string}
 */
ui.buttons.Button.NAME = 'button';


/**
 * @inheritDoc
 */
ui.buttons.Button.prototype.init = function() {
  util.dom.addEventListener(this.getTarget(), 'click', this.__clickHandler);
  ui.Widget.prototype.init.call(this);
};


/**
 * @inheritDoc
 */
ui.buttons.Button.prototype.destroy = function() {
  util.dom.removeEventListener(this.getTarget(), 'click', this.__clickHandler);
  ui.Widget.prototype.destroy.call(this);
};