import { Selector } from 'testcafe';

fixture `Fixture`
    .page('http://localhost:3000/fixtures/run-options/allow-multiple-windows/pages/switching-to-child/cross-domain-page.html');

test('test', async t => {
    await t
        .debug()
        .click('a')
        .debug()
        .typeText('input', 'text')
        .expect(Selector('input').value).eql('text');
});
