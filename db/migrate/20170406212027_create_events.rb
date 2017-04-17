class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :start_time
      t.string :end_time
      t.string :dow

      t.timestamps
    end
  end
end
