import React from 'react'
import { JsonForms } from '@jsonforms/react'
import { materialRenderers, materialCells } from '@jsonforms/material-renderers'
import { Button } from '@mui/material'
import { BaseNodeProps } from './NodeTypes'

const defaultSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Please enter your name'
    },
    email: {
      type: 'string',
      format: 'email',
      description: 'Please enter your email'
    },
    age: {
      type: 'integer',
      description: 'Please enter your age',
      minimum: 0,
      maximum: 120
    }
  },
  required: ['name', 'email']
}

const defaultUiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/name',
      options: {
        showUnfocusedDescription: false
      }
    },
    {
      type: 'Control',
      scope: '#/properties/email',
      options: {
        showUnfocusedDescription: false
      }
    },
    {
      type: 'Control',
      scope: '#/properties/age',
      options: {
        showUnfocusedDescription: false
      }
    }
  ],
  options: {
    margin: 'dense',
    hideRequiredAsterisk: false
  }
}

export function FormNode({ data, onChange }: BaseNodeProps) {
  const [formData, setFormData] = React.useState(data.form?.data || {})
  const [isValid, setIsValid] = React.useState(false)

  const handleChange = ({ data: newData, errors }: any) => {
    setFormData(newData)
    setIsValid(errors?.length === 0)
    onChange?.({ 
      form: { 
        data: newData,
        schema: data.form?.schema || defaultSchema,
        uiSchema: data.form?.uiSchema || defaultUiSchema
      } 
    })
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isValid) {
      console.log('Form submitted:', formData)
      // Here you can handle the form submission
      // For example, send the data to a server
    }
  }

  return (
    <div 
      className="w-full h-full flex flex-col"
      onPointerDown={(e) => {
        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation?.()
      }}
    >
      <div className="flex-1 overflow-auto">
        <div className="p-3">
          <JsonForms
            schema={data.form?.schema || defaultSchema}
            uischema={data.form?.uiSchema || defaultUiSchema}
            data={formData}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={handleChange}
            validationMode="ValidateAndShow"
          />
        </div>
      </div>
      <div className="flex justify-end border-t p-3 bg-gray-50 mt-auto">
        <Button
          variant="contained"
          color="primary"
          size="small"
          disabled={!isValid}
          onClick={handleSubmit}
          sx={{
            textTransform: 'none',
            minWidth: '80px',
            fontSize: '0.875rem'
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}