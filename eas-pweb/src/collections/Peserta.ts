import { CollectionConfig } from 'payload/types'

const Peserta: CollectionConfig = {
  slug: 'peserta',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
        name: 'Name',
        label: 'Name',
        type: 'text',
        required: true,
    }, 
    {
        name: 'AsalSekolah',
        label: 'Asal Sekolah',
        type: 'text',
        required: true,
    }, 
    {
        name: 'Email',
        label: 'Email',
        type: 'text',
        required: true,
    }, 
    {
        name: 'Status', 
        type: 'radio', 
        required: true,
        options: [
            {
                label: 'Waiting',
                value: 'waiting',
            },
            {
                label: 'Rejected',
                value: 'rejected',
            },
            {
                label: 'Accepted',
                value: 'Accepted',
            },
        ],
        defaultValue: 'Waiting', 
        admin: {
            layout: 'horizontal',
        },
    }, 
    {
        name: "TanggalPendaftaran",
        type: "date",
        required: true,
        admin: {
            date: {
              pickerAppearance: 'dayOnly',
              displayFormat: 'd MMM yyy',
            },
          },
    },

  ],
}

export default Peserta
