class CreateUsernames < ActiveRecord::Migration[5.0]
  def change
    create_table :usernames do |t|
      t.string :department_code
      t.string :course_number
      t.string :section_name

      t.timestamps
    end
  end
end
