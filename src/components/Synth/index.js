import { Analyzer } from '@/components/Synth/Analyzer'
import {
  PiWaveSawtooth,
  PiWaveSquare,
  PiWaveSine,
  PiWaveTriangle,
  PiPlayPauseFill
} from 'react-icons/pi'
import {
  Button,
  ControlContainer,
  EffectContainer,
  Label,
  Slider,
  SynthContainer
} from './styles'

const OSCILLATORS = [
  { value: 'sine', label: 'Sine', icon: <PiWaveSine size={38} /> },
  { value: 'square', label: 'Square', icon: <PiWaveSquare size={38} /> },
  { value: 'sawtooth', label: 'Sawtooth', icon: <PiWaveSawtooth size={38} /> },
  { value: 'triangle', label: 'Triangle', icon: <PiWaveTriangle size={38} /> }
]
export default function Synth (props) {
  const {
    Waveform,
    changeAM,
    changeFM,
    changeFrequency,
    changeOscillator,
    changeSynthVolume,
    frequency,
    freqAM,
    freqFM,
    isPlaying,
    oscillatorType,
    toggleSynth,
    volume
  } = props

  const renderOscillators = (item, index) => (
    <Button
      key={item.label}
      $active={oscillatorType === item.value}
      onClick={() => changeOscillator(item.value)}
    >
      {item.icon}
    </Button>
  )

  return (
    <SynthContainer>
      <Analyzer waveform={Waveform} />
      <ControlContainer>
        <Button $active={isPlaying} onClick={toggleSynth}>
          <PiPlayPauseFill size={38} />
        </Button>
        {OSCILLATORS.map(renderOscillators)}
      </ControlContainer>
      <EffectContainer>
        <Label>
          Synth Volume ({volume})
          <Slider
            type='range'
            min='-30'
            max='5'
            step='0.1'
            defaultValue='5'
            value={volume}
            onChange={e => changeSynthVolume(parseFloat(e.target.value))}
          />
        </Label>
        <Label>
          Synth Frequency ({frequency})
          <Slider
            type='range'
            min='100'
            max='500'
            step='1'
            defaultValue='300'
            value={frequency}
            onChange={e => changeFrequency(parseFloat(e.target.value))}
          />
        </Label>
        <Label>
          Amplitude Modulation ({freqAM})
          <Slider
            type='range'
            min='0'
            max='20'
            step='0.1'
            defaultValue='0'
            value={freqAM}
            onChange={e => changeAM(parseFloat(e.target.value))}
          />
        </Label>
        <Label>
          Frequency Modulation ({freqFM})
          <Slider
            type='range'
            min='0'
            max='50'
            step='0.1'
            defaultValue='0'
            value={freqFM}
            onChange={e => changeFM(parseFloat(e.target.value))}
          />
        </Label>
      </EffectContainer>
    </SynthContainer>
  )
}
