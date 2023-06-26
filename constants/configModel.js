export const configModel = [
    {
        id: 1,
        name: 'CVChain',
        short_description:
            'Extracting key information from CV/Resumes. Currently we support Vietnamese, English and Japanese. The extracted information will be grouped into sine',
        input: {
            params: {
                from_input: [
                    {
                        type: ['file', 'text'],
                        label: 'Input',
                        key: 'file',
                        input_accepted_type:
                            'image/*,.doc, .docx, .pdf, .sr,.ras',
                    }
                ],
            },
            api_url: 'http://app.gotai.ml/cv/call/predict_autofrontend',
            sample_url: 'http://mock.techtrains.ml/call/hrchain_cvchain',
        },
        output: {
            preview: [
                {
                    type: 'fancy_json',
                    src: 'output.kv[0]',
                },
                {
                    type: 'image',
                    src: 'output.pages',
                },
            ],
            mapping_key: {
                edu_period_value: 'Period',
                edu_school_value: 'School',
                edu_major_value: 'Major',
                edu_level_value: 'Level',
                edu_department_value: 'Department',
                edu_score_value: 'GPA',
                exp_period_value: 'Period',
                exp_description_key: 'Work description',
                exp_company_address_value: 'Company Address',
                exp_company_name_value: 'Company',
                exp_position_value: 'Title',
                profile_email_value: 'Email',
                profile_address_value: 'Address',
                profile_phone_value: 'Phone',
                profile_name_value: 'Name',
                profile_birth_date_value: 'D.o.B',
                profile_sex_value: 'Gender',
                profile_linkin_value: 'Linkin',
                profile_facebook_value: 'Facebook',
                profile_twitter_value: 'Twitter',
                certificate: 'Certificate',
                soft_skill: 'Soft skills',
                hard_skill: 'Hard skills',
                language: 'Languages',
                occupation: 'Matching Occupation',
                timeline: 'Timeline',
                education: 'Education detail',
                experience: 'Experience detail',
                profile: 'Personal information',
                skill: 'Skills',
                advance: 'Advance analysis',
                education_master_key: 'Education',
                experienc_master_key: 'Experience',
                objective_master_key: 'Objective',
                reference_master_key: 'Reference',
                personality_master_key: 'Personality',
                promise_master_key: 'Promise',
                skill_master_key: 'Skill',
                profil_master_key: 'Profile',
                award_master_key: 'Award',
                oth_master_key: 'Other',
                certificate_training_master_key: 'Certificate',
                desired_master_key: 'Desire',
                projec_master_key: 'Project',
                social_activities_master_key: 'Activities',
                interest_master_key: 'Interest',
                family_master_key: 'Family',
                cv_master_key: 'Curriculum Vitae',
                cover_letter_master_key: 'Letter',
                summary_master_key: 'Summary',
                personal_master_key: 'Personality',
                project_master_key: 'Project',
                others: 'Others',
            },
        },
    },
    {
        id: 2,
        name: 'OCR - General Document',
        short_description:
            'Converting images and PDF to text. Currently we support Vietnamese, English and Japanese. This is the general model so that we could customize it so that it could work better on some specific document',
        type: 'multi_scenarios',
        scenarios: [
            {
                label: 'Vietnamese',
                input: {
                    params: {
                        from_input: [
                            {
                                type: ['file','text'],
                                label: 'Input',
                                key: 'input',
                                input_accepted_type:
                                    'image/*,.doc, .docx, .pdf, .sr,.ras',
                            },
                        ],
                        kv_model: '',
                        ocr_model: 'onmt',
                        linecut_model: 'craft_tiny',
                        alignment: true,
                        limit_start: 1,
                    },
                    api_url:
                        'http://app.gotai.ml/ocr/call/predict_autofrontend',
                    sample_url: 'http://mock.techtrains.ml/call/ocr_general',
                },
                output: {
                    preview: [
                        {
                            type: 'image',
                            src: 'output[0].image',
                            extract_object: true,
                        },
                    ],
                },
            },
            {
                label: 'English',
                input: {
                    params: {
                        from_input: [
                            {
                                type: ['file', 'text'],
                                label: 'Input',
                                key: 'input',
                                input_accepted_type:
                                    'image/*,.doc, .docx, .pdf, .sr,.ras',
                            },
                        ],
                        kv_model: '',
                        ocr_model: 'onmt',
                        linecut_model: 'craft_tiny',
                        alignment: true,
                        limit_start: 1,
                    },
                    api_url:
                        'http://app.gotai.ml/ocr/call/predict_autofrontend',
                    sample_url: 'http://mock.techtrains.ml/call/ocr_general ',
                },
                output: {
                    preview: [
                        {
                            type: 'image',
                            src: 'output[0].image',
                            extract_object: true,
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 3,
        name: 'OCR - VN Personal Identity Card',
        short_description:
            'Extracting key information from personal document. Currently we support Vietnamese ID card (CMND, CCCD), passport (200 countries) and driver license (Vietnamese, Japanese)The extracted fields on front side are full name, DoB, hometown, portrait image, expired date, sex, nationality and religon. The extracted fields on back side are fingerprint, issue date. ',
        input: {
            params: {
                from_input: [
                    {
                        type: ['file', 'text'],
                        label: 'Input',
                        key: 'input',
                        input_accepted_type:
                            'image/*,.doc, .docx, .pdf, .sr,.ras',
                    },
                ],
            },
            api_url:
                'http://app.techtrains.ml/app-vn-iden-card-test/call/predict_autofrontend',
            sample_url: 'http://mock.techtrains.ml/call/ocr_identity_card',
        },
        output: {
            preview: [
                {
                    type: 'key_value',
                    src: 'output[0].key_value',
                },
                {
                    type: 'image',
                    src: 'output[0].image',
                },
            ],
            mapping_key: {
                id: 'ID',
                ho_ten: 'Họ tên',
                ngay_sinh: 'Ngày sinh',
                nguyen_quan: 'Nguyên quán',
                ho_khau_thuong_tru: 'Hộ khẩu thường trú',
                ngay_het_han: 'Ngày hết hạn',
                class_name: 'Nhận diện',
            },
        },
    },
    {
        id: 4,
        name: 'OCR - Legal Document',
        short_description:
            'Extracting key information from personal document. Currently we support Vietnamese ID card (CMND, CCCD), passport (200 countries) and driver license (Vietnamese, Japanese)The extracted fields on front side are full name, DoB, hometown, portrait image, expired date, sex, nationality and religon. The extracted fields on back side are fingerprint, issue date. ',
        type: 'multi_scenarios',
        scenarios: [
            {
                label: 'Vietnamese',
                input: {
                    params: {
                        from_input: [
                            {
                                type: ['file','text'],
                                label: 'Input',
                                key: 'input',
                                input_accepted_type:
                                    'image/*,.doc, .docx, .pdf, .sr,.ras',
                            },
                        ],
                        kv_model: 'vbpl',
                        ocr_model: 'onmt',
                        linecut_model: 'craft_tiny',
                        alignment: true,
                        limit_start: 2,
                        limit_end: 2,
                    },
                    api_url:
                        'http://app.gotai.ml/ocr/call/predict_autofrontend',
                },
                output: {
                    preview: [
                        {
                            type: 'image',
                            src: 'output[0].image',
                            extract_object: true,
                        },
                    ],
                    
                },
            },
            {
                label: 'English',
                input: {
                    params: {
                        from_input: [
                            {
                                type: ['file','text'],
                                label: 'Input',
                                key: 'input',
                                input_accepted_type:
                                    'image/*,.doc, .docx, .pdf, .sr,.ras',
                            },
                        ],
                        kv_model: 'vbpl',
                        ocr_model: 'onmt',
                        linecut_model: 'craft_tiny',
                        alignment: true,
                        limit_start: 2,
                        limit_end: 2,
                    },
                    api_url:
                        'http://app.gotai.ml/ocr/call/predict_autofrontend',
                },
                output: {
                    preview: [
                        {
                            type: 'image',
                            src: 'output[0].image',
                            extract_object: true,

                        },
                    ],
                    
                },
            },
        ],
    },
    {
        id: 5,
        name: 'OCR - Financial Statement',
        short_description:
            'Extracting key information from legal document and organize it as CSV format. Currently we support vietnamese and english.',
        type: 'multi_scenarios',
        scenarios: [
            {
                label: 'Vietnamese',
                input: {
                    params: {
                        from_input: [
                            {
                                type: ['file','text'],
                                label: 'Input',
                                key: 'input',
                                input_accepted_type:
                                    'image/*,.doc, .docx, .pdf, .sr,.ras',
                            },
                        ],
                        kv_model: 'vbpl',
                        ocr_model: 'onmt',
                        linecut_model: 'craft_tiny',
                        alignment: true,
                        export_excel: 1,
                    },
                    api_url:
                        'http://app.gotai.ml/ocr/call/predict_autofrontend',
                    sample_url:
                        'http://mock.techtrains.ml/call/ocr_fin_statement',
                },
                output: {
                    preview: [
                        {
                            type: 'image',
                            src: 'output[0].image',
                            extract_object: true,
                        },
                    ],
                },
            },
            {
                label: 'English',
                input: {
                    params: {
                        from_input: [
                            {
                                type: ['file','text'],
                                label: 'Input',
                                key: 'input',
                                input_accepted_type:
                                    'image/*,.doc, .docx, .pdf, .sr,.ras',
                            },
                        ],
                        kv_model: 'vbpl',
                        ocr_model: 'onmt',
                        linecut_model: 'craft_tiny',
                        alignment: true,
                        export_excel: 1,
                    },
                    api_url:
                        'http://app.gotai.ml/ocr/call/predict_autofrontend',
                    sample_url:
                        'http://mock.techtrains.ml/call/ocr_fin_statement',
                },
                output: {
                    preview: [
                        {
                            type: 'image',
                            src: 'output[0].image',
                            extract_object: true,
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 6,
        name: 'eKYC - Face Card Matching',
        short_description:
            'Showing the similar score of two faces from digital images or a video frames from a video source.',
        input: {
            params: {
                from_input: [
                    {
                        type: ['file','text'],
                        label: 'Image card',
                        key: 'image_card',
                        input_accepted_type:
                            'image/*,.doc, .docx, .pdf, .sr,.ras',
                    },
                    {
                        type: ['file','text'],
                        label: 'Image general',
                        key: 'image_general',
                        input_accepted_type:
                            'image/*,.doc, .docx, .pdf, .sr,.ras',
                    },
                ],
            },
            api_url:
                'http://app.techtrains.ml/app-vn-iden-card-test/call/face_general_autofrontend',
        },
        output: {
            preview: [
                {
                    type: 'image',
                    src: 'output[0].image',
                },
                {
                    type: 'key_value',
                    src: 'output[0].key_value',
                },
            ],
            mapping_key: {
                is_matched: 'Trùng khớp',
                similarity: 'Độ tương tự',
            },
        },
    },
    {
        id: 7,
        name: 'eKYC - Face Detection',
        short_description:
            'Showing the similar score of two faces from digital images or a video frames from a video source.',
        input: {
            params: {
                from_input: [
                    {
                        type: ['file','text'],
                        label: 'Image',
                        key: 'image',
                        input_accepted_type:
                            'image/*,.doc, .docx, .pdf, .sr,.ras',
                    },
                    
                ],
            },
            api_url: 'http://app.gotai.ml/cv_face_detect/call/predict_face_gender_age',
        },
        output: {
            preview: [
                {
                    type: 'image',
                    src: 'output[0].image',
                },
                {
                    type: 'key_value',
                    src: 'output[0].kv',
                },
            ],
            mapping_key: {
                is_matched: 'Trùng khớp',
            },
        },
    },
    {
        id: 8,
        name: 'CCTV - Licence Plate',
        short_description: `Converting the images of license plate to text. Currently we support more than 150 countries' licence plate.`,
        input: {
            params: {
                from_input: [
                    {
                        type: ['file','text'],
                        label: 'Image',
                        key: 'image',
                        input_accepted_type: 'image/*',
                    },
                ],
            },
            api_url:
                ' http://app.techtrains.ml/vn_licence_plate/call/process_autofronend',
        },
        output: {
            preview: [
                {
                    type: 'image',
                    src: 'output[0].image',
                },
                {
                    type: 'key_value',
                    src: 'output[0].key_value',
                },
            ],
            // mapping_key: {
            //     is_matched: 'Trùng khớp'
            // }
        },
    },
    {
        id: 9,
        name: 'Address Normalization',
        short_description: `Converting the images of license plate to text. Currently we support more than 150 countries' licence plate.`,
        input: {
            params: {
                from_input: [
                    {
                        type: ['text'],
                        label: 'Address',
                        key: 'address',
                    },
                    
                ],
            },
            api_url:
                'http://nlp.techtrains.ml/addr_norm/call/predict_autofrontend',
        },
        output: {
            preview: [
                {
                    type: 'key_value',
                    src: 'output.key_value',
                },
            ],
            mapping_key: {
                city: 'Tỉnh/Thành phố',
                district: 'Quận/Huyện',
                commune: 'Phường/Xã',
                normalized: 'Chuẩn hoá',
            },
        },
    },

    //////////////////////////////

    {
        id: 10,
        name: 'Text Classification',
        short_description:
            'Velit fugiat do cupidatat utVelit fugiat do cupidatat utVelitat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupida fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidatat ut',
        type: 'text_classification',
        input: {
            params: {
                from_input: [
                    {
                        type: ['textarea'],
                        label: 'Input text',
                        key: 'input',
                    },
                ],
            },
            api_url: 'http://app.gotai.ml/ocr/call/predict',
        },
        output: {
            preview: [
                {
                    type: 'table',
                    src: 'output',
                },
            ],
        },
    },
    {
        id: 20,
        name: 'Text translation',
        short_description:
            'Velit fugiat do cupidatat utVelit fugiat do cupidatat utVelitat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupida fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidatat ut',
        type: 'text_translation',
        input: {
            params: {
                from_input: [
                    {
                        type: ['textarea'],
                        label: 'Input text',
                        key: 'input',
                    },
                ],
            },
            api_url: 'http://app.gotai.ml/ocr/call/predict',
        },
        output: {
            preview: [
                {
                    type: 'textarea',
                    src: 'output.value',
                },
            ],
        },
    },
    {
        id: 40,
        name: 'Image translation',
        short_description:
            'Velit fugiat do cupidatat utVelit fugiat do cupidatat utVelitat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupida fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidatat ut',
        type: 'image_translation',
        input: {
            params: {
                from_input: [
                    {
                        type: ['file'],
                        label: 'Image',
                        key: 'input',
                        input_accepted_type: 'image/*',
                    },
                ],
            },
            api_url: 'http://app.gotai.ml/ocr/call/predict',
        },
        output: {
            preview: [
                {
                    type: 'image',
                    src: 'output.origin',
                },
                {
                    type: 'image',
                    src: 'output.value',
                },
            ],
        },
    },

    {
        id: 50,
        name: 'Named entity recognition',
        short_description:
            'Velit fugiat do cupidatat utVelit fugiat do cupidatat utVelitat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupida fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidatat ut',
        type: 'ner',
        input: {
            params: {
                from_input: [
                    {
                        type: ['textarea'],
                        label: 'Input text',
                        key: 'input',
                    },
                ],
            },
            api_url: 'http://app.gotai.ml/ocr/call/predict',
        },
        output: {
            preview: [
                {
                    type: 'ner',
                    src: 'output',
                },
            ],
        },
    },
    {
        id: 60,
        name: 'Image captioning',
        short_description:
            'Velit fugiat do cupidatat utVelit fugiat do cupidatat utVelitat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupida fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidatat ut',
        type: 'image_captioning',
        input: {
            params: {
                from_input: [
                    {
                        type: ['file'],
                        label: 'Image',
                        key: 'input',
                        input_accepted_type: 'image/*',
                    },
                ],
            },
            api_url: 'http://app.gotai.ml/ocr/call/predict',
        },
        output: {
            preview: [
                {
                    type: 'image',
                    src: 'output.origin',
                },
                {
                    type: 'textarea',
                    src: 'output.value',
                },
            ],
        },
    },
    {
        id: 70,
        name: 'Speech to text',
        short_description:
            'Velit fugiat do cupidatat utVelit fugiat do cupidatat utVelitat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidaat utVelit fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupida fugiat do cupidatat utVelit fugiat do cupidatat utVelit fugiat do cupidatat ut',
        type: 'text_classification',
        input: {
            params: {
                from_input: [
                    {
                        type: ['file'],
                        label: 'Audio',
                        key: 'input',
                        input_accepted_type: '.mp3',
                    },
                ],
            },
            api_url: 'http://app.gotai.ml/ocr/call/predict',
        },
        output: {
            preview: [
                {
                    type: 'audio',
                    src: 'output.origin',
                },
                {
                    type: 'textarea',
                    src: 'output.value',
                },
            ],
        },
    },
]
