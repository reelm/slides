dispatch('ConfirmDialog.Show');

action = waitAction(
  'ConfirmDialog.Confirm' or 'ConfirmDialog.Discard');

if (action == 'ConfirmDialog.Confirm')
  dispatch('BigRedButtonPressed');
