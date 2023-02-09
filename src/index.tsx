import 'tippy.js/dist/tippy.css'
import './index.css'
import ReactDOM from 'react-dom'
import { useEffect, useRef, useState } from 'react'

import {
  createPlateUI,
  HeadingToolbar,
  MentionCombobox,
  Plate,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createDndPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  createComboboxPlugin,
  createMentionPlugin,
  createIndentPlugin,
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createDeserializeMdPlugin,
  createDeserializeCsvPlugin,
  createNormalizeTypesPlugin,
  createFontSizePlugin,
  createHorizontalRulePlugin,
  createDeserializeDocxPlugin,
  PlateEventProvider,
  AutoformatPlugin,
  ELEMENT_CODE_BLOCK,
  StyledElement,
  // createPluginFactory,
} from '@udecode/plate'
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
  ExcalidrawElement,
} from '@udecode/plate-ui-excalidraw'
import { createJuicePlugin } from '@udecode/plate-juice'
import { MarkBallonToolbar, ToolbarButtons } from './config/components/Toolbars'
import { withStyledPlaceHolders } from './config/components/withStyledPlaceHolders'
import { withStyledDraggables } from './config/components/withStyledDraggables'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { MENTIONABLES } from './config/mentionables'
import { CONFIG } from './config/config'
// import { VALUES } from './config/values/values'
import { createDragOverCursorPlugin } from './config/plugins'
import { CursorOverlayContainer } from './config/components/CursorOverlayContainer'
import {
  createMyPlugins,
  MyEditor,
  MyPlatePlugin,
  MyValue,
} from './config/typescript'
// import InitialData from './config/values/initialDataSetup'

// Migrate to v8 - Part 1: https://www.loom.com/share/71596199ad5a47c2b58cdebab26f4642
// Migrate to v8 - Part 2: https://www.loom.com/share/d85c89220ffa4fe2b6f934a6c6530689
// Migrate to v8 - Part 3: https://www.loom.com/share/c1bf20e18d8a42f8a55f8a28ab605148

const id = 'Examples/Playground'

let components = createPlateUI({
  [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  [ELEMENT_CODE_BLOCK]: StyledElement,
  // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
components = withStyledDraggables(components)

const plugins = createMyPlugins(
  [
    createParagraphPlugin(),
    createBlockquotePlugin(),
    createTodoListPlugin(),
    createHeadingPlugin(),
    createImagePlugin(),
    createHorizontalRulePlugin(),
    createLinkPlugin(),
    createListPlugin(),
    createTablePlugin(),
    createMediaEmbedPlugin(),
    createExcalidrawPlugin() as MyPlatePlugin,
    createCodeBlockPlugin(),
    createAlignPlugin(CONFIG.align),
    createBoldPlugin(),
    createCodePlugin(),
    createItalicPlugin(),
    createHighlightPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),
    createKbdPlugin(),
    createNodeIdPlugin(),
    createDndPlugin(),
    createDragOverCursorPlugin(),
    createIndentPlugin(CONFIG.indent),
    createAutoformatPlugin<
      AutoformatPlugin<MyValue, MyEditor>,
      MyValue,
      MyEditor
    >(CONFIG.autoformat),
    createResetNodePlugin(CONFIG.resetBlockType),
    createSoftBreakPlugin(CONFIG.softBreak),
    createExitBreakPlugin(CONFIG.exitBreak),
    createNormalizeTypesPlugin(CONFIG.forceLayout),
    createTrailingBlockPlugin(CONFIG.trailingBlock),
    createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
    createComboboxPlugin(),
    createMentionPlugin(),
    createDeserializeMdPlugin(),
    createDeserializeCsvPlugin(),
    createDeserializeDocxPlugin(),
    createJuicePlugin() as MyPlatePlugin,
  ],
  {
    components,
  }
)

const Plugins = () => {
  const containerRef = useRef(null)
  const [value, setValue] = useState<MyValue>()
  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <DndProvider backend={HTML5Backend}>
      <PlateEventProvider>
        <HeadingToolbar>
          <ToolbarButtons />
        </HeadingToolbar>
      </PlateEventProvider>

      <div ref={containerRef} style={{ position: 'relative' }}>
        <Plate<MyValue>
          id={id}
          editableProps={CONFIG.editableProps}
          onChange={(e) => {
            setValue(e)
          }}
          value={value}
          initialValue={[
            {
              type: 'h1',
              __source: {
                fileName:
                  '/Users/job/Desktop/plate/plate-playground/src/config/values/values.tsx',
                lineNumber: 410,
                columnNumber: 5,
              },
              children: [
                {
                  text: '(RECIPE) SUMMarization',
                  bold: true,
                  DN: 'VSY',
                },
              ],
              id: '10108',
            },

            {
              type: 'h2',
              children: [
                {
                  text: 'Objectives',
                  bold: true,
                  bereket: true,
                },
              ],
              id: '1675918097907',
            },
            {
              type: 'p',
              children: [
                {
                  text: 'Understanding the On Hallucination and Predictive Uncertainty in Conditional Language generation Paper',
                },
              ],
              id: '1675918052073',
            },
            {
              type: 'h2',

              id: '1675918158574',
              children: [
                {
                  text: 'Potential Use Cases ',
                  bold: true,
                  id: '2123',
                },
                {
                  text: 'jems role',
                  id: '2121',
                },
              ],
            },
            {
              type: 'p',
              children: [
                {
                  text: '#Neural-natural-language-generation, #image-captioning, #data-to-text-generation,\n#Abstravtive-summarization , and #neural-mechine-translation',
                },
              ],
              id: '1675918178984',
            },
            {
              type: 'p',
              id: '1675931712287',
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              type: 'h2',
              children: [
                {
                  text: 'Who is This For?',
                  bold: true,
                },
              ],
              id: '1675918161483',
            },
            {
              type: 'p',
              children: [
                {
                  text: 'Natural Language Processing (NLP) developers looking to better understand and correct for hallucination in a varety of Natural Language Generation tasks.',
                },
              ],
              id: '1675918303622',
            },
            {
              type: 'h2',
              id: '1675918364212',
              children: [
                {
                  text: 'Resources',
                  bold: true,
                },
              ],
            },
            {
              type: 'h2',
              id: '1675931814799',
              children: [
                {
                  text: 'Jems cameroon',
                },
              ],
            },
            {
              type: 'p',
              children: [
                {
                  text: '',
                },
              ],
              id: '12345',
            },
          ]}
          plugins={plugins}
        >
          {/* <Serialized /> */}
          <MarkBallonToolbar />

          <MentionCombobox items={MENTIONABLES} />

          <CursorOverlayContainer containerRef={containerRef} />
        </Plate>
      </div>
    </DndProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Plugins />, rootElement)
