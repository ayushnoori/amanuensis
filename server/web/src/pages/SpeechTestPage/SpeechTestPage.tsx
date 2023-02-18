import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

import 'regenerator-runtime/runtime.js';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const appId = '1152264a-b309-4d68-8d75-dd113078309d';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
      >
        Hold to talk
      </button>
      <p>{transcript}</p>
    </div>
  );
};

const SpeechTestPage = () => {
  return (
    <>
      <MetaTags title="SpeechTest" description="SpeechTest page" />

      <h1>SpeechTestPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SpeechTestPage/SpeechTestPage.tsx</code>
      </p>
      <p>
        My default route is named <code>speechTest</code>, link to me with `
        <Link to={routes.speechTest()}>SpeechTest</Link>`
      </p>
      <Dictaphone />
    </>
  );
};

export default SpeechTestPage;
