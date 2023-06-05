<script>
    import { Form, Input, Select, Choice } from 'sveltejs-forms';
    import yup from 'yup@0.27';
   
    function handleSubmit({ detail: { values, setSubmitting, resetForm } }) {
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
        resetForm({
          user: { email: 'test@user.com' }, // optional
        });
      }, 2000);
   
      /**
       * {
       *   user: {
       *    email: 'email@example.com'
       *   },
       *   password: '123456',
       *   language: 'svelte',
       *   os: 'osx,linux'
       * }
       */
    }
   
    function handleReset() {
      console.log('form has been reset');
    }
   
    const schema = yup.object().shape({
      user: yup.object().shape({
        email: yup
          .string()
          .required()
          .email(),
      }),
      password: yup.string().min(4),
      language: yup.string().required(),
      os: yup.string(),
    });
   
    const langOptions = [
      { id: 'svelte', title: 'Svelte' },
      { id: 'react', title: 'React' },
      { id: 'angular', title: 'Angular' },
    ];
   
    const osOptions = [
      { id: 'macos', title: 'macOS' },
      { id: 'linux', title: 'Linux 🐧' },
      { id: 'windows', title: 'Windows' },
    ];
   
    const initialValues = {
      language: 'svelte',
    };
  </script> 
   
  <style>
    :global(.sveltejs-forms) {
      background-color: #f8f8f8;
      display: inline-block;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
   
    :global(label) {
      font-size: 0.8rem;
      color: #888;
      margin-bottom: 0.2rem;
    }
   
    :global(.message) {
      font-size: 0.8rem;
      color: #888;
      margin: 0.2rem 0;
      color: #f56565;
    }
   
    :global(input[type='text']),
    :global(textarea),
    :global(select) {
      width: 100%;
      background-color: white;
      margin: 0;
    }
   
    :global(input[type='checkbox'] + label) {
      display: inline-block;
      margin-right: 2rem;
    }
   
    :global(.field) {
      margin-bottom: 1rem;
    }
      
    button {
      border-radius: 5px;
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      color: white;
    }
   
    button[type='reset'] {
      background-color: #f56565;
    }
   
    button[type='submit'] {
      background-color: #48bb78;
      width: 80px;
    }
  </style> 
   
  <Form
    {schema}  
    {initialValues} 
    validateOnBlur={false} 
    validateOnChange={false} 
    on:submit={handleSubmit}
    on:reset={handleReset}
    let:isSubmitting
    let:isValid
  >
    <Input
      name="user.email" 
      label="Email Address"
      value="test@user.com" 
      placeholder="e.g. user@example.com" />
    <Input name="password" type="password" placeholder="Password" />
    <Select name="language" options={langOptions} />
    <Choice
      name="os"
      options={osOptions}
      disabled
      multiple />
    <button type="reset">Reset</button>
    <button type="submit" disabled={isSubmitting}>Sign in</button>
    <div>The form is valid: {isValid}</div>
  </Form>