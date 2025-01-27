
// Icons from Lucide (optional)
import {
  Type,
  Image,
  Camera,
  Mic,
  Globe,
  File,
  Sliders,
  Play,
  ToggleLeft,
  GitBranch,
  Timer,
  MessageSquare,
  AlertCircle,
  Database,
  Search,
  Terminal,
  FormInput,
} from 'lucide-react'

import { InstructionNode } from './components/nodes/InstructionNode'
import { TextNode } from './components/nodes/TextNode'
import { RangeNode } from './components/nodes/RangeNode'
import { ButtonNode } from './components/nodes/ButtonNode'
import { ToggleNode } from './components/nodes/ToggleNode'
import { SpeechNode } from './components/nodes/SpeechNode'
import { ConditionNode } from './components/nodes/ConditionNode'
import { TimerNode } from './components/nodes/TimerNode'
import { ImageNode } from './components/nodes/ImageNode'
import { CameraNode } from './components/nodes/CameraNode'
import { DialogNode } from './components/nodes/DialogNode'
import { ConfirmNode } from './components/nodes/ConfirmNode'
import { FileNode } from './components/nodes/FileNode'
import { WebsiteNode } from './components/nodes/WebsiteNode'
import { TerminalNode } from './components/nodes/TerminalNode'
import { FormNode } from './components/nodes/FormNode'

/* ------------------------------------------------
   1. Node Configurations 
   ------------------------------------------------ */

   export const NODE_CONFIGS = {
    instruction: {
      w: 300,
      h: 160,
      isCircular: false,
      component: InstructionNode,
      icon: Type,
      locked: true,
      play: true,
    },
    text: {
      w: 300,
      h: 160,
      isCircular: false,
      component: TextNode,
      icon: Type,
      locked: false,
      play: true,
    },
    image: {
      w: 320,
      h: 240,
      isCircular: false,
      component: ImageNode,
      icon: Image,
      locked: false,
      play: true,
    },
    camera: {
      w: 320,
      h: 240,
      isCircular: false,
      component: CameraNode,
      icon: Camera,
      locked: false,
      play: true,
    },
    speech: {
      w: 280,
      h: 120,
      isCircular: false,
      component: SpeechNode,
      icon: Mic,
      locked: true,
      play: true,
    },
    file: {
      w: 280,
      h: 120,
      isCircular: false,
      component: FileNode,
      icon: File,
      locked: false,
      play: true,
    },
    range: {
      w: 280,
      h: 80,
      isCircular: false,
      component: RangeNode,
      icon: Sliders,
      locked: true,
      play: true,
    },
    button: {
      w: 100,
      h: 100,
      isCircular: true,
      component: ButtonNode,
      icon: Play,
      locked: false,
      play: true,
    },
    toggle: {
      w: 100,
      h: 100,
      isCircular: true,
      component: ToggleNode,
      icon: ToggleLeft,
      locked: false,
      play: true,
    },
    condition: {
      w: 100,
      h: 100,
      isCircular: true,
      component: ConditionNode,
      icon: GitBranch,
      locked: false,
      play: true,
    },
    timer: {
      w: 100,
      h: 100,
      isCircular: true,
      component: TimerNode,
      icon: Timer,
      locked: false,
      play: true,
    },
    dialog: {
      w: 280,
      h: 120,
      isCircular: false,
      component: DialogNode,
      icon: MessageSquare,
      locked: false,
      play: true,
    },
    confirm: {
      w: 280,
      h: 120,
      isCircular: false,
      component: ConfirmNode,
      icon: AlertCircle,
      locked: false,
      play: true,
    },
    search: {
      w: 100,
      h: 100,
      isCircular: true,
      component: undefined,
      icon: Search,
      locked: true,
      play: true,
    },
    website: {
      w: 800,
      h: 500,
      isCircular: false,
      component: WebsiteNode,
      icon: Globe,
      locked: true,
      play: true,
    },
    terminal: {
      w: 300,
      h: 160,
      isCircular: false,
      component: TerminalNode,
      icon: Terminal,
      locked: true,
      play: true,
    },
    database: {
      w: 100,
      h: 100,
      isCircular: true,
      component: undefined,
      icon: Database,
      locked: true,
      play: true,
    },
    form: {
      w: 320,
      h: 400,
      isCircular: false,
      component: FormNode,
      icon: FormInput,
      locked: true,
      play: false,
    },
  } as const;
  