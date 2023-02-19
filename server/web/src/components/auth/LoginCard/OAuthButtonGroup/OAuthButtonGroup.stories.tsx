import OAuthButtonGroup from './OAuthButtonGroup';

export const generated = () => {
  return <OAuthButtonGroup loginWithProvider={() => {}} />;
};

export const disabled = () => {
  return <OAuthButtonGroup disabled loginWithProvider={() => {}} />;
};

export default { title: 'Components/OAuthButtonGroup' };
