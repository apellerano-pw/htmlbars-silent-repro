import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | dummy test', function (hooks) {
  setupRenderingTest(hooks);

  test('reality', async function (assert) {
    await render(hbs`{{if true "yes" "no"}}`);
    assert.true(true);
  });
});
